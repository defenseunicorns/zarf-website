import { OS } from './types';
import ButtonLink from '../../ButtonLink';
import BashContainer from '../../BashContainer';
import { getInstallCommand, getUserOs } from './utils';
import { Typography, Box, styled } from '@mui/material';
import { namedLinks } from '../../../assets/data/navLinks';
import React, { ReactElement, useEffect, useState } from 'react';

const InstallContainer = styled(Box)`
  display: flex;
  gap: 24px;
  align-self: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 24px 0 24px;
`;

function TryItNow(): ReactElement {
  const [os, setOs] = useState<OS>(OS.mac);
  const [command, setCommand] = useState<string[] | string>(
    getInstallCommand(os),
  );

  useEffect(() => {
    setOs(getUserOs(navigator));
  }, []);

  useEffect(() => {
    setCommand(getInstallCommand(os));
  }, [os]);

  return (
    <InstallContainer sx={{ width: { xs: '100%', md: '732px' } }}>
      <Typography sx={{ typography: { xs: 'h3', md: 'h2' } }}>
        Try It Now
      </Typography>
      <Typography
        variant="h6"
        fontFamily={'Roboto'}
        color="text.secondary"
        whiteSpace="pre-wrap"
      >
        You are ready to deploy code in AirGap.{'\n'}Copy the following commands
        to get started!
      </Typography>
      <BashContainer command={command} />
      <ButtonLink
        {...namedLinks.gettingStarted}
        color="secondary"
        text={'View Documentation'}
      />
    </InstallContainer>
  );
}

export default TryItNow;
