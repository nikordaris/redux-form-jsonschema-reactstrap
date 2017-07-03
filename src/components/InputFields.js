// @flow
import createInputField from '../createInputField';

export const Text = createInputField({ type: 'text' });
export const Email = createInputField({ type: 'email' });
export const Password = createInputField({ type: 'password' });
export const Date = createInputField({ type: 'date' });
export const DateTime = createInputField({ type: 'datetime-local' });
export const Number = createInputField({
  type: 'number'
});
export const Color = createInputField({
  type: 'color',
  styles: { input: { height: '40px' } }
});
export const TextArea = createInputField({ type: 'textarea' });
