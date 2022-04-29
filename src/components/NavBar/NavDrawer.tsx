import NavLink from '../../interfaces/NavLink';
import CloseIcon from '@mui/icons-material/Close';
import DrawerTab, { DrawerTabs } from './NavDrawerTabs';
import { PathOptional } from '../../interfaces/Pathname';
import React, { PropsWithChildren, ReactElement } from 'react';
import { Drawer, IconButton, DrawerProps } from '@mui/material';
import { createTabPropsFromNavLink } from '../../utils/navLink';

export interface NavDrawerProps extends PathOptional {
  drawerProps?: DrawerProps;
  closeDrawer: () => void;
  navLinks: NavLink[];
}

// Extends the Drawer props so that defaults may still be used.
function NavDrawer({
  children,
  drawerProps,
  closeDrawer,
  navLinks,
  pathname,
}: PropsWithChildren<NavDrawerProps>): ReactElement {
  // Use the closeDrawer props if no onClose method passed to drawer
  const onClose = (drawerProps && drawerProps.onClose) || closeDrawer;

  return (
    <Drawer {...drawerProps} onClose={onClose}>
      <IconButton
        color="inherit"
        sx={{
          mt: '1.563rem',
          mb: '1.063rem',
          ml: '1.813rem',
          width: '3rem',
          height: '3rem',
          justifyContent: 'center',
        }}
        onClick={closeDrawer}
      >
        <CloseIcon />
      </IconButton>
      <DrawerTabs value={pathname}>
        {navLinks.map((l: NavLink, i: number) => (
          <DrawerTab
            aria-selected={true}
            key={l.text}
            {...createTabPropsFromNavLink(l, i)}
          />
        ))}
      </DrawerTabs>
      {children}
    </Drawer>
  );
}

export default NavDrawer;
