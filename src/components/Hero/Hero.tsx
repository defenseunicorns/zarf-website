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
          minHeight: '75vh',
          display: 'flex',
          alignItems: 'center',
          mx: { xs: '32px', lg: '0px' },
          justifyContent: {
            xs: 'flex-start',
            md: 'space-around',
          },
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Box
          sx={{
            zIndex: 1,
            display: 'flex',
            maxWidth: '492px',
            flexDirection: 'column',
            my: { xs: '80px', md: '64px' },
          }}
        >
          <Typography
            sx={{
              typography: { xs: 'h2', lg: 'h1' },
            }}
            marginBottom={'32px'}
          >
            {props.header}
          </Typography>
          <Typography variant="h6" marginBottom={'32px'}>
            {props.body}
          </Typography>
          <FlexButton text={props.buttonText} url={props.buttonLink} />
        </Box>
        <Box
          component="img"
          src={props.image}
          sx={{
            width: { xs: '360px', md: '500px' },
            height: { xs: '302.4px', md: '439.23px' },
            mt: { xs: '80px', md: '0px' },
          }}
        />
      </Box>
    </>
  );
}

export default Hero;
