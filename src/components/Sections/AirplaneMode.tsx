// import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import React, { ReactElement } from 'react';
import LargeBlob from '../LargeBlob';

const blobCaption = {
  title: 'Airplane Mode for the Cloud',
  body: 'Modern software assumes your systems have access to the internet. This may work for 99% of the world, but certain SECURE systems need to maintain capabilities while being disconnected from the internet. Zarf keeps your software running, no matter your connection status.',
};

function AirplaneMode(): ReactElement {
  return (
    <LargeBlob>
      <Typography
        sx={{
          typography: { xs: 'h3', md: 'h2' },
          mx: '10%',
        }}
      >
        {blobCaption.title}
      </Typography>
      <Typography
        variant="h6"
        fontFamily="Roboto"
        sx={{
          mx: { xs: '5%', md: '10%', lg: '15%', xl: '20%' },
          mt: '24px',
        }}
      >
        {blobCaption.body}
      </Typography>
    </LargeBlob>
  );
}

export default AirplaneMode;
