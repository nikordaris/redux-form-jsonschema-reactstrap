import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { reduxForm, reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import toJson from 'enzyme-to-json';

import { VariedArrayCard, VariedArrayInline } from '../index';
import { matchSnapshotWithReduxForm } from '../testUtils';
import components from './index';

describe('Render Varied Array Fields', () => {
  it(
    'Should render VariedArrayCard',
    matchSnapshotWithReduxForm(
      {
        schemaVis: {
          prefix: 'meta.vis',
          schema: {
            id: 'VariedArrayCard',
            title: 'Varied Array Card',
            type: 'array',
            items: {
              anyOf: [
                {
                  id: 'Bar',
                  title: 'Bar',
                  type: 'object',
                  meta: {
                    vis: {
                      ordinal: 1,
                      component: 'CardItem'
                    }
                  },
                  properties: {
                    name: {
                      title: 'Name',
                      it: 'Name',
                      type: 'string',
                      meta: {
                        vis: {
                          ordinal: 1,
                          component: 'Text'
                        }
                      }
                    },
                    bar: {
                      id: 'Bar',
                      title: 'Bar',
                      type: 'string',
                      meta: {
                        vis: {
                          ordinal: 2,
                          component: 'Text'
                        }
                      }
                    }
                  }
                },
                {
                  id: 'Baz',
                  title: 'Baz',
                  type: 'object',
                  meta: {
                    vis: {
                      ordinal: 1,
                      component: 'CardItem'
                    }
                  },
                  properties: {
                    name: {
                      title: 'Name',
                      it: 'Name',
                      type: 'string',
                      meta: {
                        vis: {
                          ordinal: 1,
                          component: 'Text'
                        }
                      }
                    },
                    baz: {
                      id: 'Baz',
                      title: 'Baz',
                      type: 'number',
                      meta: {
                        vis: {
                          ordinal: 2,
                          component: 'Number'
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          components
        },
        name: 'Foo',
        form: 'MyForm'
      },
      VariedArrayCard
    )
  );

  it(
    'Should render VariedArrayInline',
    matchSnapshotWithReduxForm(
      {
        schemaVis: {
          prefix: 'meta.vis',
          schema: {
            id: 'VariedArrayInline',
            title: 'Varied Array Inline',
            type: 'array',
            items: {
              anyOf: [
                {
                  id: 'Bar',
                  title: 'Bar',
                  type: 'object',
                  meta: {
                    vis: {
                      ordinal: 1,
                      component: 'CardItem'
                    }
                  },
                  properties: {
                    name: {
                      title: 'Name',
                      it: 'Name',
                      type: 'string',
                      meta: {
                        vis: {
                          ordinal: 1,
                          component: 'Text'
                        }
                      }
                    },
                    bar: {
                      id: 'Bar',
                      title: 'Bar',
                      type: 'string',
                      meta: {
                        vis: {
                          ordinal: 2,
                          component: 'Text'
                        }
                      }
                    }
                  }
                },
                {
                  id: 'Baz',
                  title: 'Baz',
                  type: 'object',
                  meta: {
                    vis: {
                      ordinal: 1,
                      component: 'CardItem'
                    }
                  },
                  properties: {
                    name: {
                      title: 'Name',
                      it: 'Name',
                      type: 'string',
                      meta: {
                        vis: {
                          ordinal: 1,
                          component: 'Text'
                        }
                      }
                    },
                    baz: {
                      id: 'Baz',
                      title: 'Baz',
                      type: 'number',
                      meta: {
                        vis: {
                          ordinal: 2,
                          component: 'Number'
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          components
        },
        name: 'Foo',
        form: 'MyForm'
      },
      VariedArrayInline
    )
  );
  it('should handle add item and remove Varied item', () => {
    const rootReducers = combineReducers({ form: formReducer });
    const store = createStore(rootReducers);
    const WrappedComponent = reduxForm({ form: 'MyForm' })(VariedArrayCard);
    const schema = {
      id: 'VariedArrayCard',
      title: 'Varied Array Card',
      type: 'array',
      items: {
        anyOf: [
          {
            id: 'Bar',
            title: 'Bar',
            type: 'object',
            meta: {
              vis: {
                ordinal: 1,
                component: 'CardItem'
              }
            },
            properties: {
              name: {
                title: 'Name',
                it: 'Name',
                type: 'string',
                meta: {
                  vis: {
                    ordinal: 1,
                    component: 'Text'
                  }
                }
              },
              bar: {
                id: 'Bar',
                title: 'Bar',
                type: 'string',
                meta: {
                  vis: {
                    ordinal: 2,
                    component: 'Text'
                  }
                }
              }
            }
          },
          {
            id: 'Baz',
            title: 'Baz',
            type: 'object',
            meta: {
              vis: {
                ordinal: 1,
                component: 'CardItem'
              }
            },
            properties: {
              name: {
                title: 'Name',
                it: 'Name',
                type: 'string',
                meta: {
                  vis: {
                    ordinal: 1,
                    component: 'Text'
                  }
                }
              },
              baz: {
                id: 'Baz',
                title: 'Baz',
                type: 'number',
                meta: {
                  vis: {
                    ordinal: 2,
                    component: 'Number'
                  }
                }
              }
            }
          }
        ]
      }
    };
    const wrapper = mount(
      <Provider store={store}>
        <WrappedComponent
          schemaVis={{
            components,
            prefix: 'meta.vis',
            schema
          }}
          name="foobar"
          form="MyForm"
        />
      </Provider>
    );
    wrapper
      .find('#selectItem')
      .simulate('change', { target: { value: 'Bar' } });
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.find('#addItemBtn').simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.find('#removeItemBtn').at(0).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
});
