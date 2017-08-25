import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { reduxForm, reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

export const matchSnapshotWithReduxForm = (options, TestComponent) => () => {
  const rootReducers = combineReducers({ form: formReducer });
  const store = createStore(rootReducers);
  const WrappedComponent = reduxForm({ form: 'MyForm' })(TestComponent);
  const tree = renderer
    .create(
    <Provider store={store}>
      <WrappedComponent {...options} />
    </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
};

export function mountReduxFormComponent(TestComponent, props, cb) {
  const rootReducers = combineReducers({ form: formReducer });
  const store = createStore(rootReducers);
  const form = 'TestForm';
  const WrappedComponent = reduxForm({ form, withRef: true })(TestComponent);
  const wrapper = mount(<Provider store={store}>
    <WrappedComponent
      form={form}
      {...props}
    />
  </Provider>);
  cb(wrapper, form);
}

export const matchSnapshot = (options, TestComponent) => () => {
  const tree = renderer.create(<TestComponent {...options} />).toJSON();
  expect(tree).toMatchSnapshot();
};

export const matchSnapshotShallow = (options, TestComponent) => () => {
  const wrapper = shallow(<TestComponent {...options} />);

  expect(toJson(wrapper)).toMatchSnapshot();
};
