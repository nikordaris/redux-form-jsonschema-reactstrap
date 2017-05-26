import React, { Component } from 'react';
import type { SchemaType } from 'jsonschema-redux-form';
import { UncontrolledTooltip, Label } from 'reactstrap';
import { get } from 'lodash';

const LABEL_PROP = 'title';

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
    name: string,
    schema: SchemaType,
    required: boolean,
    tag: string,
    errorProps: MessagePropsType,
    warningProps: MessagePropsType,
    labelProps: {
      [string]: any,
      tag: string,
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
      name,
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
    const labelId = `${name}-label`;
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

        <LabelTag id={labelId} for={name} {...labelProps}>
          {required && <span style={{ color: requiredColor }}>*</span>}
          {label}
        </LabelTag>

        {React.children(child =>
          React.cloneElement(child, { input, id: name, schema, ...rest })
        )}

        {showError(this.props) &&
          error &&
          <ErrorTag id={`${name}-error`} {...errorProps}>
            {error}
          </ErrorTag>}

        {showWarning(this.props) &&
          warning &&
          <WarningTag id={`${name}-warning`} {...warningProps}>
            {warning}
          </WarningTag>}
      </Tag>
    );
  }
}
