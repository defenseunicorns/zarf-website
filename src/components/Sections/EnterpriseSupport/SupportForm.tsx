import { clearQuery, postEnterpriseSupportForm } from './utils';
import { FormQuery, FieldType, TextFieldEvent } from './types';
import { Box, Button, Typography } from '@mui/material';
import React, { ReactElement, useEffect } from 'react';
import FormTextField from './FormTextField';
import styled from '@emotion/styled';

const FormCard = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-items: space-evenly;
  padding: 40px 32px;
  gap: 16px;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.07) 0%,
      rgba(255, 255, 255, 0.07) 100%
    ),
    #10184c;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12),
    0px 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
` as typeof Box;

function SupportForm(): ReactElement {
  const [query, setQuery] = React.useState<FormQuery>(clearQuery());
  const [canSubmit, setCanSubmit] = React.useState<boolean>(false);

  const handleSubmit = React.useCallback(
    async (event): Promise<void> => {
      event.preventDefault();
      await postEnterpriseSupportForm(query, resetForm);
    },
    [query],
  );

  function resetForm(): void {
    setQuery(clearQuery);
  }

  function fieldChangeHandler(
    field: FieldType,
  ): (event: TextFieldEvent) => void {
    return event => {
      setQuery(k => {
        k[field] = event.target.value;
        return { ...k };
      });
    };
  }

  useEffect(() => {
    const allFieldsValid = Object.values(query).every(v => v);
    setCanSubmit(allFieldsValid);
  }, [query]);

  return (
    <FormCard
      component="form"
      onSubmit={handleSubmit}
      sx={{ width: { xs: '360px', md: '480px' } }}
    >
      <Typography variant="h3">Get Pricing</Typography>
      <Typography variant="body2" color="text.secondary">
        Provide us with your information and we will contact you with more
        information shortly.
      </Typography>
      {Object.values(FieldType).map(v => (
        <FormTextField
          key={v}
          queryValue={query[v]}
          fieldType={v}
          onChange={fieldChangeHandler(v)}
        />
      ))}
      <Button
        variant="contained"
        type="submit"
        color="secondary"
        disabled={!canSubmit}
      >
        Agree and Submit
      </Button>
      <Typography variant="caption" color="text.secondary">
        By entering your information above and clicking the `&quot;`Agree and
        Submit`&quot;` button, you agree that we may contact you via the email
        address provided in this form.
      </Typography>
    </FormCard>
  );
}

export default SupportForm;
