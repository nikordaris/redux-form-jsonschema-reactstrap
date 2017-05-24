declare type CreateInputOptionsType = {
  type: string,
  options?: ObjectSelectOptionsType
};

declare type OptionType = {
  value: [any],
  label: [string],
  tooltip?: [string]
};

declare type ObjectSelectOptionsType =
  | {
      [group: string]: [
        OptionType
      ]
    }
  | [
    OptionType
  ];

declare type MessagePropsType = {
  tag: string,
  show: (props: { [string]: any }) => boolean
};

declare module 'redux-form-widgets-reactstrap' {
  declare module.exports: {
    MessagePropsType: MessagePropsType,
    OptionType: OptionType,
    ObjectSelectOptionsType: ObjectSelectOptionsType,
    createInputField(options: CreateInputOptionsType): any
  };
}
