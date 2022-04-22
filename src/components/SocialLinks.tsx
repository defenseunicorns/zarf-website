import { IconButton, SxProps, Theme } from '@mui/material';
import { socialLinks } from '../assets/data/navLinks';
import { Link as GatsbyLink } from 'gatsby';
import { GitHub } from '@mui/icons-material';
import React, { ReactElement } from 'react';
import Slack from '../assets/svg/slack.svg';
import SlackSelected from '../assets/svg/slack-selected.svg';

interface SocialLinksProps {
  slackSx?: SxProps<Theme>;
  githubSx?: SxProps<Theme>;
  pathname?: string;
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
          title={socialLinks.slack.title}
        >
          {pathname === socialLinks.slack.url ? <SlackSelected /> : <Slack />}
        </IconButton>
      </GatsbyLink>
      <IconButton
        size="medium"
        sx={{ ...githubSx, padding: '12px' }}
        href={socialLinks.github.url}
        title={socialLinks.github.title}
        target={socialLinks.github.target}
        rel={socialLinks.github.rel}
      >
        <GitHub></GitHub>
      </IconButton>
    </>
  );
}

export default SocialLinks;
