import React from 'react';
import { Input } from 'reactstrap';
import renderer from 'react-test-renderer';
import inputFields from './index';
import { Provider } from 'react-redux';
import { reduxForm, reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import { mount } from 'enzyme';

const { SingleSelectInput } = inputFields;

const testInputFieldSnapshot = options => () => {
  const rootReducers = combineReducers({ form: formReducer });
  const store = createStore(rootReducers);
  const WrappedComponent = reduxForm({ form: 'MyForm' })(SingleSelectInput);
  const tree = renderer
    .create(
      <Provider store={store}>
        <WrappedComponent renderSchema={() => undefined} {...options} />
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
    'Should render SingleSelectInput with only titles',
    testInputFieldSnapshot({
      schema: {
        id: 'SingleSelectInput',
        title: 'SingleSelectInput',
        type: 'string',
        oneOf: [{ title: 'foo' }, { title: 'bar' }]
      },
      name: 'SingleSelectInput'
    })
  );

  it(
    'Should render object SingleSelectInput',
    testInputFieldSnapshot({
      schema: {
        id: 'SingleSelectInput',
        title: 'SingleSelectInput',
        type: 'object',
        oneOf: [
          {
            title: 'Foo',
            id: 'Foo',
            type: 'object',
            properties: {
              x: {
                type: 'string',
                title: 'X',
                id: 'x'
              }
            }
          },
          {
            id: 'Bar',
            title: 'Bar',
            type: 'object',
            properties: {
              y: {
                type: 'string',
                title: 'Y',
                id: 'Y'
              }
            }
          }
        ]
      },
      renderSchema: () => <div />,
      name: 'SingleSelectInput'
    })
  );

  it('should handle select change', () => {
    const rootReducers = combineReducers({ form: formReducer });
    const store = createStore(rootReducers);
    const WrappedComponent = reduxForm({ form: 'MyForm' })(SingleSelectInput);
    const schema = {
      id: 'SingleSelectInput',
      title: 'SingleSelectInput',
      type: 'object',
      oneOf: [
        {
          title: 'Foo',
          id: 'Foo',
          type: 'object',
          properties: {
            x: {
              type: 'string',
              title: 'X',
              id: 'x'
            }
          }
        },
        {
          id: 'Bar',
          title: 'Bar',
          type: 'object',
          properties: {
            y: {
              type: 'string',
              title: 'Y',
              id: 'Y'
            }
          }
        }
      ]
    };
    const wrapper = mount(
      <Provider store={store}>
        <WrappedComponent
          renderSchema={() => <div />}
          schema={schema}
          name="foobar"
          change={() => undefined}
        />
      </Provider>
    );
    const StyledComponent = wrapper.find(SingleSelectInput);
    const SelectComponent = StyledComponent.node.wrapped.wrappedInstance;

    wrapper.find(Input).simulate('change', { target: { value: 'Foo' } });
    expect(SelectComponent.state.selected).toEqual('Foo');
    wrapper.unmount();
    expect(StyledComponent.node.state.sheet.attached).toBeFalsy();
  });
});
