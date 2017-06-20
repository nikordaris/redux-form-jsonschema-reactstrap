import React, { Component, Children, cloneElement } from 'react';
import type { SchemaType } from 'redux-jsonschema';
import {
  UncontrolledTooltip,
  Label,
  FormFeedback,
  FormGroup
} from 'reactstrap';
import { get, has } from 'lodash';

const LABEL_PROP = 'title';

const DEFAULT_SHOW = ({ meta }) => meta.touched;

export default class FormField extends Component {
  static defaultProps = {
    required: false,
    tag: FormGroup,
    labelProps: {},
    showFeedback: DEFAULT_SHOW,
    tooltipProps: {}
  };
  props: {
    name: string,
    schema: SchemaType,
    required: boolean,
    tag: string,
    showFeedback: ShowFeedbackType,
    labelProps: {
      tag: string,
      requiredColor: string
    },
    tooltipProps: {
      placement: string
    },
    meta: { [string]: any },
    children: React.Element<*> | [React.Element<*>]
  };

  getInputState() {
    const { meta, showFeedback } = this.props;

    if (showFeedback(this.props)) {
      if (has(meta, 'error')) {
        return 'danger';
      } else if (has(meta, 'warning')) {
        return 'warning';
      }
    }

    return undefined;
  }

  renderTooltip(labelId, schema, tooltipProps) {
    const { placement, ...rest } = tooltipProps;
    return (
      <UncontrolledTooltip target={labelId} placement={placement} {...rest}>
        {schema.description}
      </UncontrolledTooltip>
    );
  }

  render() {
    const {
      name,
      styles,
      required,
      tag: Tag,
      schema,
      tooltipProps: { placement = 'right', ...tooltipProps },
      labelProps: {
        tag: LabelTag = Label,
        requiredColor = 'red',
        ...labelProps
      },
      showFeedback,
      meta: { error, warning },
      input,
      ...rest
    } = this.props;
    const label = get(schema, LABEL_PROP);
    const labelId = `${name}-label`;
    const inputState = this.getInputState();
    return (
      <Tag {...rest} color={inputState}>
        <LabelTag id={labelId} for={name} {...labelProps}>
          {required && <span style={{ color: requiredColor }}>*</span>}
          {label}
        </LabelTag>

        {schema.description &&
          <UncontrolledTooltip
            target={labelId}
            placement={placement}
            {...tooltipProps}
          >
            {schema.description}
          </UncontrolledTooltip>}

        {Children.map(child =>
          cloneElement(child, { input, id: name, schema, ...rest })
        )}

        {inputState &&
          <FormFeedback id={`${name}-feedback`}>
            {error || warning}
          </FormFeedback>}
      </Tag>
    );
  }
}
