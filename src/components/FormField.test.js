import React from 'react';
import FormField from './FormField';
import { omit } from 'lodash';
import { matchSnapshotShallow, matchSnapshot } from '../testUtils';

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

describe('Render FormField', () => {
  it(
    'should render',
    matchSnapshotShallow(
      {
        input: { name: 'foo' },
        schema,
        classes: {},
        required: true,
        meta: { touched: false },
        children: <input type="number" />
      },
      FormField
    )
  );

  it(
    'should render touched',
    matchSnapshotShallow(
      {
        input: { name: 'foo' },
        schema,
        classes: {},
        required: true,
        meta: { touched: true },
        children: <input type="number" />
      },
      FormField
    )
  );

  it(
    'should render with error',
    matchSnapshotShallow(
      {
        input: { name: 'foo' },
        schema,
        classes: {},
        required: true,
        meta: { touched: true, error: 'error' },
        children: <input type="number" />
      },
      FormField
    )
  );

  it(
    'should render with warning',
    matchSnapshotShallow(
      {
        input: { name: 'foo' },
        schema,
        classes: {},
        required: true,
        meta: { touched: true, warning: 'warning' },
        children: <input type="number" />
      },
      FormField
    )
  );

  it(
    'should render without tooltip',
    matchSnapshot(
      {
        input: { name: 'foo' },
        classes: {},
        schema: schemaNoDescription,
        required: true,
        meta: { touched: true, error: 'error', warning: 'warning' },
        children: <input type="number" />
      },
      FormField
    )
  );
});
