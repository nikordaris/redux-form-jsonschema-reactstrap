declare type CreateInputOptionsType = {
  [string]: any,
  type: string
};

declare type MessagePropsType = {
  [string]: any,
  tag: string,
  show: (props: { [string]: any }) => boolean
};

declare module 'redux-form-widgets-reactstrap' {
  declare module.exports: {
    MessagePropsType: MessagePropsType,
    createInputField(options: CreateInputOptionsType): any
  };
}
