import { Box } from '@mui/material';
import React, { ReactElement } from 'react';
import { hideLarge, hideSmall } from '../../utils/display';
import ZarfLogo from '../../assets/svg/zarf-logo.svg';
import ZarfLogoSmall from '../../assets/svg/zarf-logo-small.svg';

function NavLogo(): ReactElement {
  return (
    <>
      <Box sx={hideSmall}>
        <ZarfLogo />
      </Box>
      <Box sx={hideLarge}>
        <ZarfLogoSmall />
      </Box>
    </>
  );
}

export default NavLogo;
