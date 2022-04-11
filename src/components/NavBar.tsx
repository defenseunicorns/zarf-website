import { createTabPropsFromNavLink } from '../utils/navLink';
import { hideSmall, hideLarge } from '../utils/display';
import React, { ReactElement, useState } from 'react';
import { navLinks } from '../assets/data/navLinks';
import ZarfLogo from '../assets/png/zarf-logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import NavLink from '../interfaces/NavLink';
import SocialLinks from './SocialIcons';
import palette from '../theme/palette';
import NavDrawer from './NavDrawer';
import {
  AppBar,
  Box,
  IconButton,
  Tabs,
  Toolbar,
  Tab,
  styled
} from '@mui/material';

const HoverTab = styled(Tab)`
  &:hover {
    background-color: ${palette.action?.hover};
  }
`;

function ZarfNav(): ReactElement {
  const [drawerOpen, openDrawer] = useState(false);

  function toggleDrawer(state: boolean): () => void {
    return (): void => openDrawer(state);
  }

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          height: '4rem',
          maxWidth: '100vw'
        }}
        color="inherit"
      >
        <Toolbar sx={{ flexGrow: 1, justifyContent: 'space-between' }}>
          {/* Mobile between xs and medium */}
          <IconButton
            size="large"
            aria-label="menu"
            color="inherit"
            sx={hideLarge}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="img"
            src={ZarfLogo}
            sx={{
              height: { xs: '2.5', md: '4rem' },
              width: { xs: '7.11rem', md: '9.75rem' }
            }}
          />
          <Box
            component="div"
            sx={{ flexDirection: 'row', width: 'fit-content', display: 'flex' }}
          >
            <Tabs value={0} aria-label="Navigation Tabs" sx={hideSmall}>
              {navLinks.map((l: NavLink, i: number) => (
                <HoverTab
                  key={l.title}
                  {...createTabPropsFromNavLink(l, i)}
                  value={i}
                />
              ))}
            </Tabs>
            <SocialLinks slackSx={hideSmall} />
          </Box>
        </Toolbar>
      </AppBar>
      <NavDrawer
        drawerProps={{
          anchor: 'left',
          variant: 'temporary',
          PaperProps: { sx: { width: { xs: '100%', sm: '65%' } } },
          open: drawerOpen
        }}
        closeDrawer={toggleDrawer(false)}
        navLinks={navLinks}
      >
        <Box
          component="div"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center'
          }}
        >
          <SocialLinks />
        </Box>
      </NavDrawer>
    </>
  );
}

export default ZarfNav;