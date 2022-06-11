import { NavLinkTabProps } from '../../../interfaces/NavLink';
import { isLocalLink } from '../../../utils/navLink';
import { Link as GatsbyLink } from 'gatsby';
import React, { ReactElement } from 'react';
import { TabUnstyled } from '@mui/base';
import Tab from '@mui/material/Tab';

// MUI Tab Components are not matching the api and are not allowing component in tab to be passed.
// The unstyled component does not have this issue.
// So we are converting to the UnstyledTab return type in order to bypass this issue.
// https://github.com/mui/material-ui/issues/16846
// https://mui.com/material-ui/guides/routing/#tabs
const LocalTabWithHoverState = Tab as typeof TabUnstyled;

function InternalNavTab(props: NavLinkTabProps): ReactElement {
  return (
    <LocalTabWithHoverState
      component={GatsbyLink}
      {...props}
      to={props.href}
      partiallyActive={true}
    />
  );
}

function ExternalNavTab(props: NavLinkTabProps): ReactElement {
  return <Tab {...props} />;
}

function NavTab(props: NavLinkTabProps): ReactElement {
  return isLocalLink(props.href) ? (
    <InternalNavTab {...props} />
  ) : (
    <ExternalNavTab {...props} />
  );
}
export default NavTab;
