import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { FormField } from './index';
import { omit } from 'lodash';

const schema = {
  title: 'Foo',
  description: 'foobar',
  type: 'number',
  meta: {
    vis: {
      ordinal: 0,
      component: 'NumberInputField'
    }
  }
};

const schemaNoDescription = omit(schema, ['description']);

const testFormFieldSnapshot = options => () => {
  const tree = renderer
    .create(
      <FormField {...options}>
        <input type="number" />
      </FormField>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
};

const testShallowFormFieldSnapshot = options => () => {
  const wrapper = shallow(
    <FormField {...options}>
      <input type="number" />
    </FormField>
  );

  expect(wrapper.getNodes()).toMatchSnapshot();
};

describe('Render FormField', () => {
  it(
    'should render',
    testShallowFormFieldSnapshot({
      name: 'foo',
      schema,
      classes: {},
      required: true,
      meta: { touched: false }
    })
  );

  it(
    'should render touched',
    testShallowFormFieldSnapshot({
      name: 'foo',
      schema,
      classes: {},
      required: true,
      meta: { touched: true }
    })
  );

  it(
    'should render with error',
    testShallowFormFieldSnapshot({
      name: 'foo',
      schema,
      classes: {},
      required: true,
      meta: { touched: true, error: 'error' }
    })
  );

  it(
    'should render with warning',
    testShallowFormFieldSnapshot({
      name: 'foo',
      schema,
      classes: {},
      required: true,
      meta: { touched: true, warning: 'warning' }
    })
  );

  it(
    'should render without tooltip',
    testFormFieldSnapshot({
      name: 'foo',
      classes: {},
      schema: schemaNoDescription,
      required: true,
      meta: { touched: true, error: 'error', warning: 'warning' }
    })
  );
});
