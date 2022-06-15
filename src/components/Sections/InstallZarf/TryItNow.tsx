import { Typography, Divider, Box, styled } from '@mui/material';
import React, { ReactElement, useEffect, useState } from 'react';
import { namedLinks } from '../../../assets/data/navLinks';
import { getInstallCommand, getUserOs } from './utils';
import BashContainer from '../BashContainer';
import ButtonLink from '../../ButtonLink';
import OsLink from './OsLink';
import { OS } from './types';

const InstallContainer = styled(Box)`
  display: flex;
  gap: 24px;
  align-self: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 24px 0 24px;
`;

const LinkContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 10px;
` as typeof Box;

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
        to get started zarfing!
      </Typography>

      <LinkContainer>
        <OsLink os={OS.mac} selectedOs={os} setSelected={setOs} />
        <Divider
          orientation="vertical"
          flexItem
          color="white"
          variant="middle"
        />
        <OsLink os={OS.linux} selectedOs={os} setSelected={setOs} />
      </LinkContainer>
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
