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
        Use Zarf To
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: { xs: '50px', sm: '25px', md: '50px' },
          width: { xs: '100%', lg: '80%', xl: '65%' },
          mx: 'auto',
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