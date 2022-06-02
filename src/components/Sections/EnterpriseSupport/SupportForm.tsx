import { clearQuery, postEnterpriseSupportForm } from './utils';
import { FormQuery, FieldType, TextFieldEvent } from './types';
import { Box, Button, Modal, Typography } from '@mui/material';
import React, { ReactElement, useEffect } from 'react';
import FormTextField from './FormTextField';
import styled from '@emotion/styled';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'qpx solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
};

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
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [modalText, setModalText] = React.useState<string>();

  const handleSubmit = React.useCallback(
    async (event): Promise<void> => {
      event.preventDefault();
      await postEnterpriseSupportForm(query, handleSuccess, handleFailure);
    },
    [query],
  );

  function handleSuccess(): void {
    setModalText('Thank you! Defense Unicorns will be reaching out soon.');
    setOpenModal(true);
    resetForm();
  }

  function handleFailure(): void {
    setModalText(
      'Oops. Something went wrong. Please refresh the page and try again',
    );
    setOpenModal(true);
  }

  function closeModal(): void {
    setOpenModal(false);
  }

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
      <Modal open={openModal} onClose={closeModal}>
        <Box sx={modalStyle}>
          <Typography variant="h5">{modalText}</Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={closeModal}
            sx={{ width: '50%' }}
          >
            Close
          </Button>
        </Box>
      </Modal>
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
