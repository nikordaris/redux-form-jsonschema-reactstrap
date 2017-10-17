// @flow
import Ajv from 'ajv';
import ajvErrors from 'ajv-errors';
import { get, isEmpty } from 'lodash';

export default (schema: any, required: any) => (
  value: any,
  allValues: any,
  props: { [string]: any },
  name: string
) => {
  if (isEmpty(value) && required) {
    return 'missing required field';
  } else if (!isEmpty(value)) {
    const ajv = new Ajv({ allErrors: true, jsonPointers: true, coerceTypes: true });
    ajvErrors(ajv);
    ajv.validate(schema, value);
    return get(ajv, 'errors[0].message');
  }

  return undefined;
};
