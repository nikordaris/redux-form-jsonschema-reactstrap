import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { reducer as formReducer } from 'redux-form';
import SchemaVis from 'react-jsonschema-vis';

import { ReduxTestForm } from './TestForm';
import components from '../src';
import * as arrayFieldSchemas from './arrayFieldSchemas';
import simpleFormSchema from './schema.json';

const rootReducers = combineReducers({ form: formReducer });
const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

addDecorator(getStory => (
  <Provider store={store}>
    {getStory()}
  </Provider>
));

const storybook = storiesOf('Reactstrap Redux-Form Jsonschema Vis', module);
storybook.add('simple form', () => (
  <ReduxTestForm
    form="simple form"
    onSubmit={data => action('Form(SimpleForm) submit')(data)}
  >
    <SchemaVis
      form="simple form"
      schema={simpleFormSchema}
      components={components}
    />
  </ReduxTestForm>
));

Object.values(arrayFieldSchemas).forEach(schema => {
  storybook.add(schema.title, () => (
    <ReduxTestForm form={schema.id} onSubmit={data => action(`Form(${schema.id}) submit`)(data)}>
      <SchemaVis form={schema.id} schema={schema} components={components} />
    </ReduxTestForm>
  ));
});
