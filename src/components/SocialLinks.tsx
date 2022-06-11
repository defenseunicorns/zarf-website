import { Link as GatsbyLink } from 'gatsby';
import React, { ReactElement } from 'react';
import Slack from '../assets/svg/slack.svg';
import { GitHub } from '@mui/icons-material';
import { namedLinks } from '../assets/data/navLinks';
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
      <GatsbyLink to={namedLinks.slack.url}>
        <IconButton
          size="medium"
          sx={{ ...slackSx, padding: '12px' }}
          title={namedLinks.slack.text}
        >
          {pathname === namedLinks.slack.url ? <SlackSelected /> : <Slack />}
        </IconButton>
      </GatsbyLink>
      <IconButton
        size="medium"
        sx={{ ...githubSx, padding: '12px' }}
        href={namedLinks.github.url}
        title={namedLinks.github.text}
        target={namedLinks.github.target}
        rel={namedLinks.github.rel}
      >
        <GitHub></GitHub>
      </IconButton>
    </>
  );
}

export default SocialLinks;
