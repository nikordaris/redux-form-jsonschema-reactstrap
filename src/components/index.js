import * as UniformedArrayFields from './UniformedArrayFields';
import * as VariedArrayFields from './VariedArrayFields';
import * as InputFields from './InputFields';
import * as CardContainers from './CardContainers';
import * as SelectFields from './SelectFields';
import * as ListItems from './ListItems';

export * from './UniformedArrayFields';
export * from './VariedArrayFields';
export * from './InputFields';
export * from './CardContainers';
export * from './SelectFields';
export * from './ListItems';

export FormField from './FormField';

export const defaultComponents = {
  string: InputFields.Text,
  number: InputFields.Number,
  array: UniformedArrayFields.UniformedArrayInline
};

export default {
  ...InputFields,
  ...UniformedArrayFields,
  ...VariedArrayFields,
  ...CardContainers,
  ...SelectFields,
  ...ListItems
};
