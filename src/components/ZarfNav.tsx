import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import { createTabPropsFromNavLink } from '../utils/navLink';
import { hideSmall, hideLarge } from '../utils/display';
import { navLinks } from '../assets/data/navLinks';
import ZarfLogo from '../assets/png/zarf-logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import NavLink from '../interfaces/NavLink';
import SocialLinks from './SocialLinks';
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

type ZarfAppBarColor = 'inherit' | 'transparent';

const ZarfAppBar = styled(AppBar)`
  height: 5rem;
  max-width: 100vw;
  transition: all 0.5s ease-in;
`;

const TabWithHoverState = styled(Tab)`
  &:hover {
    background-color: ${palette.action?.hover};
  }
`;

function ZarfNav(): ReactElement {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [navColor, setNavColor] = useState<ZarfAppBarColor>('transparent');

  const toggleDrawer = useCallback(
    (state: boolean) => (): void => setShowDrawer(state),
    [setShowDrawer]
  );

  const windowScrolled = useCallback(
    (): void =>
      window.scrollY <= 80
        ? setNavColor('transparent')
        : setNavColor('inherit'),
    [setNavColor]
  );

  useEffect(() => {
    windowScrolled();
    window.addEventListener('scroll', windowScrolled);
    return () => window.removeEventListener('scroll', windowScrolled);
  }, [windowScrolled]);

  return (
    <>
      <ZarfAppBar position="sticky" color={navColor}>
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
                <TabWithHoverState
                  key={l.title}
                  {...createTabPropsFromNavLink(l, i)}
                  value={i}
                />
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
          open: showDrawer
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
