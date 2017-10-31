import React from 'react';  // eslint-disable-line
import toJson from 'enzyme-to-json';

import { UniformedArrayCard, UniformedArrayInline, ModalUniformedArrayCard, ModalUniformedArrayInline } from '../index';
import { matchSnapshotWithReduxForm, mountReduxFormComponent } from '../testUtils';
import components from './index';

describe('Render Uniformed Array Fields', () => {
  it(
    'Should render UniformedArrayCard',
    matchSnapshotWithReduxForm(
      {
        schemaVis: {
          prefix: 'meta.vis',
          schema: {
            id: 'UniformedArrayCard',
            title: 'Uniformed Array Card',
            type: 'array',
            items: {
              id: 'Bar',
              title: 'Bar',
              type: 'object',
              properties: {
                foo: { type: 'string', meta: { vis: { component: 'Text' } } }
              },
              meta: { vis: { component: 'CardItem' } }
            }
          },
          components
        },
        name: 'Foo',
        form: 'MyForm'
      },
      UniformedArrayCard
    )
  );

  it(
    'Should render UniformedArrayInline',
    matchSnapshotWithReduxForm(
      {
        schemaVis: {
          prefix: 'meta.vis',
          schema: {
            id: 'UniformedArrayInline',
            title: 'Uniformed Array Inline',
            type: 'array',
            items: {
              id: 'Bar',
              title: 'Bar',
              type: 'object',
              properties: {
                foo: { type: 'string', meta: { vis: { component: 'Text' } } }
              },
              meta: { vis: { component: 'CardItem' } }
            }
          },
          components
        },
        name: 'Foo',
        form: 'MyForm'
      },
      UniformedArrayInline
    )
  );

  it('should handle add item and remove Uniformed item', () => {
    const schema = {
      id: 'UniformedArrayInline',
      title: 'Uniformed Array Inline',
      type: 'array',
      items: {
        id: 'Bar',
        title: 'Bar',
        type: 'object',
        properties: {
          foo: { type: 'string', meta: { vis: { component: 'Text' } } }
        },
        meta: { vis: { component: 'CardItem' } }
      }
    };
    mountReduxFormComponent(UniformedArrayCard, { schemaVis: { components, prefix: 'meta.vis', schema }, name: 'foobar' }, (wrapper) => {
      wrapper.find('#addItemBtn').first().simulate('click');
      expect(toJson(wrapper)).toMatchSnapshot();
      wrapper.find('#removeItemBtn').at(0).simulate('click');
      expect(toJson(wrapper)).toMatchSnapshot();
      wrapper.unmount();
    });
  });

  it(
    'Should render ModalUniformedArrayCard',
    matchSnapshotWithReduxForm(
      {
        schemaVis: {
          prefix: 'meta.vis',
          schema: {
            id: 'ModalUniformedArrayCard',
            title: 'Modal Uniformed Array Card',
            type: 'array',
            items: {
              id: 'Bar',
              title: 'Bar',
              type: 'object',
              properties: {
                foo: { type: 'string', meta: { vis: { component: 'Text' } } }
              },
              meta: { data: { component: 'ListItemTemplate' } }
            }
          },
          components
        },
        name: 'Foo',
        form: 'MyForm'
      },
      ModalUniformedArrayCard
    )
  );

  it(
    'Should render ModalUniformedArrayInline',
    matchSnapshotWithReduxForm(
      {
        schemaVis: {
          prefix: 'meta.vis',
          schema: {
            id: 'ModalUniformedArrayInline',
            title: 'Modal Uniformed Array Inline',
            type: 'array',
            items: {
              id: 'Bar',
              title: 'Bar',
              type: 'object',
              properties: {
                foo: { type: 'string', meta: { vis: { component: 'Text' } } }
              },
              meta: { data: { component: 'ListItemTemplate' } }
            }
          },
          components
        },
        name: 'Foo',
        form: 'MyForm'
      },
      ModalUniformedArrayInline
    )
  );

  it('should handle add and cancel item modal', () => {
    const schema = {
      id: 'ModalUniformedArrayCard',
      title: 'Modal Uniformed Array Card',
      type: 'array',
      items: {
        id: 'Bar',
        title: 'Bar',
        type: 'object',
        properties: {
          foo: { type: 'string', meta: { vis: { component: 'Text' } } }
        },
        meta: { data: { component: 'ListItemTemplate' } }
      }
    };
    mountReduxFormComponent(ModalUniformedArrayCard, { schemaVis: { components, prefix: 'meta.vis', schema }, name: 'foobar' }, (wrapper) => {
      const StyledComponent = wrapper.find(ModalUniformedArrayCard);
      const ArrayComponent = StyledComponent.instance().wrapped.wrapped.getRenderedComponent().wrappedInstance;

      ArrayComponent.toggleAddFormModal();
      expect(toJson(wrapper)).toMatchSnapshot();
      ArrayComponent.toggleAddFormModal();
      expect(toJson(wrapper)).toMatchSnapshot();

      wrapper.unmount();
    });
  });

  it('should add item to array, modify it, and remove it', () => {
    const schema = {
      id: 'ModalUniformedArrayCard',
      title: 'Modal Uniformed Array Card',
      type: 'array',
      items: {
        id: 'Bar',
        title: 'Bar',
        type: 'object',
        properties: {
          foo: { type: 'string', meta: { vis: { component: 'Text' } } }
        },
        meta: { data: { component: 'ListItemTemplate' } }
      }
    };
    mountReduxFormComponent(ModalUniformedArrayCard, { schemaVis: { components, prefix: 'meta.vis', schema }, name: 'foobar' }, (wrapper) => {
      const StyledComponent = wrapper.find(ModalUniformedArrayCard);
      const arrayComponent = StyledComponent.instance().wrapped.wrapped.getRenderedComponent().wrappedInstance;

      arrayComponent.toggleAddFormModal();
      wrapper.update();
      expect(toJson(wrapper)).toMatchSnapshot();
      arrayComponent.handleSubmitItem({ foo: 'bar' });
      wrapper.update();
      expect(toJson(wrapper)).toMatchSnapshot();
      wrapper.find('#arrayListItem').first().simulate('click');
      expect(toJson(wrapper)).toMatchSnapshot();
      arrayComponent.handleSubmitItem({ foo: 'bar2' });
      wrapper.update();
      expect(toJson(wrapper)).toMatchSnapshot();
      wrapper.find('#removeItemBtn').first().simulate('click');
      expect(toJson(wrapper)).toMatchSnapshot();
      wrapper.unmount();
    });
  });
});
