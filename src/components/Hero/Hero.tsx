import React, { ReactElement } from 'react';
import { Typography } from '@mui/material';
import FlexButton from '../FlexButton';
import { Box } from '@mui/system';
import HeroBlob from './HeroBlob';

export interface HeroProps {
  buttonLink: string;
  buttonText: string;
  header: string;
  image: string;
  body: string;
}

function Hero(props: HeroProps): ReactElement {
  return (
    <>
      <HeroBlob />
      <Box
        className="wrap"
        sx={{
          height: { xs: '100vh', md: '75vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'flex-start', md: 'space-around' },
          flexDirection: { xs: 'column', md: 'row' },
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            zIndex: 1,
            display: 'flex',
            justifyItems: 'center',
            maxWidth: '492px',
            flexDirection: 'column',
            px: '17px',
            my: { xs: '80px', md: 0 },
          }}
        >
          <Typography
            sx={{
              typography: { xs: 'h2', md: 'h1' },
            }}
            marginBottom={'32px'}
          >
            {props.header}
          </Typography>
          <Typography variant="h6" marginBottom={'32px'}>
            {props.body}
          </Typography>
          <FlexButton text="VIEW ON GITHUB" url={props.buttonLink} />
        </Box>
        <Box
          component="img"
          src={props.image}
          sx={{
            width: { xs: '360px', md: '500px' },
            height: { xs: '302.4px', md: '439.23px' },
            zIndex: 1,
          }}
        />
      </Box>
    </>
  );
}

export default Hero;
