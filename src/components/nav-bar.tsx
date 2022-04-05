import { AppBar, Box, IconButton, styled } from '@mui/material';
import ZarfLogo from '../assets/png/zarf-logo.png';
const NavSection = styled(Box)({
  maxWidth: '50vw'
});

import React, { ReactElement } from 'react';
import { GitHub } from '@mui/icons-material';
function ZarfNav(): ReactElement {
  return (
    <AppBar
      position="sticky"
      sx={{
        height: '4rem',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
      color="primary"
    >
      <NavSection>
        <Box component="img" src={ZarfLogo} height="4rem" width="9.75rem" />
      </NavSection>
      <NavSection>
        <IconButton>
          <GitHub></GitHub>
        </IconButton>
      </NavSection>
    </AppBar>
  );
}

export default ZarfNav;
