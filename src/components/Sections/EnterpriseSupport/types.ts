export enum FieldType {
  NAME = 'name',
  EMAIL = 'email',
  ORG = 'organization',
}

export type FormQuery = {
  [key in FieldType]: string;
};

export type TextFieldEvent = React.ChangeEvent<
  HTMLTextAreaElement | HTMLInputElement
>;
