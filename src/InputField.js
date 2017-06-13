// @flow

import React, { Component } from 'react';
import Ajv from 'ajv';
import { Field } from 'redux-form';
import { Input } from 'reactstrap';
import { sortBy } from 'lodash';

import FormField from './FormField';

class InputComponent extends Component<*, *, *> {
  static defaultProps = {
    options: []
  };
  props: {
    name: string,
    type: string,
    options: ObjectSelectOptionsType,
    input: { name: string },
    styles: { [style: string]: any },
    children: [React.Element<*>]
  };

  renderInputOptions(options: Array<OptionType>) {
    return sortBy(options, o => o.label || o.value).map(({ value, label }) => (
      <option value={value}>{label || value}</option>
    ));
  }

  renderGroupInputOptions(options: { [string]: Array<OptionType> }) {
    return sortBy(Object.keys(options)).map((group: string, idx: number) => (
      <optgroup key={idx} label={group}>
        {this.renderInputOptions(options[group])}
      </optgroup>
    ));
  }

  render() {
    const { name, options, styles, input, ...rest } = this.props;
    return (
      <FormField {...rest}>
        <Input id={name} {...input} {...rest}>
          {Array.isArray(options)
            ? this.renderInputOptions(options)
            : this.renderGroupInputOptions(options)}
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
    schema: any,
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
      return schema.oneOf
        .map(({ title: label, const: value, description: tooltip }) => ({
          label,
          value,
          tooltip
        }))
        .filter(({ value }) => value);
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