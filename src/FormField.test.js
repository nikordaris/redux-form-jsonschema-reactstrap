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
      editable: true,
      component: 'NumberInputField'
    }
  }
};

const schemaNoDescription = omit(schema, ['description']);

const testFormFieldSnapshot = (options, testRenderer = renderer) => () => {
  const tree = testRenderer
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
}

describe('Render FormField', () => {
  it(
    'should render',
    testShallowFormFieldSnapshot({
      name: 'foo',
      schema,
      required: true,
      meta: { touched: true, error: 'error', warning: 'warning' }
    })
  );

  it(
    'should render without tooltip',
    testFormFieldSnapshot({
      name: 'foo',
      schema: schemaNoDescription,
      required: true,
      meta: { touched: true, error: 'error', warning: 'warning' }
    })
  );
});
