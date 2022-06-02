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
        variant="h2"
        sx={{
          fontWeight: 400,
        }}
      >
        Enterprise Support
      </Typography>
      <Typography variant="body1">
        Zarf will always be free software, but some missions are too important
        to only rely on a community of volunteers. For this, Defense Unicorns
        offers custom enterprise subscriptions, which may include:
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
