/* eslint-disable */
import { Typography, Divider, Box, styled, Link, Button } from '@mui/material';
import { createTabPropsFromNavLink } from '../../../utils/navLink';
import React, { ReactElement, useEffect, useState } from 'react';
import { socialLinks } from '../../../assets/data/navLinks';
import CodeContainer from './CodeContainer';
import { getInstallCommand } from './utils';
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
    setCommand(getInstallCommand(os));
  }, [os]);

  return (
    <LargeBlob>
      <Typography variant="h1" marginBottom={'24px'} paddingX={'24px'}>
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
      <LinkContainer marginBottom={'11px'}>
        <OsLink os={OS.mac} selectedOs={os} setSelected={setOs} />
        <Divider orientation="vertical" flexItem color="white"></Divider>
        <OsLink os={OS.linux} selectedOs={os} setSelected={setOs} />
      </LinkContainer>
      <CodeContainer command={command} />
      <Typography
        variant="h5"
        fontFamily={'Roboto'}
        marginTop={'24px'}
        paddingX={'24px'}
      >
        For more more detailed install options - check out the{' '}
        <Link
          underline="hover"
          {...createTabPropsFromNavLink(socialLinks.gettingStarted)}
        >
          {socialLinks.gettingStarted.text.toLocaleLowerCase()}
        </Link>{' '}
        docs.
      </Typography>
      <Button
        {...createTabPropsFromNavLink(socialLinks.userGuide)}
        variant="contained"
        sx={{ mt: '27px' }}
      >
        {socialLinks.userGuide.text}
      </Button>
    </LargeBlob>
  );
}

export default InstallZarf;
