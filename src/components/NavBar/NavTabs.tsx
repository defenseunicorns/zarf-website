import { TabUnstyledTypeMap } from '@mui/base/TabUnstyled/TabUnstyledProps';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { NavLinkTabProps } from '../../interfaces/NavLink';
import { Link as LocalLink } from '@reach/router';
import { isLocalLink } from '../../utils/navLink';
import React, { ReactElement } from 'react';
import palette from '../../theme/palette';
import styled from '@emotion/styled';
import Tab from '@mui/material/Tab';

const TabWithHoverState = styled(Tab)`
  &:hover {
    background-color: ${palette.action?.hover};
  }
`;

// MUI Tab Components are not matching the api and are not allowing component in tab to be passed.
// The unstyled component does not have this issue.
// So we are converting to the UnstyledTab return type in order to bypass this issue.
// https://github.com/mui/material-ui/issues/16846
// https://mui.com/material-ui/guides/routing/#tabs
const LocalTabWithHoverState =
  TabWithHoverState as unknown as OverridableComponent<
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    TabUnstyledTypeMap<Record<string, any>, 'button'>
  >;

function InternalNavTab(props: NavLinkTabProps): ReactElement {
  return (
    <LocalTabWithHoverState component={LocalLink} {...props} to={props.href} />
  );
}

function ExternalNavTab(props: NavLinkTabProps): ReactElement {
  return <TabWithHoverState {...props} />;
}

function NavTab(props: NavLinkTabProps): ReactElement {
  return isLocalLink(props.href) ? (
    <InternalNavTab {...props} />
  ) : (
    <ExternalNavTab {...props} />
  );
}
export default NavTab;
