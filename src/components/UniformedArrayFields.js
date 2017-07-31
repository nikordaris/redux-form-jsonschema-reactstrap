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
import { FieldArray, reduxForm, submit } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { includes, merge, get } from 'lodash';
import SchemaVis, { getComponent } from 'react-jsonschema-vis';

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

@reduxForm({
  form: 'arrayItem'
})
class SchemaVisForm extends Component {
  render() {
    const { schemaVis, tag, styles } = this.props;
    return <SchemaVis {...schemaVis} tag={tag} styles={styles} />;
  }
}

@connect(
  () => ({}),
  dispatch => bindActionCreators({ submitForm: submit }, dispatch)
)
class ModalUniformArray extends Component {
  static defaultProps = {
    tag: Card,
    headerTag: CardHeader,
    bodyTag: ListGroup,
    addBtnProps: {},
    required: false,
    bodyProps: {},
    dataSchemaPrefix: 'meta.data'
  };
  state = {
    showItemForm: false
  };

  props: {
    tag: string,
    submitForm: string => void,
    fields: any,
    headerTag: string,
    bodyTag: string,
    bodyProps: { [string]: any },
    addBtnProps: { [string]: any },
    schemaVis: SchemaVisType,
    name: string,
    classes: { [string]: any },
    required: boolean,
    dataSchemaPrefix: string
  };
  state: {
    showItemForm: boolean
  };

  handleSubmitItem = (values: any) => {
    const { fields } = this.props;
    fields.push(values);
    this.toggleAddFormModal();
  };

  handleSubmitModal = () => {
    const { submitForm } = this.props;
    submitForm('arrayItem');
  };

  toggleAddFormModal = () => {
    this.setState({ ...this.state, showItemForm: !this.state.showItemForm });
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
        [component]: { removeBtnProps: { onClick: () => fields.remove(idx) } }
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
    const { schemaVis, schemaVis: { schema: { items: schema } } } = this.props;

    return (
      <Modal isOpen={this.state.showItemForm} toggle={this.toggleAddFormModal}>
        <ModalHeader toggle={this.toggleAddFormModal}>
          {schema.title}
        </ModalHeader>
        <ModalBody>
          <SchemaVisForm
            schemaVis={{ ...schemaVis, schema }}
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
export class ModalUniformArrayCard extends Component {
  render() {
    const { required, schemaVis, schemaVis: { schema }, ...rest } = this.props;
    return (
      <FieldArray
        validate={validate(schema, required)}
        component={ModalUniformArray}
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
export class ModalUniformArrayInline extends Component {
  render() {
    const { required, schemaVis, schemaVis: { schema }, ...rest } = this.props;
    return (
      <FieldArray
        validate={validate(schema, required)}
        component={ModalUniformArray}
        schemaVis={schemaVis}
        bodyTag="div"
        headerTag="div"
        tag="div"
        {...rest}
      />
    );
  }
}
