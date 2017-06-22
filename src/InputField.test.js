import React from 'react';
import renderer from 'react-test-renderer';
import _inputFields from './index';
import { forEach } from 'lodash';
import { Provider } from 'react-redux';
import { reduxForm, reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';

const { SelectInputField, ...inputFields } = _inputFields;

const testInputFieldSnapshot = (options, InputComponent) => () => {
  const rootReducers = combineReducers({ form: formReducer });
  const store = createStore(rootReducers);
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
          editable: true,
          component: name
        }
      }
    };
    it(
      `Should render ${name}`,
      testInputFieldSnapshot({ schema, name }, InputComponent)
    );
  });

  it(
    'Should render SelectInputField',
    testInputFieldSnapshot(
      {
        schema: {
          id: 'SelectInputField',
          title: 'SelectInputField',
          type: 'number',
          oneOf: [
            { title: 'foo', const: 1, description: 'foo description' },
            { title: 'bar', const: 2, description: 'bar description' }
          ]
        },
        name: 'SelectInputField'
      },
      SelectInputField
    )
  );

  it(
    'Should render SelectInputField with only values',
    testInputFieldSnapshot(
      {
        schema: {
          id: 'SelectInputField',
          title: 'SelectInputField',
          type: 'string',
          oneOf: [{ const: 'foo' }, { const: 'bar' }]
        },
        name: 'SelectInputField'
      },
      SelectInputField
    )
  );

  it(
    'Should render SelectInputField with groups',
    testInputFieldSnapshot(
      {
        schema: {
          id: 'SelectInputField',
          title: 'SelectInputField',
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
        name: 'SelectInputField'
      },
      SelectInputField
    )
  );
});
