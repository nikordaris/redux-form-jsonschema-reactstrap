import * as ArrayFields from './ArrayFields';
import * as InputFields from './InputFields';
import * as CardContainers from './CardContainers';
import * as SelectFields from './SelectFields';
import * as ListItems from './ListItems';

export * from './ArrayFields';
export * from './InputFields';
export * from './CardContainers';
export * from './SelectFields';
export * from './ListItems';

export FormField from './FormField';

export const defaultComponents = {
  string: InputFields.Text,
  number: InputFields.Number,
  array: ArrayFields.UniformedArrayInline
};

export default {
  ...InputFields,
  ...ArrayFields,
  ...CardContainers,
  ...SelectFields,
  ...ListItems
};
