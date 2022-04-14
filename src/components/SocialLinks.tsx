import { socialLinks } from '../assets/data/navLinks';
import { IconButton, SxProps, Theme } from '@mui/material';
import React, { ReactElement } from 'react';
import { GitHub } from '@mui/icons-material';
import Slack from '../assets/svg/slack.svg';
interface SocialLinksProps {
  slackSx?: SxProps<Theme>;
  githubSx?: SxProps<Theme>;
}

function SocialLinks({ slackSx, githubSx }: SocialLinksProps): ReactElement {
  return (
    <>
      <IconButton
        size="medium"
        sx={{ ...slackSx, padding: '12px' }}
        href={socialLinks['slack'].url}
        title={socialLinks['slack'].title}
        target={socialLinks['slack'].target}
        rel={socialLinks['slack'].rel}
      >
        <Slack />
      </IconButton>
      <IconButton
        size="medium"
        sx={{ ...githubSx, padding: '12px' }}
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
