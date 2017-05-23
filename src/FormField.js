import React, { Component } from 'react';
import type { SchemaType } from 'jsonschema-redux-form';
import { UncontrolledTooltip, Label } from 'react-strap';
import { has, get } from 'lodash';

const LABEL_PROP = 'meta.form.label';

export type OptionsType = {
  tag: string
};

type MessagePropsType = {
  [string]: any,
  tag: string,
  show: (props: { [string]: any }) => boolean
};

const DEFAULT_SHOW = ({ meta }) => meta.touched;

export default class FormField extends Component {
  static defaultProps = {
    required: false,
    tag: 'div',
    labelProps: {},
    errorProps: {},
    warningProps: {},
    tooltipProps: {}
  };
  props: {
    id: string,
    schema: SchemaType,
    required: boolean,
    tag: string,
    errorProps: MessagePropsType,
    warningProps: MessagePropsType,
    labelProps: {
      [string]: any,
      tag: string,
      tooltipPlacement: string,
      requiredColor: string
    },
    tooltipProps: {
      [string]: any,
      placement: string
    },
    meta: { [string]: any },
    children: React.Element<*> | [React.Element<*>]
  };

  render() {
    const {
      id,
      styles,
      required,
      tag: Tag,
      schema,
      tooltipProps: { placement = 'right', tooltipProps },
      labelProps: {
        tag: LabelTag = Label,
        requiredColor = 'red',
        ...labelProps
      },
      errorProps: {
        tag: ErrorTag = 'div',
        show: showError = DEFAULT_SHOW,
        ...errorProps
      },
      warningProps: {
        tag: WarningTag = 'div',
        show: showWarning = DEFAULT_SHOW,
        ...warningProps
      },
      meta: { error, warning },
      input,
      ...rest
    } = this.props;
    const label = get(schema, LABEL_PROP);
    const labelId = `${id}-label`;
    return (
      <Tag {...rest}>
        {schema.description &&
          <UncontrolledTooltip
            target={labelId}
            placement={placement}
            {...tooltipProps}
          >
            {schema.description}
          </UncontrolledTooltip>}

        <LabelTag id={labelId} for={id} {...labelProps}>
          {required && <span style={{ color: requiredColor }}>*</span>}
          {label}
        </LabelTag>

        {React.children(child => React.cloneElement(child, {input, id, schema, ...rest}))}

        {showError(this.props) &&
          error &&
          <ErrorTag id={`${id}-error`} {...errorProps}>
            {error}
          </ErrorTag>}
          
        {showWarning(this.props) &&
          warning &&
          <WarningTag id={`${id}-warning`} {...warningProps}>
            {warning}
          </WarningTag>}
      </Tag>
    );
  }
}
