import { howZarfWorksCards } from '../../assets/data/cardData';
import { Box, Typography } from '@mui/material';
import React, { ReactElement } from 'react';
import ZarfCardRow from '../ZarfCardRow';

function UseZarfTo(): ReactElement {
  return (
    <Box component="section">
      <Typography
        sx={{
          mb: '48px',
          typography: { xs: 'h3', md: 'h2' },
          textAlign: 'center',
        }}
      >
        Use Zarf To
      </Typography>
      <ZarfCardRow cards={howZarfWorksCards} />
    </Box>
  );
}

export default UseZarfTo;
