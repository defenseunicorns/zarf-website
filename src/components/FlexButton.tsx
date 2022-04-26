import React, { ReactElement } from 'react';
import Button from '@mui/material/Button';

export interface FlexButtonProps {
  text: string;
  url: string;
  target?: string;
  rel?: string;
}

function FlexButton(props: FlexButtonProps): ReactElement {
  return (
    <>
      <Button
        variant="contained"
        size="large"
        href={props.url}
        target={props.target}
        rel={props.rel}
        sx={{ display: { xs: 'none', md: 'flex' }, width: '168px' }}
      >
        {props.text}
      </Button>
      <Button
        variant="contained"
        size="medium"
        href={props.url}
        target={props.target}
        rel={props.rel}
        sx={{
          display: { xs: 'flex', md: 'none' },
          minWidth: '147px',
          maxWidth: '50vw',
        }}
      >
        {props.text}
      </Button>
    </>
  );
}

export default FlexButton;
