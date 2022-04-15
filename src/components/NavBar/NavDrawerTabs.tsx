import {
  TabUnstyled,
  TabsUnstyled,
  tabUnstyledClasses,
  TabUnstyledProps
} from '@mui/base';
import { Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { ReactElement } from 'react';
import palette from '../../theme/palette';

interface DrawerTabProps extends TabUnstyledProps {
  target?: string;
  label?: string;
}

const StyledDrawerTab = styled(TabUnstyled)`
  cursor: pointer;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  display: flex;
  color: ${palette.text?.secondary};
  justify-content: center;
  &:hover {
    background-color: ${palette.action?.hover};
  }

  &.${tabUnstyledClasses.selected} {
    border-bottom: 2px solid ${palette.primary?.main};
    color: ${palette.primary?.main} !important;
  }
`;

export const DrawerTabs = styled(TabsUnstyled)`
  min-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: inherit;
`;

export function DrawerTab(props: DrawerTabProps): ReactElement {
  return (
    <Link
      sx={{ width: '100%' }}
      underline="none"
      href={props.href}
      target={props.target}
    >
      <StyledDrawerTab {...props}>
        <Typography variant="h5" color="inherit">
          {props.label}
        </Typography>
      </StyledDrawerTab>
    </Link>
  );
}
