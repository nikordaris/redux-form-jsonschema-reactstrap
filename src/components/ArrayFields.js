// @flow

import React, { Component } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardBlock,
  Input,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import { FieldArray } from 'redux-form';
import { includes, merge, get } from 'lodash';
import SchemaVis, { getComponent } from 'react-jsonschema-vis';

import { templateStrings } from '../utils';
import { injectSheet } from '../Jss';
import validate from '../validator';

const SCHEMA_TEMPLATE = 'template';

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
    schemaVis: SchemaVisType,
    name: string,
    classes: { [string]: any },
    required: boolean,
    fields: any
  };

  renderForm = (name: string, idx: number, fields: any) => {
    const {
      schemaVis: { prefix, componentProps, schema: { items }, ...schemaVis }
    } = this.props;
    const component = getComponent(items, prefix);
    const _componentProps = merge({}, componentProps, {
      [component]: { btnProps: { onClick: () => fields.remove(idx) } }
    });
    return (
      <SchemaVis
        {...schemaVis}
        componentProps={_componentProps}
        schema={items}
        key={idx}
        namespace={name}
      />
    );
  };

  render() {
    const {
      tag: Tag,
      headerTag: HeaderTag,
      bodyTag: BodyTag,
      addBtnProps: { children, ...addBtnProps },
      schemaVis: { schema },
      classes,
      fields
    } = this.props;

    return (
      <Tag className={classes.container}>
        <HeaderTag className={classes.header}>
          <div className={classes.headerTitle}>{schema.title}</div>
          <div className={classes.addButton}>
            <Button
              id="addItemBtn"
              color="primary"
              size="sm"
              {...addBtnProps}
              onClick={() => fields.push({})}
              children={children || 'Add'}
            />
          </div>
        </HeaderTag>
        <BodyTag className={classes.body}>
          {fields.map(this.renderForm)}
        </BodyTag>
      </Tag>
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
    const { required, schemaVis, schemaVis: { schema }, ...rest } = this.props;
    return (
      <FieldArray
        validate={validate(schema, required)}
        component={UniformedArray}
        schemaVis={schemaVis}
        {...rest}
      />
    );
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
    const { required, schemaVis, schemaVis: { schema }, ...rest } = this.props;
    return (
      <FieldArray
        validate={validate(schema, required)}
        component={UniformedArray}
        schemaVis={schemaVis}
        bodyTag="div"
        headerTag="div"
        tag="div"
        {...rest}
      />
    );
  }
}

class VariedArray extends Component {
  static defaultProps = {
    tag: Card,
    headerTag: CardHeader,
    bodyTag: CardBlock,
    addBtnProps: {},
    selectInputProps: {},
    required: false
  };

  state = {
    selected: '',
    fieldSchemas: []
  };

  props: {
    fields: any,
    tag: string,
    headerTag: string,
    bodyTag: string,
    addBtnProps: { [string]: any },
    selectInputProps: { [string]: any },
    schemaVis: SchemaVisType,
    name: string,
    classes: { [string]: any },
    required: boolean
  };

  state: {
    selected?: string,
    fieldSchemas: Array<any>
  };

  renderInputOptions() {
    const { schemaVis: { schema: { items: { anyOf: schemas } } } } = this.props;
    return schemas.map(({ const: value, id, title }, idx) => (
      <option key={`selectOption-${idx}`} value={value || title || id}>
        {title || value || id}
      </option>
    ));
  }

  handleSelectChange = (e: { target: { value: string } }) => {
    this.setState({ ...this.state, selected: e.target.value });
  };

  handleAddItem = (fields: any) => () => {
    const { fieldSchemas, selected } = this.state;
    const { schemaVis: { schema: { items: { anyOf: schemas } } } } = this.props;
    const selectedSchema = schemas.find(schema =>
      includes([schema.title, schema.id, schema.const], selected)
    );
    if (selectedSchema) {
      this.setState({
        ...this.state,
        fieldSchemas: [...fieldSchemas, selectedSchema]
      });
      fields.push({});
    }
  };

  handleRemoveItem = (fields: any, idx: number) => () => {
    const { fieldSchemas } = this.state;
    const _fieldSchemas = [...fieldSchemas];
    _fieldSchemas.splice(idx, 1);
    fields.remove(idx);
    this.setState({ ...this.state, fieldSchemas: _fieldSchemas });
  };

  render() {
    const {
      fields,
      selectInputProps,
      addBtnProps,
      schemaVis: { schema, children: btnChildren, ...schemaVis },
      classes,
      tag: Tag,
      headerTag: HeaderTag,
      bodyTag: BodyTag
    } = this.props;
    const componentProps = idx => {
      const schema = this.state.fieldSchemas[idx];
      const component = getComponent(schema, schemaVis.prefix);
      const rv = merge({}, schemaVis.componentProps, {
        [component]: {
          btnProps: { onClick: this.handleRemoveItem(fields, idx) }
        }
      });
      return rv;
    };
    return (
      <Tag className={classes.container}>
        <HeaderTag className={classes.header}>
          {schema.title}
        </HeaderTag>
        <BodyTag className={classes.body}>
          <div className={classes.select}>
            <Input
              id="selectItem"
              onChange={this.handleSelectChange}
              {...selectInputProps}
              type="select"
              value={this.state.selected}
            >
              <option disabled value="">Select {schema.title}</option>
              {this.renderInputOptions()}
            </Input>
            <Button
              id="addItemBtn"
              color="primary"
              disabled={this.state.selected === ''}
              onClick={this.handleAddItem(fields)}
              children={btnChildren || 'Add'}
              {...addBtnProps}
            />
          </div>
          <div className={classes.arrayFields}>
            {fields.length === this.state.fieldSchemas.length &&
              fields.map((name, idx) => (
                <SchemaVis
                  key={`ArrayFields-${name}-${idx}`}
                  {...schemaVis}
                  namespace={name}
                  schema={this.state.fieldSchemas[idx]}
                  componentProps={componentProps(idx)}
                />
              ))}
          </div>
        </BodyTag>
      </Tag>
    );
  }
}

