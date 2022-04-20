import { AppBar, Box, IconButton, Tabs, Toolbar, styled } from '@mui/material';
import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import { createTabPropsFromNavLink } from '../../utils/navLink';
import { hideSmall, hideLarge } from '../../utils/display';
import { navLinks } from '../../assets/data/navLinks';
import MenuIcon from '@mui/icons-material/Menu';
import NavLink from '../../interfaces/NavLink';
import SocialLinks from '../SocialLinks';
import NavDrawer from './NavDrawer';
import NavLogo from './NavLogo';
import NavTab from './NavTabs';

const TRANSPARENT_ELEVATION = 0;
const TRANSITION_HEIGHT = 65;
const DEFAULT_ELEVATION = 1;

enum ZarfAppBarColor {
  SCROLLED = 'inherit',
  TOP = 'transparent',
}

const ZarfAppBar = styled(AppBar)`
  width: 100vw;
  transition: all 0.5s ease-in;
`;

function ZarfNav(): ReactElement {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [navElevation, setNavElevation] = useState<number>(
    TRANSPARENT_ELEVATION,
  );
  const [navColor, setNavColor] = useState<ZarfAppBarColor>(
    ZarfAppBarColor.TOP,
  );

  const toggleDrawer = useCallback(
    (state: boolean) => (): void => setShowDrawer(state),
    [setShowDrawer],
  );

  const windowScrolled = useCallback((): void => {
    if (window.scrollY <= TRANSITION_HEIGHT) {
      setNavColor(ZarfAppBarColor.TOP);
      setNavElevation(TRANSPARENT_ELEVATION);
    } else {
      setNavColor(ZarfAppBarColor.SCROLLED);
      setNavElevation(DEFAULT_ELEVATION);
    }
  }, [setNavColor]);

  useEffect(() => {
    windowScrolled();
    window.addEventListener('scroll', windowScrolled);
    return () => window.removeEventListener('scroll', windowScrolled);
  }, [windowScrolled]);

  return (
    <>
      <ZarfAppBar
        elevation={navElevation}
        color={navColor}
        position="sticky"
        sx={{ height: { xs: '4rem', md: '5rem' }, margin: 0 }}
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
          <NavLogo />
          <Box
            component="div"
            sx={{ flexDirection: 'row', width: 'fit-content', display: 'flex' }}
          >
            <Tabs value={0} aria-label="Navigation Tabs" sx={hideSmall}>
              {navLinks.map((l: NavLink, i: number) => (
                <NavTab key={i} {...createTabPropsFromNavLink(l, i)} />
              ))}
            </Tabs>
            <SocialLinks slackSx={hideSmall} />
          </Box>
        </Toolbar>
      </ZarfAppBar>
      <NavDrawer
        drawerProps={{
          anchor: 'left',
          variant: 'temporary',
          PaperProps: { sx: { width: { xs: '100%', sm: '65%' } } },
          open: showDrawer,
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
            justifyContent: 'center',
          }}
        >
          <SocialLinks />
        </Box>
      </NavDrawer>
    </>
  );
}

export default ZarfNav;
