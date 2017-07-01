import Ajv from 'ajv';
import { get, isEmpty } from 'lodash';

export default (schema: any, required: any) => (
  value: any,
  allValues: any,
  props: { [string]: any }
) => {
  if (isEmpty(value) && required) {
    return 'missing required field';
  } else if (!isEmpty(value)) {
    const ajv = new Ajv({ coerceTypes: true });
    ajv.validate(schema, value);
    return get(ajv, 'errors[0].message');
  }

  return undefined;
};
