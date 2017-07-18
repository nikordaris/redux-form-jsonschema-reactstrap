// @flow

import React, { Component } from 'react';
import { Button, Card, CardHeader, CardBlock } from 'reactstrap';
import { FieldArray } from 'redux-form';
import { get } from 'lodash';
import SchemaVis from 'react-jsonschema-vis';

import { injectSheet } from '../Jss';
import validate from '../validator';

class UniformedArray extends Component {
  static defaultProps = {
    tag: Card,
    headerTag: CardHeader,
    bodyTag: CardBlock,
    addBtnProps: {},
    required: false
  };
  props: {
    tag: string,
    headerTag: string,
    bodyTag: string,
    addBtnProps: { [string]: any },
    schemaVis: {
      schema: any,
      meta: any
    },
    name: string,
    classes: { [string]: any },
    required: boolean
  };

  renderForm(fields: any, name: string, idx: number) {
    const { schemaVis: { schema: { items }, meta, ...schemaVis } } = this.props;
    return (
      <SchemaVis
        {...schemaVis}
        schema={items}
        key={idx}
        namespace={name}
        onRemove={() => fields.remove(idx)}
      />
    );
  }

  renderFieldArray = (props: any) => {
    const {
      tag: Tag,
      headerTag: HeaderTag,
      bodyTag: BodyTag,
      addBtnProps: { children, ...addBtnProps },
      schemaVis: { schema },
      classes
    } = this.props;
    const { fields } = props;
    return (
      <Tag className={classes.container}>
        <HeaderTag className={classes.header}>
          <div className={classes.headerTitle}>{schema.title}</div>
          <div className={classes.addButton}>
            <Button
              color="primary"
              size="sm"
              {...addBtnProps}
              onClick={() => fields.push({})}
              children={children || 'Add'}
            />
          </div>
        </HeaderTag>
        <BodyTag className={classes.body}>
          {fields.map((name, idx) => this.renderForm(fields, name, idx))}
        </BodyTag>
      </Tag>
    );
  };

  render() {
    const { name, schemaVis: { schema }, required } = this.props;
    return (
      <FieldArray
        name={name}
        validate={validate(schema, required)}
        component={this.renderFieldArray}
      />
    );
  }
}

@injectSheet({
  container: { marginBottom: 10, marginTop: 15 },
  header: { padding: 5, paddingLeft: 10, display: 'inline-flex' },
  addButton: { marginLeft: 'auto' },
  headerTitle: { marginTop: 'auto', marginBottom: 'auto' }
})
export class UniformedArrayCard extends Component {
  render() {
    return <UniformedArray {...this.props} />;
  }
}

@injectSheet({
  container: { marginBottom: 10, marginTop: 15 },
  header: {
    width: '100%',
    padding: 0,
    marginBottom: 20,
    fontSize: 21,
    lineHeight: 'inherit',
    color: '#333',
    border: 0,
    borderBottom: '1px solid #e5e5e5',
    display: 'inline-flex'
  },
  addButton: { marginLeft: 'auto' },
  headerTitle: { marginTop: 'auto', marginBottom: 'auto' }
})
export class UniformedArrayInline extends Component {
  render() {
    return (
      <UniformedArray {...this.props} bodyTag="div" headerTag="div" tag="div" />
    );
  }
}

export class VariedArray extends Component {
  getArrayOptions(index: string) {
    const { schemaVis: { schema, meta, ...schemaVis }, name } = this.props;
    const itemsOneOf = get(schema, 'items.oneOf');
    if (itemsOneOf) {
      itemsOneOf
        .map((s, idx) => {
          const { id, title, const: value, description } = s;
          const rendered = (
            <SchemaVis
              {...schemaVis}
              schema={s}
              key={`${index}-${idx}`}
              namespace={name}
            />
          );
          return {
            label: title || id || value,
            tooltip: description,
            value: rendered || value || id || title
          };
        })
        .filter(o => o.value);
    }
  }
}

export class ModalUniformArray extends Component {}

export class ModalVariedArray extends Component {}
