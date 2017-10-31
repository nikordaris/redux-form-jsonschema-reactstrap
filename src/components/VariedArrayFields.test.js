import React from 'react'; // eslint-disable-line
import toJson from 'enzyme-to-json';

import { VariedArrayCard, VariedArrayInline, ModalVariedArrayCard, ModalVariedArrayInline } from '../index';
import { matchSnapshotWithReduxForm, mountReduxFormComponent } from '../testUtils';
import components from './index';

const VARIED_ARRAY_CARD_SCHEMA = {
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

const VARIED_ARRAY_INLINE_SCHEMA = {
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
};

const MODAL_VARIED_ARRAY_CARD_SCHEMA = {
  id: 'VariedArrayCard',
  title: 'Varied Array Card',
  type: 'array',
  items: {
    id: 'FooCard',
    title: 'Foo Card',
    type: 'object',
    meta: {
      vis: {
        component: 'SingleSelect'
      }
    },
    anyOf: [
      {
        id: 'Bar',
        title: 'Bar',
        type: 'object',
        meta: {
          data: {
            template: ['${name} (Bar: ${bar})', '${name}'],
            component: 'ListItemTemplate'
          }
        },
        properties: {
          name: {
            title: 'Name',
            id: 'Name',
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
          data: {
            template: ['${name} (Bar: ${bar})', '${name}'],
            component: 'ListItemTemplate'
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

describe('Render Varied Array Fields', () => {
  it(
    'Should render VariedArrayCard',
    matchSnapshotWithReduxForm(
      {
        schemaVis: {
          prefix: 'meta.vis',
          schema: VARIED_ARRAY_CARD_SCHEMA,
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
          schema: VARIED_ARRAY_INLINE_SCHEMA,
          components
        },
        name: 'Foo',
        form: 'MyForm'
      },
      VariedArrayInline
    )
  );
  it('should handle add item and remove Varied item', () => {
    mountReduxFormComponent(VariedArrayCard, { schemaVis: { components, prefix: 'meta.vis', schema: VARIED_ARRAY_CARD_SCHEMA }, name: 'foobar' }, (wrapper) => {
      wrapper
        .find('#selectItem')
        .first()
        .simulate('change', { target: { value: 'Bar' } });
      expect(toJson(wrapper)).toMatchSnapshot();
      wrapper.find('#addItemBtn').first().simulate('click');
      expect(toJson(wrapper)).toMatchSnapshot();
      wrapper.find('#removeItemBtn').at(0).simulate('click');
      expect(toJson(wrapper)).toMatchSnapshot();
      wrapper.unmount();
    });
  });


  it(
    'Should render ModalVariedArrayCard',
    matchSnapshotWithReduxForm(
      {
        schemaVis: {
          prefix: 'meta.vis',
          schema: MODAL_VARIED_ARRAY_CARD_SCHEMA,
          components
        },
        name: 'Foo',
        form: 'MyForm'
      },
      ModalVariedArrayCard
    )
  );

  it(
    'Should render ModalVariedArrayInline',
    matchSnapshotWithReduxForm(
      {
        schemaVis: {
          prefix: 'meta.vis',
          schema: VARIED_ARRAY_INLINE_SCHEMA,
          components
        },
        name: 'Foo',
        form: 'MyForm'
      },
      ModalVariedArrayInline
    )
  );

  it('should handle add and cancel item modal', () => {
    mountReduxFormComponent(ModalVariedArrayCard, { schemaVis: { components, prefix: 'meta.vis', schema: MODAL_VARIED_ARRAY_CARD_SCHEMA }, name: 'foobar' }, (wrapper) => {
      const StyledComponent = wrapper.find(ModalVariedArrayCard);
      const arrayComponent = StyledComponent.instance().wrapped.wrapped.getRenderedComponent().wrappedInstance;

      arrayComponent.toggleAddFormModal();
      expect(toJson(wrapper)).toMatchSnapshot();
      arrayComponent.toggleAddFormModal();
      expect(toJson(wrapper)).toMatchSnapshot();

      wrapper.unmount();
    });
  });

  it('should add item to array, modify it, and remove it', () => {
    mountReduxFormComponent(ModalVariedArrayCard, { schemaVis: { components, prefix: 'meta.vis', schema: MODAL_VARIED_ARRAY_CARD_SCHEMA }, name: 'foobar' }, (wrapper) => {
      const StyledComponent = wrapper.find(ModalVariedArrayCard);
      const arrayComponent = StyledComponent.instance().wrapped.wrapped.getRenderedComponent().wrappedInstance;

      arrayComponent.toggleAddFormModal();
      wrapper.update();
      expect(toJson(wrapper)).toMatchSnapshot();
      arrayComponent.handleSelectSchema('Bar');
      wrapper.update();
      expect(toJson(wrapper)).toMatchSnapshot();
      arrayComponent.handleSubmitItem({ name: 'name', bar: 'bar' });
      wrapper.update();
      expect(toJson(wrapper)).toMatchSnapshot();
      wrapper.find('#arrayListItem').first().simulate('click');
      expect(toJson(wrapper)).toMatchSnapshot();
      arrayComponent.handleSubmitItem({ name: 'name', bar: undefined });
      wrapper.update();
      expect(toJson(wrapper)).toMatchSnapshot();
      wrapper.find('#removeItemBtn').first().simulate('click');
      expect(toJson(wrapper)).toMatchSnapshot();
      wrapper.unmount();
    });
  });
});
