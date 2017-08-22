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

export const defaultComponents = [
  { type: 'string', component: InputFields.Text },
  { type: 'number', component: InputFields.Number },
  { type: 'array', component: UniformedArrayFields.UniformedArrayInline }
];

export default {
  ...InputFields,
  ...UniformedArrayFields,
  ...VariedArrayFields,
  ...CardContainers,
  ...SelectFields,
  ...ListItems
};
