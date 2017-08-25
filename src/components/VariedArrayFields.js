// @flow

import React, { Component } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardBlock,
  Input,
  ListGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import { FieldArray, reduxForm, submit, destroy, change, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { includes, merge, has, isNil } from 'lodash';
import SchemaVis, { getComponent } from 'react-jsonschema-vis';

import { injectSheet } from '../Jss';
import validate from '../validator';

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
          removeBtnProps: { onClick: this.handleRemoveItem(fields, idx) }
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

const ARRAY_ITEM_FORM = 'ArrayItem';

@reduxForm({
  form: ARRAY_ITEM_FORM,
  destroyOnUnmount: false
})
class SchemaVisForm extends Component {
  render() {
    const { schemaVis, tag, styles } = this.props;
    return (
      <SchemaVis
        {...schemaVis}
        form={ARRAY_ITEM_FORM}
        tag={tag}
        styles={styles}
      />
    );
  }
}

@connect(
  (state, { form, fields: { name } }) => ({ items: formValueSelector(form)(state, name) }),
  dispatch =>
    bindActionCreators(
      { submitForm: submit, destroyForm: destroy, changeForm: change },
      dispatch
    ),
  undefined,
  { withRef: true }
)
class ModalVariedArray extends Component {
  static defaultProps = {
    tag: Card,
    headerTag: CardHeader,
    bodyTag: ListGroup,
    addBtnProps: {},
    selectInputProps: {},
    required: false,
    bodyProps: {},
    dataSchemaPrefix: 'meta.data'
  };

  state = {
    selected: '',
    fieldSchemas: [],
    showItemForm: false
  };

  props: {
    fields: any,
    meta: { form: string },
    submitForm: string => void,
    tag: string,
    headerTag: string,
    bodyTag: string,
    bodyProps: { [string]: any },
    addBtnProps: { [string]: any },
    selectInputProps: { [string]: any },
    schemaVis: SchemaVisType,
    name: string,
    classes: { [string]: any },
    required: boolean,
    destroyForm: string => void,
    items: any,
    changeForm: (string, string, any) => void,
    dataSchemaPrefix: string
  };
  state: {
    selected: string,
    selectedIdx: number,
    fieldSchemas: Array<any>,
    showItemForm: boolean
  };

  getSchemaId = (schema: any) => schema.id || schema.title || schema.const;

  getSchema = (id: string, schemas: Array<any>) =>
    schemas.find(schema =>
      [schema.title, schema.id, schema.const].includes(id)
    );

  handleSubmitItem = (values: any) => {
    const { fieldSchemas, selected, selectedIdx } = this.state;
    const {
      fields,
      meta: { form },
      destroyForm,
      changeForm,
      schemaVis: { schema: { items: { anyOf: schemas } } }
    } = this.props;
    let state = {};
    if (!isNil(selectedIdx)) {
      const items = fields.getAll();
      items.splice(selectedIdx, 1, values);
      changeForm(form, fields.name, [...items]);

      state = {
        selected: undefined,
        selectedIdx: undefined
      };
    } else {
      const selectedSchema = this.getSchema(selected, schemas);

      if (selectedSchema) {
        state = {
          selected: undefined,
          fieldSchemas: [...fieldSchemas, selectedSchema]
        };
      }
      fields.push(values);
    }
    destroyForm(ARRAY_ITEM_FORM);
    this.toggleAddFormModal(state);
  };

  handleSubmitModal = () => {
    const { submitForm } = this.props;
    submitForm(ARRAY_ITEM_FORM);
  };

  handleRemoveItem = (idx: number) => () => {
    const { fieldSchemas } = this.state;
    const { fields } = this.props;
    const _fieldSchemas = [...fieldSchemas];
    _fieldSchemas.splice(idx, 1);
    fields.remove(idx);
    this.setState({ ...this.state, fieldSchemas: _fieldSchemas });
  };

  handleSelectItem = (idx: number) => () => {
    this.toggleAddFormModal({ selectedIdx: idx });
  };

  handleSelectSchema = (selected: string) => {
    this.setState({ selected });
  };

  toggleAddFormModal = (state: any = { selectedIdx: undefined }) => {
    const prevState = { ...this.state, ...state };
    this.setState({ ...prevState, showItemForm: !this.state.showItemForm });
  };

  renderArrayItems() {
    const { fieldSchemas } = this.state;
    const { fields, schemaVis, dataSchemaPrefix } = this.props;
    const componentProps = idx => {
      const schema = this.state.fieldSchemas[idx];
      const component = getComponent(schema, dataSchemaPrefix);
      const rv = merge({}, schemaVis.componentProps, {
        [component]: {
          removeBtnProps: { onClick: this.handleRemoveItem(idx) },
          selectBtnProps: { onClick: this.handleSelectItem(idx) }
        }
      });
      return rv;
    };
    return fields.map((name, idx) => (
      <SchemaVis
        {...schemaVis}
        componentProps={componentProps(idx)}
        prefix={dataSchemaPrefix}
        schema={fieldSchemas[idx]}
        key={idx}
        data={fields.get(idx)}
      />
    ));
  }

  renderItemFormModal() {
    const {
      schemaVis,
      fields,
      schemaVis: { prefix, schema: { items: schema } }
    } = this.props;
    const { selectedIdx, fieldSchemas } = this.state;
    const component = getComponent(schema, prefix);
    let componentProps = schemaVis.componentProps;

    let initialValues = {};
    let initialSelected = undefined;
    if (!isNil(selectedIdx) && fieldSchemas) {
      initialValues = fields.get(selectedIdx);
      initialSelected = this.getSchemaId(fieldSchemas[selectedIdx]);
    }
    if (component) {
      componentProps = merge({}, componentProps, {
        [component]: {
          onChange: this.handleSelectSchema,
          showLabel: false,
          initialSelected
        }
      });
    }
    return (
      <Modal isOpen={this.state.showItemForm} toggle={this.toggleAddFormModal}>
        <ModalHeader toggle={this.toggleAddFormModal}>
          {schema.title}
        </ModalHeader>
        <ModalBody>
          <SchemaVisForm
            schemaVis={{
              ...schemaVis,
              schema,
              componentProps
            }}
            initialValues={initialValues}
            onSubmit={this.handleSubmitItem}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.handleSubmitModal}>
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
      bodyProps,
      classes,
      tag: Tag,
      headerTag: HeaderTag,
      bodyTag: BodyTag,
      addBtnProps: { children, ...addBtnProps }
    } = this.props;

    return (
      <div>
        <Tag className={classes.container}>
          <HeaderTag className={classes.header}>
            <div className={classes.headerTitle}>
              {schema.title}
            </div>
            <div className={classes.addButton}>
              <Button
                color="primary"
                size="sm"
                onClick={this.toggleAddFormModal}
                {...addBtnProps}
                children={children || 'Add'}
              />
            </div>
          </HeaderTag>
          <BodyTag className={classes.body} {...bodyProps}>
            {this.renderArrayItems()}
          </BodyTag>
        </Tag>
        {has(schema, 'items.anyOf') && this.renderItemFormModal()}
      </div>
    );
  }
}

@injectSheet({
  container: { marginBottom: 10, marginTop: 15 },
  header: { padding: 5, paddingLeft: 10, display: 'inline-flex' },
  addButton: { marginLeft: 'auto' },
  headerTitle: { marginTop: 'auto', marginBottom: 'auto' }
})
export class ModalVariedArrayCard extends Component {
  wrapped: any;

  render() {
    const { required, schemaVis, schemaVis: { schema }, ...rest } = this.props;
    return (
      <FieldArray
        ref={elm => { this.wrapped = elm; }}
        validate={validate(schema, required)}
        component={ModalVariedArray}
        schemaVis={schemaVis}
        bodyProps={{ flush: true }}
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
export class ModalVariedArrayInline extends Component {
  wrapped: any;

  render() {
    const { required, schemaVis, schemaVis: { schema }, ...rest } = this.props;
    return (
      <FieldArray
        ref={elm => { this.wrapped = elm; }}
        validate={validate(schema, required)}
        component={ModalVariedArray}
        schemaVis={schemaVis}
        bodyTag="div"
        headerTag="div"
        tag="div"
        {...rest}
      />
    );
  }
}
