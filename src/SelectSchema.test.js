import React from 'react';
import renderer from 'react-test-renderer';
import inputFields from './index';
import { Provider } from 'react-redux';
import { reduxForm, reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';

const { SingleSelectInput } = inputFields;

const testInputFieldSnapshot = options => () => {
  const rootReducers = combineReducers({ form: formReducer });
  const store = createStore(rootReducers);
  const WrappedComponent = reduxForm({ form: 'MyForm' })(SingleSelectInput);
  const tree = renderer
    .create(
      <Provider store={store}>
        <WrappedComponent {...options} renderSchema={() => <div />} />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
};

describe('Render SelectSchema', () => {
  it(
    'Should render SingleSelectInput',
    testInputFieldSnapshot({
      schema: {
        id: 'SingleSelectInput',
        title: 'SingleSelectInput',
        type: 'number',
        oneOf: [
          { title: 'foo', const: 1, description: 'foo description' },
          { title: 'bar', const: 2, description: 'bar description' }
        ]
      },
      name: 'SingleSelectInput'
    })
  );

  it(
    'Should render SingleSelectInput with only values',
    testInputFieldSnapshot({
      schema: {
        id: 'SingleSelectInput',
        title: 'SingleSelectInput',
        type: 'string',
        oneOf: [{ const: 'foo' }, { const: 'bar' }]
      },
      name: 'SingleSelectInput'
    })
  );

  it(
    'Should render SingleSelectInput with groups',
    testInputFieldSnapshot({
      schema: {
        id: 'SingleSelectInput',
        title: 'SingleSelectInput',
        type: 'number',
        oneOf: [
          {
            title: 'Foo Group',
            oneOf: [
              { title: 'foo', const: 1, description: 'foo description' },
              { title: 'foo2', const: 2, description: 'foo2 description' }
            ]
          },
          {
            title: 'Bar Group',
            oneOf: [
              { title: 'bar', const: 1, description: 'bar description' },
              { title: 'bar2', const: 2, description: 'bar2 description' }
            ]
          }
        ]
      },
      name: 'SingleSelectInput'
    })
  );
});
