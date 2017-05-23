// @flow

import React, { Component } from 'react';
import Ajv from 'ajv';
import { Field } from 'redux-form';
import { Input } from 'reactstrap';
import type { SchemaType } from 'jsonschema-redux-form';

import FormField from './FormField';

class InputFormField extends Component {
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

class InputField extends Component {
  props: {
    schema: SchemaType
  };

  validate = (value, allValues, props) => {
    const { schema } = this.props;
    return validate(value, schema);
  };

  render() {
    return <Field {...this.props} validate={this.validate} />;
  }
}

export const createInputField = (options: { [string]: any }) => (
  <Field component={InputField} {...options} />
);
