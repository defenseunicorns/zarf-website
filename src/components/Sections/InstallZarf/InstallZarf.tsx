import { Typography, Divider, Box, styled, Link } from '@mui/material';
import { createTabPropsFromNavLink } from '../../../utils/navLink';
import React, { ReactElement, useEffect, useState } from 'react';
import { namedLinks } from '../../../assets/data/navLinks';
import { getInstallCommand, getUserOs } from './utils';
import CodeContainer from './CodeContainer';
import ButtonLink from '../../ButtonLink';
import LargeBlob from '../../LargeBlob';
import OsLink from './OsLink';
import { OS } from './types';

const InstallContainer = styled(Box)`
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: center;
  text-align: left;
  padding: 0 24px 0 24px;
`;

const LinkContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 10px;
` as typeof Box;

function InstallZarf(): ReactElement {
  const [os, setOs] = useState<OS>(OS.mac);
  const [command, setCommand] = useState<string>(getInstallCommand(os));

  useEffect(() => {
    setOs(getUserOs(navigator));
  }, []);

  useEffect(() => {
    setCommand(getInstallCommand(os));
  }, [os]);

  return (
    <LargeBlob>
      <InstallContainer sx={{ width: { xs: '100%', md: '732px' } }}>
        <Typography sx={{ typography: { xs: 'h3', md: 'h2' } }}>
          Install Zarf
        </Typography>
        <Typography variant="h6" fontFamily={'Roboto'}>
          Select the operating system you are using then copy and paste the
          following command into your terminal.
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
        <CodeContainer command={command} />
        <Typography variant="body2" fontFamily={'Roboto'}>
          For more more detailed installation instructions - check out our{' '}
          <Link
            underline="hover"
            {...createTabPropsFromNavLink(namedLinks.gettingStarted)}
          >
            {namedLinks.gettingStarted.text} Doc.
          </Link>
        </Typography>
        <ButtonLink {...namedLinks.userGuide} text={'View Documentation'} />
      </InstallContainer>
    </LargeBlob>
  );
}

export default InstallZarf;
