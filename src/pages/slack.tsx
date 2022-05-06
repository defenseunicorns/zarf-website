import { Box, Link, Typography } from '@mui/material';
import { heroProps } from '../assets/data/heroProps';
import PageLayout from '../components/PageLayout';
import React, { ReactElement } from 'react';
import Hero from '../components/Hero/Hero';

function Slack(): ReactElement {
  return (
    <PageLayout>
      <Hero {...heroProps.slack} />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          my: { xs: '73px', md: '80px' },
        }}
      >
        <Typography sx={{ typography: { xs: 'h3', md: 'h2' } }}>
          How to Join
        </Typography>
        <Box color={'text.secondary'} sx={{ mx: { xs: '16px' } }}>
          <Typography variant="body1" marginTop="24px">
            1. Navigate to{' '}
            <Link
              href={heroProps.slack.navLink.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {heroProps.slack.navLink.text}
            </Link>
          </Typography>
          <Typography variant="body1">
            2. Sign in or create a slack account
          </Typography>
          <Typography variant="body1">
            3. Find us on the following channels{' '}
            <Link
              href="https://kubernetes.slack.com/archives/C03B6BJAUJ3"
              target="_blank"
              rel="noopener noreferrer"
            >
              #zarf
            </Link>
            ,{' '}
            <Link
              href="https://kubernetes.slack.com/archives/C03BP9Z3CMA"
              target="_blank"
              rel="noopener noreferrer"
            >
              #zarf-dev
            </Link>
          </Typography>
        </Box>
      </Box>
    </PageLayout>
  );
}

export default Slack;
