import ZarfLogoSmall from '../../../assets/svg/zarf-logo-small.svg';
import { hideLarge, hideSmall } from '../../../utils/display';
import ZarfLogo from '../../../assets/svg/zarf-logo.svg';
import React, { ReactElement } from 'react';
import { Box } from '@mui/material';
import { Link } from 'gatsby';

function NavLogo(): ReactElement {
  return (
    <Link to="/">
      <Box sx={hideSmall}>
        <ZarfLogo />
      </Box>
      <Box sx={hideLarge}>
        <ZarfLogoSmall />
      </Box>
    </Link>
  );
}

export default NavLogo;
