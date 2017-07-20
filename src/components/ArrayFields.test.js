import React from 'react';
import { UniformedArrayCard, Text, CardItem } from '../index';
import { matchSnapshotWithReduxForm } from '../testUtils';

describe('Render ArrayFields', () => {
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
          components: { Text, UniformedArrayCard, CardItem }
        },
        name: 'Foo',
        form: 'MyForm'
      },
      UniformedArrayCard
    )
  );
});
