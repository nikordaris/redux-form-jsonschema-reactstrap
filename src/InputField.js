// @flow

import React, { Component } from 'react';
import Ajv from 'ajv';
import { Field } from 'redux-form';
import { Input } from 'reactstrap';
import { sortBy, get, isEmpty } from 'lodash';

import FormField from './FormField';
import { injectSheet } from './Jss';
import validate from './validator';

export class InputComponent extends Component<*, *, *> {
  static defaultProps = {};
  props: {
    type: string,
    schema: { [string]: any },
    options?: ObjectSelectOptionsType,
    input: { name: string },
    meta: { [string]: any },
    children: [React.Element<*>],
    classes: { [string]: any },
    styles: { [string]: any },
    sheet: any,
    renderSchema: (
      { [string]: any },
      index: string,
      namespace: string
    ) => React.Element<*>
  };

  renderInput() {
    const {
      classes,
      styles,
      sheet,
      type,
      input,
      schema,
      meta,
      options,
      children,
      renderSchema,
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
    const { options, schema, type, ...rest } = this.props;
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
    required: false
  };

  props: {
    schema: any,
    component: any,
    type: string,
    name: string,
    required: boolean,
    classes: { [string]: any }
  };

  render() {
    const { schema, name, component, required, ...rest } = this.props;

    return (
      <Field
        name={name}
        schema={schema}
        required={required}
        component={component}
        validate={validate(schema, required)}
        {...rest}
      />
    );
  }
}

const createInputField = (_options: CreateInputOptionsType) => {
  const { styles, ...options } = _options;
  class CreatedInputField extends Component<*, *, *> {
    render() {
      return <InputField {...this.props} {...options} />;
    }
  }

  return injectSheet(styles)(CreatedInputField);
};

export const inputFields = {
  TextInputField: createInputField({ type: 'text' }),
  EmailInputField: createInputField({ type: 'email' }),
  PasswordInputField: createInputField({ type: 'password' }),
  DateInputField: createInputField({ type: 'date' }),
  DateTimeInputField: createInputField({ type: 'datetime-local' }),
  NumberInputField: createInputField({
    type: 'number'
  }),
  ColorInputField: createInputField({
    type: 'color',
    styles: { input: { height: '40px' } }
  }),
  TextAreaInputField: createInputField({ type: 'textarea' })
};

export default createInputField;
