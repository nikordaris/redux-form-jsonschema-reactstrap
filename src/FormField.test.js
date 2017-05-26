import React from 'react';
import renderer from 'react-test-renderer';
import { FormField } from './index';

const schema = {
  title: 'Foo',
  description: 'foobar',
  type: 'number',
  meta: {
    form: {
      ordinal: 0,
      editable: true,
      widget: 'NumberInputField'
    }
  }
};
describe('Render FormField', () => {
  it('should render', () => {
    const tree = renderer
      .create(
        <FormField
          name="foo"
          schema={schema}
          required={true}
          meta={{ touched: true, error: 'error', warning: 'warning' }}
        >
          <input type="number" />
        </FormField>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
