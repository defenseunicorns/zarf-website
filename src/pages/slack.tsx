import { Box, Link, Typography } from '@mui/material';
import React, { ReactElement } from 'react';
import { heroProps } from '../assets/data/heroProps';
import Hero from '../components/Hero/Hero';

function Slack(): ReactElement {
  return (
    <>
      <Hero {...heroProps.slack} />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          my: { xs: '4.563rem', md: '5rem' },
        }}
      >
        <Typography sx={{ typography: { xs: 'h3', md: 'h2' } }}>
          How to Join
        </Typography>
        <Box sx={{ mx: { xs: '16px' } }}>
          <Typography variant="body1" marginTop="24px">
            1. Navigate to{' '}
            <Link href={heroProps.slack.buttonLink}>
              {heroProps.slack.buttonLink}
            </Link>
          </Typography>
          <Typography variant="body1">
            2. Sign in or create a slack account
          </Typography>
          <Typography variant="body1">
            3. Find us on the following channels{' '}
            <Link href="https://kubernetes.slack.com/archives/C03B6BJAUJ3">
              #zarf
            </Link>
            ,{' '}
            <Link href="https://kubernetes.slack.com/archives/C03BP9Z3CMA">
              #zarf-dev
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Slack;
