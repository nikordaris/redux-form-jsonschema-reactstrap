import React, { Component } from 'react';
import type { SchemaType } from 'jsonschema-redux-form';
import { UncontrolledTooltip } from 'react-strap';
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

  renderTooltip(target: string, placement: string = 'right') {
    const { schema: { description } } = this.props;
    return (
      <UncontrolledTooltip target={target} placement={placement}>
        {description}
      </UncontrolledTooltip>
    );
  }

  render() {
    const {
      id,
      styles,
      required,
      tag: Tag,
      schema,
      tooltipProps: { placement = 'right', tooltipProps },
      labelProps: {
        tag: LabelTag = 'label',
        tooltipPlacement = 'right',
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
      ...rest
    } = this.props;
    const label = get(schema, LABEL_PROP);
    const labelId = `${id}-label`;
    return (
      <Tag id={id} {...rest}>
        {schema.description &&
          <UncontrolledTooltip
            target={labelId}
            placement={placement}
            {...tooltipProps}
          >
            {schema.description}
          </UncontrolledTooltip>}
        <LabelTag id={labelId} {...labelProps}>
          {required && <span style={{ color: requiredColor }}>*</span>}
          {label}
        </LabelTag>
        {React.children(child => React.cloneElement(child, this.props))}
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
