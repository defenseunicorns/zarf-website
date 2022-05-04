import { whyUseZarfCards } from '../../assets/data/cardData';
import { Box, Typography } from '@mui/material';
import React, { ReactElement } from 'react';
import { ZarfCardProps } from '../ZarfCard';
import { chunk } from '../../utils/array';
import ZarfCardRow from '../ZarfCardRow';

const CARD_ROW_LENGTH = 3;

function WhyUseZarf(): ReactElement {
  return (
    <Box component="section">
      <Typography
        sx={{
          mb: '48px',
          typography: { xs: 'h3', md: 'h2' },
          textAlign: 'center',
        }}
      >
        Why Use Zarf
      </Typography>
      {chunk(whyUseZarfCards, CARD_ROW_LENGTH).map(
        (chunk: ZarfCardProps[], index: number): ReactElement => (
          <ZarfCardRow key={`cardrow-${index}`} cards={chunk} />
        ),
      )}
    </Box>
  );
}

export default WhyUseZarf;
