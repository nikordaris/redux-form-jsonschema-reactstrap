import React from 'react';
import renderer from 'react-test-renderer';
import _inputFields from './index';
import { forEach, get } from 'lodash';
import { Provider } from 'react-redux';
import { reduxForm, reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';

const { SingleSelectInput, Card, ...inputFields } = _inputFields;

const testInputFieldSnapshot = options => () => {
  const rootReducers = combineReducers({ form: formReducer });
  const store = createStore(rootReducers);
  const InputComponent = get(_inputFields, options.name);
  const WrappedComponent = reduxForm({ form: 'MyForm' })(InputComponent);
  const tree = renderer
    .create(
      <Provider store={store}>
        <WrappedComponent {...options} />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
};

describe('Render InputFields', () => {
  forEach(inputFields, (InputComponent, name, idx) => {
    const schema = {
      id: name,
      title: name,
      type: 'string',
      meta: {
        vis: {
          ordinal: idx,
          component: name
        }
      }
    };
    it(
      `Should render ${name}`,
      testInputFieldSnapshot({ schema, name }, InputComponent)
    );
  });
});
