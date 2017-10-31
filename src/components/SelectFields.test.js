import React from 'react';
import { Input } from 'reactstrap';
import { SingleSelect } from './SelectFields';
import { Provider } from 'react-redux';
import { reduxForm, reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import { mount } from 'enzyme';
import { Text, CardWithHeader } from './index';
import { matchSnapshotWithReduxForm } from '../testUtils';
import toJson from 'enzyme-to-json';

describe('Render SelectFields', () => {
  it(
    'Should render SingleSelect',
    matchSnapshotWithReduxForm(
      {
        schemaVis: {
          prefix: 'meta.vis',
          meta: {
            hasComponent: () => false
          },
          schema: {
            id: 'SingleSelect',
            title: 'SingleSelect',
            type: 'number',
            oneOf: [
              { title: 'foo', const: 1, description: 'foo description' },
              { title: 'bar', const: 2, description: 'bar description' }
            ]
          }
        },
        name: 'SingleSelect'
      },
      SingleSelect
    )
  );

  it(
    'Should render SingleSelect with only values',
    matchSnapshotWithReduxForm(
      {
        schemaVis: {
          prefix: 'meta.vis',
          meta: {
            hasComponent: () => false
          },
          schema: {
            id: 'SingleSelect',
            title: 'SingleSelect',
            type: 'string',
            oneOf: [{ const: 'foo' }, { const: 'bar' }]
          }
        },
        name: 'SingleSelect'
      },
      SingleSelect
    )
  );

  it(
    'Should render SingleSelect with only titles',
    matchSnapshotWithReduxForm(
      {
        schemaVis: {
          prefix: 'meta.vis',
          meta: {
            hasComponent: () => false
          },
          schema: {
            id: 'SingleSelect',
            title: 'SingleSelect',
            type: 'string',
            oneOf: [{ title: 'foo' }, { title: 'bar' }]
          }
        },
        name: 'SingleSelect'
      },
      SingleSelect
    )
  );

  it(
    'Should render object SingleSelect',
    matchSnapshotWithReduxForm(
      {
        schemaVis: {
          components: { Text },
          prefix: 'meta.vis',
          meta: {
            hasComponent: () => true
          },
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
                    id: 'x',
                    meta: {
                      vis: {
                        component: 'Text'
                      }
                    }
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
                    id: 'Y',
                    meta: {
                      vis: {
                        component: 'Text'
                      }
                    }
                  }
                }
              }
            ]
          }
        },
        name: 'SingleSelect'
      },
      SingleSelect
    )
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
          meta: { vis: { component: 'CardWithHeader' } },
          properties: {
            x: {
              type: 'string',
              title: 'X',
              id: 'x',
              meta: {
                vis: {
                  component: 'Text'
                }
              }
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
              id: 'Y',
              meta: {
                vis: {
                  component: 'Text'
                }
              }
            }
          }
        }
      ]
    };
    const wrapper = mount(
      <Provider store={store}>
        <WrappedComponent
          schemaVis={{
            meta: {
              hasComponent: () => true
            },
            components: { Text, CardWithHeader },
            prefix: 'meta.vis',
            schema
          }}
          name="foobar"
        />
      </Provider>
    );
    const StyledComponent = wrapper.find(SingleSelect);
    const SelectComponent = StyledComponent.instance().wrapped.wrappedInstance;
    wrapper.find(Input).simulate('change', {
      target: { value: 'Foo' }
    });
    expect(SelectComponent.state.selected).toEqual('Foo');
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
    expect(StyledComponent.instance().state.sheet.attached).toBeFalsy();
  });
});
