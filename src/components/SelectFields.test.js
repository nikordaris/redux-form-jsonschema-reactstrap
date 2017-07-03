import React from 'react';
import { Input } from 'reactstrap';
import renderer from 'react-test-renderer';
import { SingleSelect } from './SelectFields';
import { Provider } from 'react-redux';
import { reduxForm, reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import { mount } from 'enzyme';

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
    'Should render SingleSelect',
    testInputFieldSnapshot({
      schema: {
        id: 'SingleSelect',
        title: 'SingleSelect',
        type: 'number',
        oneOf: [
          { title: 'foo', const: 1, description: 'foo description' },
          { title: 'bar', const: 2, description: 'bar description' }
        ]
      },
      name: 'SingleSelect'
    })
  );

  it(
    'Should render SingleSelect with only values',
    testInputFieldSnapshot({
      schema: {
        id: 'SingleSelect',
        title: 'SingleSelect',
        type: 'string',
        oneOf: [{ const: 'foo' }, { const: 'bar' }]
      },
      name: 'SingleSelect'
    })
  );

  it(
    'Should render SingleSelect with only titles',
    testInputFieldSnapshot({
      schema: {
        id: 'SingleSelect',
        title: 'SingleSelect',
        type: 'string',
        oneOf: [{ title: 'foo' }, { title: 'bar' }]
      },
      name: 'SingleSelect'
    })
  );

  it(
    'Should render object SingleSelect',
    testInputFieldSnapshot({
      schema: {
        id: 'SingleSelect',
        title: 'SingleSelect',
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
      name: 'SingleSelect'
    })
  );

  it('should handle select change', () => {
    const rootReducers = combineReducers({ form: formReducer });
    const store = createStore(rootReducers);
    const WrappedComponent = reduxForm({ form: 'MyForm' })(SingleSelect);
    const schema = {
      id: 'SingleSelect',
      title: 'SingleSelect',
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
    const StyledComponent = wrapper.find(SingleSelect);
    const SelectComponent = StyledComponent.node.wrapped.wrappedInstance;

    wrapper.find(Input).simulate('change', { target: { value: 'Foo' } });
    expect(SelectComponent.state.selected).toEqual('Foo');
    wrapper.unmount();
    expect(StyledComponent.node.state.sheet.attached).toBeFalsy();
  });
});
