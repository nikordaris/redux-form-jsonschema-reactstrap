import React, { Component, cloneElement } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { reduxForm, reducer as formReducer } from 'redux-form';
import { Button } from 'reactstrap';
import SchemaVis from 'react-jsonschema-vis';

import components from '../src';
import schema from './schema.json';

const rootReducers = combineReducers({ form: formReducer });
const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class TestForm extends Component {
  handleSubmit = values => {
    this.props.handleSubmit(values);
  };
  render() {
    const { children } = this.props;

    return (
      <form onSubmit={this.handleSubmit} className="container">
        {React.Children.map(children, child => cloneElement(child))}
        <Button color="primary" type="submit">Submit</Button>
      </form>
    );
  }
}

const ReduxTestForm = reduxForm({ form: 'test' })(TestForm);

addDecorator(getStory => (
  <Provider store={store}>
    {getStory()}
  </Provider>
));

storiesOf(
  'Reactstrap Redux-Form Jsonschema Vis',
  module
).add('simple form', () => (
  <ReduxTestForm onSubmit={data => action('form submit')(data)}>
    <SchemaVis schema={schema} components={components} />
  </ReduxTestForm>
));
