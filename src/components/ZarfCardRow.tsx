import ZarfCard, { ZarfCardProps } from './ZarfCard';
import { Box, SxProps, Theme } from '@mui/material';
import React, { ReactElement } from 'react';

export interface ZarfCardRowProps {
  cards: ZarfCardProps[];
}

const cardRowSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  justifyContent: 'center',
  alignItems: 'center',
  gap: { xs: '50px', sm: '25px', md: '50px' },
  width: { xs: '100%', lg: '80%', xl: '65%' },
  mx: 'auto',
};

function ZarfCardRow({ cards }: ZarfCardRowProps): ReactElement {
  return (
    <Box sx={cardRowSx}>
      {cards.map(
        (c: ZarfCardProps, index: number): ReactElement => (
          <ZarfCard key={`zarfcard-${index}`} {...c} />
        ),
      )}
    </Box>
  );
}

export default ZarfCardRow;
