// @flow

import React, { Component } from 'react';
import Ajv from 'ajv';
import { Field } from 'redux-form';
import { Input } from 'reactstrap';
import { sortBy, get, isEmpty, merge } from 'lodash';

import FormField from './FormField';
import { injectSheet } from './Jss';

class InputComponent extends Component<*, *, *> {
  static defaultProps = {};
  props: {
    type: string,
    schema: { [string]: any },
    options?: ObjectSelectOptionsType,
    input: { name: string },
    meta: { [string]: any },
    children: [React.Element<*>],
    classes: { [string]: any },
    sheet: any
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
      classes,
      sheet,
      options,
      input,
      type,
      children,
      schema,
      meta,
      ...rest
    } = this.props;

    return (
      <Input
        id={input.name}
        type={type}
        {...input}
        {...rest}
        className={classes.input}
      >
        <option disabled defaultValue={true}>Select {input.name} </option>
        {Array.isArray(options)
          ? this.renderInputOptions(options)
          : this.renderGroupInputOptions(options)}
      </Input>
    );
  }
  renderInput() {
    const {
      classes,
      sheet,
      type,
      input,
      schema,
      meta,
      options,
      children,
      ...rest
    } = this.props;
    return (
      <Input
        className={classes.input}
        id={input.name}
        type={type}
        {...input}
        {...rest}
      />
    );
  }
  render() {
    const { options, input, schema, type, ...rest } = this.props;
    return (
      <FormField name={input.name} schema={schema} {...rest}>
        {options ? this.renderInputWithChildren() : this.renderInput()}
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

  validate = (value: any, allValues: any, props: { [string]: any }) => {
    const { schema, required } = this.props;
    const ajv = new Ajv();
    ajv.validate(schema, value);
    if (isEmpty(value) && required) {
      return 'missing required field';
    } else if (!isEmpty(value)) {
      return get(ajv, 'errors[0].message');
    }
    return undefined;
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
    type: 'number',
    normalize: value => parseInt(value, 10) || value
  }),
  ColorInputField: createInputField({
    type: 'color',
    styles: { input: { height: '40px' } }
  }),
  SelectInputField: createInputField({ type: 'select' }),
  TextAreaInputField: createInputField({ type: 'textarea' })
};

export default createInputField;
