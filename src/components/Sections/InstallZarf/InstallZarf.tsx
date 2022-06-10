/* eslint-disable */
import { Typography, Divider, Box, styled, Link, Button } from '@mui/material';
import { createTabPropsFromNavLink } from '../../../utils/navLink';
import React, { ReactElement, useEffect, useState } from 'react';
import { namedLinks } from '../../../assets/data/navLinks';
import CodeContainer from './CodeContainer';
import { getInstallCommand, getUserOs } from './utils';
import LargeBlob from '../../LargeBlob';
import OsLink from './OsLink';
import { OS } from './types';

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
      <Typography
        sx={{ typography: { xs: 'h3', md: 'h2' } }}
        marginBottom={'24px'}
        paddingX={'24px'}
      >
        Install Zarf
      </Typography>
      <Typography
        variant="h6"
        fontFamily={'Roboto'}
        marginBottom={'24px'}
        paddingX={'24px'}
      >
        Select the operating system you are using then copy and paste the
        following command into your terminal.
      </Typography>
      <LinkContainer marginBottom={'24px'}>
        <OsLink os={OS.mac} selectedOs={os} setSelected={setOs} />
        <Divider orientation="vertical" flexItem color="white"></Divider>
        <OsLink os={OS.linux} selectedOs={os} setSelected={setOs} />
      </LinkContainer>
      <CodeContainer command={command} />
      <Typography
        variant="body2"
        fontFamily={'Roboto'}
        marginTop={'24px'}
        paddingX={'24px'}
      >
        For more more detailed installation instructions - check out our{' '}
        <Link
          underline="hover"
          {...createTabPropsFromNavLink(namedLinks.gettingStarted)}
        >
          {namedLinks.gettingStarted.text} Doc.
        </Link>
      </Typography>
      <Button
        {...createTabPropsFromNavLink(namedLinks.userGuide)}
        variant="contained"
        sx={{ mt: '27px' }}
      >
        View Documentation
      </Button>
    </LargeBlob>
  );
}

export default InstallZarf;
