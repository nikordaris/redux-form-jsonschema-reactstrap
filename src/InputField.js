// @flow

import React, { Component } from 'react';
import Ajv from 'ajv';
import { Field } from 'redux-form';
import { Input } from 'reactstrap';
import { sortBy, get } from 'lodash';

import FormField from './FormField';

class InputComponent extends Component<*, *, *> {
  static defaultProps = {};
  props: {
    name: string,
    type: string,
    schema: { [string]: any },
    options?: ObjectSelectOptionsType,
    input: { name: string },
    styles: { [style: string]: any },
    children: [React.Element<*>]
  };

  renderInputOptions(options: Array<OptionType> = []) {
    return sortBy(options, o => o.label || o.value).map(({
      value,
      label
    }, idx) => <option key={idx} value={value}>{label || value}</option>);
  }

  renderGroupInputOptions(options: { [string]: Array<OptionType> } = {}) {
    return sortBy(Object.keys(options)).map((group: string, idx: number) => (
      <optgroup key={idx} label={group}>
        {this.renderInputOptions(options[group])}
      </optgroup>
    ));
  }

  renderInputWithChildren() {
    const {
      name,
      styles,
      options,
      input,
      type,
      children,
      ...rest
    } = this.props;

    return (
      <Input id={name} type={type} {...input} {...rest}>
        {Array.isArray(options)
          ? this.renderInputOptions(options)
          : this.renderGroupInputOptions(options)}
      </Input>
    );
  }
  renderInput() {
    const {
      name,
      styles,
      type,
      input,
      options,
      children,
      ...rest
    } = this.props;
    return <Input id={name} type={type} {...input} {...rest} />;
  }
  render() {
    const { name, options, styles, input, schema, type, ...rest } = this.props;
    return (
      <FormField name={name} schema={schema} {...rest}>
        {options ? this.renderInputWithChildren() : this.renderInput()}
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
    type: string,
    name: string
  };

  validate = (value: any, allValues: any, props: { [string]: any }) => {
    const { schema } = this.props;
    const ajv = new Ajv();
    ajv.validate(schema, value);
    return get(ajv, 'errors[0].message');
  };

  getOptions(schema: any) {
    const { title: group } = schema;
    if (schema.oneOf) {
      return schema.oneOf
        .reduce((result, optionsSchema) => {
          const options = this.getOptions(optionsSchema);
          const {
            title: label,
            const: value,
            description: tooltip
          } = optionsSchema;

          if (options) {
            result.push(...options);
          } else {
            result.push({
              group,
              label,
              value,
              tooltip
            });
          }

          return result;
        }, [])
        .filter(({ value }) => value);
    }
    return undefined;
  }

  render() {
    const { schema, name, component, ...rest } = this.props;
    let options = this.getOptions(schema);
    if (options) {
      options = options.reduce((result, { group, ...option }) => {
        const groupItems = result[group] || [];
        return {
          ...result,
          [group]: [...groupItems, option]
        };
      }, {});

      const values = Object.values(options);
      if (values.length === 1) {
        options = values[0];
      }
    }

    return (
      <Field
        name={name}
        schema={schema}
        component={component}
        options={options}
        validate={this.validate}
        {...rest}
      />
    );
  }
}

const createInputField = (options: CreateInputOptionsType) => {
  class CreatedInputField extends Component {
    render() {
      return <InputField {...this.props} {...options} />;
    }
  }
  return CreatedInputField;
};

export const inputFields = {
  InputField,
  EmailInputField: createInputField({ type: 'email' }),
  PasswordInputField: createInputField({ type: 'password' }),
  FileInputField: createInputField({ type: 'file' }),
  DateInputField: createInputField({ type: 'date' }),
  DateTimeInputField: createInputField({ type: 'datetime-local' }),
  NumberInputField: createInputField({ type: 'number' }),
  ColorInputField: createInputField({ type: 'color' }),
  SelectInputField: createInputField({ type: 'select' }),
  TextAreaInputField: createInputField({ type: 'textarea' })
};

export default createInputField;
