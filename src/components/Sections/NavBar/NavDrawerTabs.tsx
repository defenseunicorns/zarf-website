import { isLocalLink } from '../../../utils/navLink';
import { Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import palette from '../../../theme/palette';
import React, { ReactElement } from 'react';
import { Link as LocalLink } from 'gatsby';
import {
  TabUnstyled,
  TabsUnstyled,
  tabUnstyledClasses,
  TabUnstyledProps,
} from '@mui/base';

interface DrawerTabProps extends TabUnstyledProps {
  target?: string;
  label?: string;
  href: string;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: inherit;
`;

export function LocalDrawerTab(props: DrawerTabProps): ReactElement {
  return (
    <LocalLink
      to={props.href}
      style={{ textDecoration: 'none', width: '100%' }}
    >
      <StyledDrawerTab {...props}>
        <Typography
          variant="h5"
          color="inherit"
          width="100%"
          textAlign="center"
        >
          {props.label}
        </Typography>
      </StyledDrawerTab>
    </LocalLink>
  );
}

export function ExternalDrawerTab(props: DrawerTabProps): ReactElement {
  return (
    <Link
      sx={{ width: '100%' }}
      underline="none"
      href={props.href}
      target={props.target}
    >
      <StyledDrawerTab {...props}>
        <Typography
          variant="h5"
          color="inherit"
          width="100%"
          textAlign="center"
        >
          {props.label}
        </Typography>
      </StyledDrawerTab>
    </Link>
  );
}

function DrawerTab(props: DrawerTabProps): ReactElement {
  return isLocalLink(props.href) ? (
    <LocalDrawerTab {...props} />
  ) : (
    <ExternalDrawerTab {...props} />
  );
}

export default DrawerTab;
