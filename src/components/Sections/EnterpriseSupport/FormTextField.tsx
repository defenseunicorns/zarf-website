import TextField from '@mui/material/TextField/TextField';
import React, { ReactElement } from 'react';
import { FieldType } from './types';

function FormTextField(props: {
  fieldType: FieldType;
  queryValue: string;
  onChange:
    | React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
    | undefined;
}): ReactElement {
  const [initialized, setInitialized] = React.useState<boolean>(false);

  React.useEffect(() => {
    return () => setInitialized(false);
  }, [props.queryValue]);

  return (
    <TextField
      size="small"
      error={initialized && !props.queryValue}
      onBlur={(): void => setInitialized(true)}
      name={props.fieldType}
      variant="outlined"
      onChange={props.onChange}
      required={true}
      label={props.fieldType.charAt(0).toUpperCase() + props.fieldType.slice(1)}
      value={props.queryValue}
    />
  );
}

export default FormTextField;
