import ZarfCard from '../ZarfCard';
import React, { ReactElement } from 'react';
import { Box, Typography } from '@mui/material';
import { howZarfWorksCards } from '../../assets/data/cardData';

function HowZarfWorks(): ReactElement {
  return (
    <Box component="section">
      <Typography
        textAlign="center"
        sx={{ mb: '48px', typography: { xs: 'h3', md: 'h2' } }}
      >
        How Zarf Works
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-around',
          alignItems: 'center',
          gap: '50px',
        }}
      >
        {howZarfWorksCards.map(
          (c, i): ReactElement => (
            <ZarfCard key={i} {...c} />
          ),
        )}
      </Box>
    </Box>
  );
}

export default HowZarfWorks;
