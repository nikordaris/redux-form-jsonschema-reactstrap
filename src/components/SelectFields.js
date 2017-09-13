// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, change, untouch } from 'redux-form';
import { Input, Label } from 'reactstrap';
import { sortBy, omit, isEmpty, forEach, get, has } from 'lodash';
import SchemaVis, { hasComponent } from 'react-jsonschema-vis';

import FormField from './FormField';
import { injectSheet } from '../Jss';
import validate from '../validator';

@injectSheet({
  selectedObject: { marginTop: 10 },
  card: { marginBottom: 10, marginTop: 15 },
  header: { padding: 5, paddingLeft: 10 }
})
@connect(
  () => ({}),
  dispatch => bindActionCreators({ change, untouch }, dispatch),
  undefined,
  { withRef: true }
)
export class SingleSelect extends Component {
  static defaultProps = {
    initialSelected: '',
    onChange: () => { },
    change: () => { },
    untouch: () => { }
  };

  state = {
    selected: '',
    showLabel: true
  };

  props: {
    schemaVis: SchemaVisType,
    initialSelected?: string,
    form: string,
    name: string,
    required: boolean,
    classes: { [string]: any },
    sheet: any,
    styles: { [string]: any },
    showLabel: boolean,
    getOptions: (schema: { [string]: any }) => Array<{ label: string, value: any, tooltip: string }>,
    change: (form: string, prop: string, value: any) => void,
    untouch: (form: string, fields: string) => void,
    onChange: (selected: string) => void
  };

  state: {
    selected?: string
  };

  componentWillReceiveProps(nextProps: any) {
    const { initialSelected: prevInitialSelected } = this.props;
    const { initialSelected } = nextProps;
    if (initialSelected !== prevInitialSelected) {
      this.setState({ ...this.state, selected: initialSelected });
    }
  }

  componentWillMount() {
    const { initialSelected } = this.props;
    if (initialSelected) {
      this.setState({ ...this.state, selected: initialSelected });
    }
  }

  getOptions = (schema: { [string]: any }) => {
    const {
      name,
      required,
      classes,
      sheet,
      styles,
      change,
      untouch,
      onChange,
      schemaVis,
      schemaVis: { prefix },
      showLabel,
      initialSelected,
      ...rest
    } = this.props;
    const [schemas, index] = has(schema, 'oneOf')
      ? [schema.oneOf, `${name}-oneOf`]
      : [schema.anyOf, `${name}-anyOf`];
    return schemas
      .map((schema, idx) => {
        const { id, title, const: value, description } = schema;
        const rendered =
          (hasComponent(schema, prefix) || !isEmpty(schema.properties)) &&
          <SchemaVis
            key={`${index}-${idx}`}
            {...schemaVis}
            {...rest}
            namespace={name}
            schema={schema}
          />;

        return {
          label: title || id || value,
          tooltip: description,
          value: rendered || value || id || title
        };
      })
      .filter(o => o.value);
  };

  renderInputOptions(options: Array<OptionType>) {
    return sortBy(options, o => o.label).map(({ label, value }, idx) => (
      <option key={idx} value={React.isValidElement(value) ? label : value}>
        {label}
      </option>
    ));
  }

  handleChange = (e: { target: { value: string } }) => {
    const {
      name,
      change,
      untouch,
      form,
      onChange,
      schemaVis: { schema }
    } = this.props;
    const selected = e.target.value;
    const items = get(schema, 'oneOf', schema.anyOf);
    if (name) {
      change(form, name, {});
    }
    items.forEach(s =>
      forEach(s.properties, (_, p) => untouch(form, name ? `${name}.${p}` : p))
    );
    this.setState({ ...this.state, selected });
    onChange(selected);
  };

  renderSelectInput(options: Array<OptionType>) {
    const { showLabel, schemaVis: { schema }, classes } = this.props;
    return (
      <div>
        {showLabel && <Label>{schema.title}</Label>}
        <Input
          className={classes.select}
          type="select"
          onChange={this.handleChange}
          value={this.state.selected}
        >
          <option disabled value="">Select {schema.title}</option>
          {this.renderInputOptions(options)}
        </Input>
        {this.renderInputObject(options)}
      </div>
    );
  }

  renderSelectField(options: Array<OptionType>) {
    const rest = omit(this.props, [
      'tag',
      'children',
      'change',
      'untouch',
      'schemaVis',
      'styles',
      'onChange',
      'showLabel',
      'initialSelected'
    ]);
    const { schemaVis: { schema }, required } = this.props;
    return (
      <Field
        type="select"
        validate={validate(schema, required)}
        component={FormField}
        schema={schema}
        {...rest}
      >
        <Input type="select">
          <option disabled value="">Select {schema.title}</option>
          {this.renderInputOptions(options)}
        </Input>
      </Field>
    );
  }

  renderInputObject(options: Array<OptionType>) {
    const { classes } = this.props;
    const { selected } = this.state;

    const selectedObj = selected && options.find(o => o.label === selected);
    if (selectedObj && selectedObj.value) {
      return (
        <div className={classes.selectedObject}>
          {selectedObj.value}
        </div>
      );
    }

    return undefined;
  }

  render() {
    const { getOptions = this.getOptions, schemaVis: { schema } } = this.props;

    const options = getOptions(schema);
    if (isEmpty(options.filter(({ value }) => React.isValidElement(value)))) {
      return this.renderSelectField(options);
    }

    return this.renderSelectInput(options);
  }
}
