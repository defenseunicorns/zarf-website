import { hideLarge, hideSmall } from '../utils/display';
import React, { ReactElement } from 'react';
import Button from '@mui/material/Button';

type ButtonColor =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning'
  | undefined;

export interface FlexButtonProps {
  text: string;
  url: string;
  target?: string;
  color?: ButtonColor;
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
        color={props.color}
        rel={props.rel}
        sx={{ ...hideSmall, width: 'fit-content' }}
      >
        {props.text}
      </Button>
      <Button
        variant="contained"
        size="medium"
        href={props.url}
        target={props.target}
        color={props.color}
        rel={props.rel}
        sx={{
          ...hideLarge,
          width: 'fit-content',
        }}
      >
        {props.text}
      </Button>
    </>
  );
}

export default FlexButton;
