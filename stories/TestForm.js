import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { reduxForm } from 'redux-form';

export class TestForm extends Component {
  handleSubmit = values => {
    this.props.handleSubmit(values);
  };
  render() {
    const { children } = this.props;

    return (
      <form onSubmit={this.handleSubmit} className="container">
        {children}
        <Button color="primary" type="submit">Submit</Button>
      </form>
    );
  }
}

export const ReduxTestForm = reduxForm({ form: 'test' })(TestForm);
