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
  | { [string]: Array<OptionType> }
  | Array<OptionType>;

declare type ShowFeedbackType = (props: { [string]: any }) => boolean;

declare module 'redux-form-jsonschema-reactstrap' {
  declare module.exports: {
    ShowFeedbackType: ShowFeedbackType,
    OptionType: OptionType,
    ObjectSelectOptionsType: ObjectSelectOptionsType,
    createInputField(options: CreateInputOptionsType): any
  };
}
