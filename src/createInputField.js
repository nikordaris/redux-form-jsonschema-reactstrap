// @flow

import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Input } from 'reactstrap';

import FormField from './components/FormField';
import { injectSheet } from './Jss';
import validate from './validator';

class InputComponent extends Component {
  static defaultProps = {
    schemaVis: {}
  };
  props: {
    type: string,
    schemaVis: {
      schema: { [string]: any }
    },
    input: { name: string },
    meta: { [string]: any },
    children: [React.Element<*>],
    classes: { [string]: any },
    styles: { [string]: any },
    sheet: any
  };

  renderInput() {
    const {
      classes,
      styles,
      sheet,
      type,
      input,
      schemaVis,
      meta,
      children,
      ...rest
    } = this.props;
    const attributes = {
      className: classes.input,
      id: input.name,
      type,
      ...input,
      ...rest
    };
    return <Input {...attributes} />;
  }

  render() {
    const { schemaVis: { schema }, type, ...rest } = this.props;
    return (
      <FormField schema={schema} {...rest}>
        {this.renderInput()}
      </FormField>
    );
  }
}

class InputField extends Component<*, *, *> {
  static defaultProps = {
    type: 'text',
    component: InputComponent,
    required: false,
    schemaVis: {}
  };

  props: {
    schemaVis: {
      schema: any
    },
    component: any,
    type: string,
    name: string,
    required: boolean,
    classes: { [string]: any }
  };

  validate = (value, allValues, props, name) => {
    const { schemaVis: { schema }, required } = this.props;
    return validate(schema, required)(value, allValues, props, name);
  }

  render() {
    const {
      schemaVis,
      name,
      component,
      required,
      ...rest
    } = this.props;

    return (
      <Field
        name={name}
        schemaVis={schemaVis}
        required={required}
        component={component}
        validate={this.validate}
        {...rest}
      />
    );
  }
}

export default function (_options: CreateInputOptionsType) {
  const { styles, ...options } = _options;
  class CreatedInputField extends Component {
    render() {
      return <InputField {...this.props} {...options} />;
    }
  }

  return injectSheet(styles)(CreatedInputField);
}
