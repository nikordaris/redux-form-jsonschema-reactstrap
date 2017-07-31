import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { reduxForm, reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import toJson from 'enzyme-to-json';

import { UniformedArrayCard, UniformedArrayInline } from '../index';
import { matchSnapshotWithReduxForm } from '../testUtils';
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
    const rootReducers = combineReducers({ form: formReducer });
    const store = createStore(rootReducers);
    const WrappedComponent = reduxForm({ form: 'MyForm' })(UniformedArrayCard);
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
    wrapper.find('#addItemBtn').simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.find('#removeItemBtn').at(0).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
});
