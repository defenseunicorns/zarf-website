import { Typography, Box } from '@mui/material';
import React, { ReactElement } from 'react';

function HowSupportHelps(): ReactElement {
  const bullets = [
    'Custom Zarf package development & maintenance',
    'Prioritized feature development',
    'Prioritized bug fixes/troubleshooting',
    'General deployment support',
  ];
  return (
    <>
      <Typography
        marginBottom={'32px'}
        sx={{
          typography: { xs: 'h2', md: 'h1' },
        }}
      >
        Enterprise Support
      </Typography>
      <Typography variant="h6">
        Zarf will always be free software, but some missions are too important
        to only rely on a community of volunteers. Defense Unicorns offers
        custom enterprise subscriptions, which may include:
      </Typography>
      <Box component={'ul'}>
        {bullets.map(b => (
          <Typography key={b} component="li" variant="body1">
            {b}
          </Typography>
        ))}
      </Box>
    </>
  );
}

export default HowSupportHelps;
