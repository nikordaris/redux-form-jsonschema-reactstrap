// @flow

import React, { Component } from 'react';
import Ajv from 'ajv';
import { Field } from 'redux-form';
import { Input } from 'reactstrap';
import { sortBy, get, has } from 'lodash';

import type { SchemaType } from 'jsonschema-redux-form';
import FormField from './FormField';

class InputComponent extends Component<*, *, *> {
  static defaultProps = {
    options: []
  };
  props: {
    id: string,
    type: string,
    options?: ObjectSelectOptionsType,
    input: { [string]: any },
    styles: { [string]: any },
    children: [React.Element<*>]
  };

  renderInputArrayOptions(options: [OptionType]) {
    return sortBy(options, o => o.label).map(({ value, label }) => (
      <option value={value}>{label}</option>
    ));
  }

  renderInputOptions(options: ObjectSelectOptionsType) {
    if (Array.isArray(options)) {
      return this.renderInputArrayOptions(options);
    }

    return sortBy(Object.keys(options)).map((group, idx) => (
      <optgroup key={idx} label={group}>
        {this.renderInputArrayOptions(options[group])}
      </optgroup>
    ));
  }

  render() {
    const { id, options, styles, input, ...rest } = this.props;
    return (
      <FormField id={id} {...rest}>
        <Input {...input} {...rest}>
          {options && this.renderInputOptions(options)}
        </Input>
      </FormField>
    );
  }
}

export class InputField extends Component<*, *, *> {
  static defaultProps = {
    type: 'text',
    component: InputComponent
  };

  props: {
    schema: SchemaType,
    component: string,
    type: string
  };

  validate = (value: any, allValues: any, props: { [string]: any }) => {
    const { schema } = this.props;
    const ajv = new Ajv();
    return ajv.validate(schema, value);
  };

  getOptions() {
    const { schema } = this.props;
    if (schema.oneOf) {
      return schema.oneOf.map(({
        id: label,
        const: value,
        description: tooltip
      }) => ({
        label,
        value,
        tooltip
      }));
    }
    return undefined;
  }

  render() {
    return (
      <Field
        options={this.getOptions()}
        validate={this.validate}
        {...this.props}
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
export const SelectInputField = createInputField({ type: 'select' });
export const TextAreaInputField = createInputField({ type: 'textarea' });
export default createInputField;
