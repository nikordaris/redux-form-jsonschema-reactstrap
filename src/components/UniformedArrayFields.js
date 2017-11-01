// @flow

import React, { Component } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import { FieldArray, reduxForm, submit, change, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { merge, isNil } from 'lodash';
import SchemaVis, { getComponent } from 'react-jsonschema-vis';

import { injectSheet } from '../Jss';
import validate from '../validator';

class UniformedArray extends Component {
  static defaultProps = {
    tag: Card,
    headerTag: CardHeader,
    bodyTag: CardBody,
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
      [component]: { removeBtnProps: { onClick: () => fields.remove(idx) } }
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
  validate = (value: any, allValues: { [string]: any }, props: any, name: string) => {
    const { schemaVis: { schema }, required } = this.props;
    return validate(schema, required)(value, allValues, props, name);
  }

  render() {
    const { required, schemaVis, schemaVis: { schema }, ...rest } = this.props;
    return (
      <FieldArray
        validate={this.validate}
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
  validate = (value: any, allValues: { [string]: any }, props: any, name: string) => {
    const { schemaVis: { schema }, required } = this.props;
    return validate(schema, required)(value, allValues, props, name);
  }

  render() {
    const { required, schemaVis, schemaVis: { schema }, ...rest } = this.props;
    return (
      <FieldArray
        validate={this.validate}
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

@reduxForm({
  form: 'uniformedArrayItem'
})
class SchemaVisForm extends Component {
  render() {
    const { schemaVis, tag, styles } = this.props;
    return <SchemaVis {...schemaVis} tag={tag} styles={styles} />;
  }
}

@connect(
  (state, { form, fields: { name } }) => ({ items: formValueSelector(form)(state, name) }),
  dispatch =>
    bindActionCreators({ submitForm: submit, changeForm: change }, dispatch),
  undefined,
  { withRef: true }
)
class ModalUniformArray extends Component {
  static defaultProps = {
    tag: Card,
    headerTag: CardHeader,
    bodyTag: ListGroup,
    addBtnProps: {},
    required: false,
    bodyProps: {},
    dataSchemaPrefix: 'meta.data',
    changeForm: () => { }
  };
  state = {
    showItemForm: false
  };

  props: {
    tag: string,
    submitForm: string => void,
    formName: string,
    fields: any,
    items: any,
    headerTag: string,
    bodyTag: string,
    bodyProps: { [string]: any },
    addBtnProps: { [string]: any },
    schemaVis: SchemaVisType,
    name: string,
    classes: { [string]: any },
    required: boolean,
    dataSchemaPrefix: string,
    meta: { form: string },
    changeForm: (string, string, any) => void
  };
  state: {
    showItemForm: boolean,
    selectedIdx: number
  };

  handleSubmitItem = (values: any) => {
    const { fields, changeForm, meta: { form } } = this.props;
    const { selectedIdx } = this.state;
    if (!isNil(selectedIdx)) {
      const items = fields.getAll();
      items.splice(selectedIdx, 1, values);
      changeForm(form, fields.name, [...items]);
    } else {
      fields.push(values);
    }

    this.toggleAddFormModal();
  };

  handleSubmitModal = () => {
    const { submitForm, formName } = this.props;
    submitForm(formName);
  };

  toggleAddFormModal = (state: any = { selectedIdx: undefined }) => {
    this.setState({
      ...this.state,
      ...state,
      showItemForm: !this.state.showItemForm
    });
  };

  renderArrayItems() {
    const {
      fields,
      dataSchemaPrefix,
      schemaVis,
      schemaVis: { componentProps, schema: { items: schema } }
    } = this.props;
    const component = getComponent(schema, dataSchemaPrefix);
    const _componentProps = idx =>
      merge({}, componentProps, {
        [component]: {
          removeBtnProps: { onClick: () => fields.remove(idx) },
          selectBtnProps: {
            onClick: () => this.toggleAddFormModal({ selectedIdx: idx })
          }
        }
      });
    return fields.map((name, idx) => (
      <SchemaVis
        {...schemaVis}
        componentProps={_componentProps(idx)}
        prefix={dataSchemaPrefix}
        schema={schema}
        key={idx}
        data={fields.get(idx)}
      />
    ));
  }

  renderItemFormModal() {
    const {
      schemaVis,
      fields,
      formName,
      schemaVis: { schema: { items: schema } }
    } = this.props;
    const { selectedIdx } = this.state;

    let initialValues = undefined;
    if (!isNil(selectedIdx)) {
      initialValues = fields.get(selectedIdx);
    }
    return (
      <Modal isOpen={this.state.showItemForm} toggle={this.toggleAddFormModal}>
        <ModalHeader toggle={this.toggleAddFormModal}>
          {schema.title}
        </ModalHeader>
        <ModalBody>
          <SchemaVisForm
            form={formName}
            initialValues={initialValues}
            schemaVis={{ ...schemaVis, schema }}
            onSubmit={this.handleSubmitItem}
          />
        </ModalBody>
        <ModalFooter>
          <Button id="submitAddItemBtn" color="primary" onClick={this.handleSubmitModal}>
            Submit
          </Button>
          <Button id="cancelAddItemBtn" color="secondary" onClick={this.toggleAddFormModal}>
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
                id="addItemBtn"
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
        {schema.items && this.renderItemFormModal()}
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
export class ModalUniformedArrayCard extends Component {
  wrapped: any;

  validate = (value: any, allValues: { [string]: any }, props: any, name: string) => {
    const { schemaVis: { schema }, required } = this.props;
    return validate(schema, required)(value, allValues, props, name);
  }

  render() {
    const { required, schemaVis, schemaVis: { schema }, ...rest } = this.props;
    return (
      <FieldArray
        ref={elm => { this.wrapped = elm; }}
        validate={this.validate}
        component={ModalUniformArray}
        schemaVis={schemaVis}
        bodyProps={{ flush: true }}
        formName="uniformedArrayCardItem"
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
export class ModalUniformedArrayInline extends Component {
  wrapped: any;

  validate = (value: any, allValues: { [string]: any }, props: any, name: string) => {
    const { schemaVis: { schema }, required } = this.props;
    return validate(schema, required)(value, allValues, props, name);
  }

  render() {
    const { required, schemaVis, schemaVis: { schema }, ...rest } = this.props;
    return (
      <FieldArray
        ref={elm => { this.wrapped = elm; }}
        validate={this.validate}
        component={ModalUniformArray}
        schemaVis={schemaVis}
        bodyTag="div"
        headerTag="div"
        tag="div"
        formName="uniformedArrayInlineItem"
        {...rest}
      />
    );
  }
}
