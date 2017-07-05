// @flow

import React, { Component } from 'react';
import {
  Button,
  Input,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBlock
} from 'reactstrap';
import { Field, change, FieldArray } from 'redux-form';
import { connect } from 'react-redux';
import { get, sortBy } from 'lodash';

import FormField from './FormField';
import { injectSheet } from '../Jss';
import validate from '../validator';

class UniformedArray extends Component {
  static defaultProps = {
    tag: Card,
    headerTag: CardHeader,
    bodyTag: CardBlock,
    addBtnProps: {}
  };
  props: {
    tag: string,
    headerTag: string,
    bodyTag: string,
    addBtnProps: { [string]: any },
    schema: any,
    name: string,
    renderSchema: RenderSchemaType,
    classes: { [string]: any }
  };

  renderForm(name: string, idx: string) {
    const { renderSchema, schema: { items } } = this.props;
    return renderSchema(items, idx, name);
  }

  renderFieldArray = (props: any) => {
    const {
      tag: Tag,
      headerTag: HeaderTag,
      bodyTag: BodyTag,
      addBtnProps: { children, ...addBtnProps },
      schema,
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
          {fields.map((name, idx) => this.renderForm(name, idx))}
        </BodyTag>
      </Tag>
    );
  };

  render() {
    const { name } = this.props;
    return <FieldArray name={name} component={this.renderFieldArray} />;
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
    const { schema, renderSchema, name } = this.props;
    const itemsOneOf = get(schema, 'items.oneOf');
    if (itemsOneOf) {
      itemsOneOf
        .map((s, idx) => {
          const { id, title, const: value, description } = s;
          const rendered = renderSchema(s, `${index}-${idx}`, name);
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
