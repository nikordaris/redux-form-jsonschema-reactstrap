// @flow

import React, { Component } from 'react';
import Ajv from 'ajv';
import { Field } from 'redux-form';
import { Input } from 'reactstrap';
import type { SchemaType } from 'jsonschema-redux-form';
import FormField from './FormField';

class InputFormField extends Component<*, *, *> {
  props: {
    id: string,
    input: { [string]: any },
    styles: { [string]: any }
  };
  render() {
    const { id, styles, input, ...rest } = this.props;
    return (
      <FormField id={id} {...rest}>
        <Input {...input} {...rest} />
      </FormField>
    );
  }
}

export class InputField extends Component<*, *, *> {
  static defaultProps = {
    type: 'text'
  };

  props: {
    schema: SchemaType,
    type: string
  };

  validate = (value: any, allValues: any, props: { [string]: any }) => {
    const { schema } = this.props;
    const ajv = new Ajv();
    return ajv.validate(schema, value);
  };

  render() {
    return (
      <Field
        {...this.props}
        component={InputFormField}
        validate={this.validate}
      />
    );
  }
}

const createInputField = (options: CreateInputOptionsType) => class
  extends Component {
  render() {
    return <InputField {...this.props} {...options} />;
  }
};

export const EmailInputField = createInputField({ type: 'email' });
export const PasswordInputField = createInputField({ type: 'password' });
export const FileInputField = createInputField({ type: 'file' });
export const DateInputField = createInputField({ type: 'date' });
export const NumberInputField = createInputField({ type: 'number' });
export const ColorInputField = createInputField({ type: 'color' });
export default createInputField;
