// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, change, untouch } from 'redux-form';
import { Input, Card, CardHeader, CardBlock } from 'reactstrap';
import { sortBy, omit, isEmpty, forEach } from 'lodash';
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
  static defaultProps = {};

  state = {
    selected: ''
  };

  props: {
    schemaVis: SchemaVisType,
    form: string,
    name: string,
    required: boolean,
    classes: { [string]: any },
    sheet: any,
    styles: { [string]: any },
    change: (form: string, prop: string, value: any) => void,
    untouch: (form: string, fields: string) => void
  };

  state: {
    selected?: string
  };

  getOptions = (schema: Array<any>, index: string) => {
    const {
      name,
      required,
      classes,
      sheet,
      styles,
      change,
      untouch,
      schemaVis,
      schemaVis: { prefix },
      ...rest
    } = this.props;
    return schema
      .map((s, idx) => {
        const { id, title, const: value, description } = s;
        const rendered =
          (hasComponent(s, prefix) || !isEmpty(s.properties)) &&
          <SchemaVis
            key={`${index}-${idx}`}
            {...schemaVis}
            {...rest}
            namespace={name}
            schema={s}
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
      schemaVis: { schema: { oneOf } }
    } = this.props;
    change(form, name, {});
    oneOf.forEach(s =>
      forEach(s.properties, (_, p) => untouch(form, `${name}.${p}`))
    );
    this.setState({ ...this.state, selected: e.target.value });
  };

  renderSelectInput(options: Array<OptionType>) {
    const { schemaVis: { schema }, classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader className={classes.header}>{schema.title}</CardHeader>
        <CardBlock className={classes.cardblock}>
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
        </CardBlock>
      </Card>
    );
  }

  renderSelectField(options: Array<OptionType>) {
    const rest = omit(this.props, [
      'tag',
      'children',
      'change',
      'untouch',
      'schemaVis',
      'styles'
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
    const { schemaVis: { schema }, name } = this.props;
    const options = this.getOptions(schema.oneOf, `${name}-oneOf`);
    if (isEmpty(options.filter(({ value }) => React.isValidElement(value)))) {
      return this.renderSelectField(options);
    }

    return this.renderSelectInput(options);
  }
}
