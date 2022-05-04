import { Link as GatsbyLink } from 'gatsby';
import React, { ReactElement } from 'react';
import Slack from '../assets/svg/slack.svg';
import { GitHub } from '@mui/icons-material';
import { socialLinks } from '../assets/data/navLinks';
import { PathOptional } from '../interfaces/Pathname';
import { IconButton, SxProps, Theme } from '@mui/material';
import SlackSelected from '../assets/svg/slack-selected.svg';

interface SocialLinksProps extends PathOptional {
  slackSx?: SxProps<Theme>;
  githubSx?: SxProps<Theme>;
}

function SocialLinks({
  slackSx,
  githubSx,
  pathname,
}: SocialLinksProps): ReactElement {
  return (
    <>
      <GatsbyLink to={socialLinks.slack.url}>
        <IconButton
          size="medium"
          sx={{ ...slackSx, padding: '12px' }}
          title={socialLinks.slack.text}
        >
          {pathname === socialLinks.slack.url ? <SlackSelected /> : <Slack />}
        </IconButton>
      </GatsbyLink>
      <IconButton
        size="medium"
        sx={{ ...githubSx, padding: '12px' }}
        href={socialLinks.github.url}
        title={socialLinks.github.text}
        target={socialLinks.github.target}
        rel={socialLinks.github.rel}
      >
        <GitHub></GitHub>
      </IconButton>
    </>
  );
}

export default SocialLinks;
