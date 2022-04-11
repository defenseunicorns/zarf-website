import { socialLinks } from '../assets/data/navLinks';
import { Box, IconButton, SxProps, Theme } from '@mui/material';
import React, { ReactElement } from 'react';
import { GitHub } from '@mui/icons-material';
import Slack from '../assets/png/slack.png';
interface SocialLinksProps {
  slackSx?: SxProps<Theme>;
  githubSx?: SxProps<Theme>;
}

function SocialLinks({ slackSx, githubSx }: SocialLinksProps): ReactElement {
  return (
    <>
      <IconButton
        sx={slackSx}
        href={socialLinks['slack'].url}
        title={socialLinks['slack'].title}
        target={socialLinks['slack'].target}
        rel={socialLinks['slack'].rel}
      >
        <Box component="img" src={Slack} />
      </IconButton>
      <IconButton
        sx={githubSx}
        href={socialLinks['github'].url}
        title={socialLinks['github'].title}
        target={socialLinks['github'].target}
        rel={socialLinks['github'].rel}
      >
        <GitHub></GitHub>
      </IconButton>
    </>
  );
}

export default SocialLinks;
