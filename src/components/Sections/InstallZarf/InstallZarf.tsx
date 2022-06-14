import { OS } from './types';
import LargeBlob from '../../LargeBlob';
import BashContainer from '../BashContainer';
import { getInstallCommand } from './utils';
import React, { ReactElement } from 'react';
import { namedLinks } from '../../../assets/data/navLinks';
import { Typography, Box, styled, Link } from '@mui/material';
import { createTabPropsFromNavLink } from '../../../utils/navLink';

const InstallContainer = styled(Box)`
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 0 24px 0 24px;
`;

function InstallZarf(): ReactElement {
  return (
    <LargeBlob>
      <InstallContainer sx={{ width: { xs: '100%', md: '732px' } }}>
        <Typography
          marginX={'auto'}
          sx={{ typography: { xs: 'h3', md: 'h2' } }}
        >
          Install Zarf
        </Typography>
        <Typography variant="h6" fontFamily={'Roboto'}>
          On macOS or Linux, you can easily install Zarf in your terminal by
          using{' '}
          <Link
            underline={'hover'}
            {...createTabPropsFromNavLink(namedLinks.homebrew)}
          >
            {namedLinks.homebrew.text}
          </Link>
          {'.'}
        </Typography>
        <BashContainer command={getInstallCommand(OS.brew)} />
        <Typography variant="body2">
          For more more detailed installation instructions - check out our{' '}
          <Link
            underline={'hover'}
            {...createTabPropsFromNavLink(namedLinks.gettingStarted)}
          >
            Getting Started Doc
          </Link>
          {'.'}
        </Typography>
      </InstallContainer>
    </LargeBlob>
  );
}

export default InstallZarf;