@injectSheet({
  container: { marginBottom: 10, marginTop: 15 },
  header: { padding: 5, paddingLeft: 10 },
  select: {
    display: 'inline-flex',
    width: '100%',
    '@global select': { marginRight: 5 }
  }
})
export class VariedArrayCard extends Component {
  render() {
    const { required, schemaVis, schemaVis: { schema }, ...rest } = this.props;
    return (
      <FieldArray
        validate={validate(schema, required)}
        component={VariedArray}
        schemaVis={schemaVis}
        {...rest}
      />
    );
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
  select: {
    display: 'inline-flex',
    width: '100%',
    '@global select': { marginRight: 5 }
  }
})
export class VariedArrayInline extends Component {
  render() {
    const { required, schemaVis, schemaVis: { schema }, ...rest } = this.props;
    return (
      <FieldArray
        validate={validate(schema, required)}
        component={VariedArray}
        schemaVis={schemaVis}
        bodyTag="div"
        headerTag="div"
        tag="div"
        {...rest}
      />
    );
  }
}

export class ModalUniformArray extends Component {
  static defaultProps = {
    tag: Card,
    headerTag: CardHeader,
    bodyTag: CardBlock,
    addBtnProps: {},
    required: false
  };
  state = {
    showItemForm: false,
    currentItemIdx: -1
  };

  props: {
    tag: string,
    fields: any,
    headerTag: string,
    bodyTag: string,
    addBtnProps: { [string]: any },
    schemaVis: SchemaVisType,
    name: string,
    classes: { [string]: any },
    required: boolean
  };
  state: {
    showItemForm: boolean,
    currentItemIdx: number
  };

  getItemMetaTemplate(idx: number) {
    const { schemaVis: { prefix, schema: { items } } } = this.props;
    const schema = items[idx];
    return get(get(schema, prefix, schema), SCHEMA_TEMPLATE);
  }

  handleAddItem = () => {
    const { fields } = this.props;
    this.setState({
      ...this.state,
      currentItemIdx: fields.length,
      showItemForm: true
    });
  };

  handleCancelItem = () => {};

  toggleAddFormModal = () => {
    this.setState({ ...this.state, showItemForm: !this.state.showItemForm });
  };

  renderArrayItems() {
    const { fields, schemaVis: { schema: { items } } } = this.props;
    return fields.map((name, idx) => (
      <ListGroupItem>
        <ListGroupItemHeading>{items[idx].title}</ListGroupItemHeading>
        <ListGroupItemText>
          {templateStrings(this.getItemMetaTemplate(idx), fields.get(idx))}
        </ListGroupItemText>
      </ListGroupItem>
    ));
  }

  renderItemFormModalBody() {
    const {
      fields,
      schemaVis,
      schemaVis: { schema: { items: schema } }
    } = this.props;
    const { currentItemIdx } = this.state;
    const field = fields.get(currentItemIdx);
    const { name } = field;
    return (
      <SchemaVis
        tag={ModalBody}
        key={`ArrayFields-${name}-${currentItemIdx}`}
        {...schemaVis}
        namespace={name}
        schema={schema}
      />
    );
  }

  renderItemFormModal() {
    const { fields, schemaVis: { schema: { items: schema } } } = this.props;
    const { currentItemIdx } = this.state;
    const field = currentItemIdx >= 0 ? fields.get(currentItemIdx) : undefined;
    return (
      <Modal isOpen={this.state.showItemForm} toggle={this.toggleAddFormModal}>
        <ModalHeader toggle={this.toggleAddFormModal}>
          {schema.title}
        </ModalHeader>
        {currentItemIdx >= 0 && this.renderItemFormModalBody()}
        <ModalFooter>
          <Button color="primary" onClick={this.toggleAddFormModal}>
            Submit
          </Button>
          <Button color="second" onClick={this.toggleAddFormModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }

  render() {
    const {
      schemaVis: { schema },
      classes,
      tag: Tag,
      headerTag: HeaderTag,
      bodyTag: BodyTag,
      addBtnProps: { children, ...addBtnProps }
    } = this.props;

    return (
      <Tag>
        <HeaderTag>
          <div className={classes.headerTitle}>
            {schema.title}
          </div>
          <div className={classes.addButton}>
            <Button
              onClick={this.handleAddItem}
              {...addBtnProps}
              children={children || 'Add'}
            />
          </div>
        </HeaderTag>
        <BodyTag tag={ListGroup}>
          {this.renderArrayItems()}
        </BodyTag>
      </Tag>
    );
  }
}

export class ModalVariedArray extends Component {
  static defaultProps = {
    tag: Card,
    headerTag: CardHeader,
    bodyTag: CardBlock,
    addBtnProps: {},
    selectInputProps: {},
    required: false
  };

  state = {
    selected: '',
    fieldSchemas: []
  };

  props: {
    fields: any,
    tag: string,
    headerTag: string,
    bodyTag: string,
    addBtnProps: { [string]: any },
    selectInputProps: { [string]: any },
    schemaVis: SchemaVisType,
    name: string,
    classes: { [string]: any },
    required: boolean
  };
  state: {
    selected: string,
    fieldSchemas: Array<any>
  };
}
