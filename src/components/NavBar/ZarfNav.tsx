import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import { createTabPropsFromNavLink } from '../../utils/navLink';
import { hideSmall, hideLarge } from '../../utils/display';
import { navLinks } from '../../assets/data/navLinks';
import MenuIcon from '@mui/icons-material/Menu';
import NavLink from '../../interfaces/NavLink';
import SocialLinks from '../SocialLinks';
import palette from '../../theme/palette';
import NavDrawer from './NavDrawer';
import NavLogo from './NavLogo';
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

const DEFAULT_ELEVATION = 1;
const TRANSPARENT_ELEVATION = 0;
const ZarfAppBar = styled(AppBar)`
  width: 100vw;
  transition: all 0.5s ease-in;
`;
const TabWithHoverState = styled(Tab)`
  &:hover {
    background-color: ${palette.action?.hover};
  }
`;

function ZarfNav(): ReactElement {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [navElevation, setNavElevation] = useState<number>(
    TRANSPARENT_ELEVATION
  );
  const [navColor, setNavColor] = useState<ZarfAppBarColor>('transparent');

  const toggleDrawer = useCallback(
    (state: boolean) => (): void => setShowDrawer(state),
    [setShowDrawer]
  );

  const windowScrolled = useCallback((): void => {
    if (window.scrollY <= 80) {
      setNavColor('transparent');
      setNavElevation(TRANSPARENT_ELEVATION);
    } else {
      setNavColor('inherit');
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
        position="sticky"
        color={navColor}
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
