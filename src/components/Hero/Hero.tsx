import React, { ReactElement } from 'react';
import { Typography } from '@mui/material';
import FlexButton from '../FlexButton';
import { Box } from '@mui/system';
import HeroBlob from './HeroBlob';
import NavLink from '../../interfaces/NavLink';

export interface HeroProps {
  navLink: NavLink;
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
          justifyContent: 'space-around',
          flexDirection: { xs: 'column', md: 'row' },
          gap: '80px',
        }}
      >
        <Box
          sx={{
            zIndex: 1,
            display: 'flex',
            maxWidth: '492px',
            flexDirection: 'column',
            mt: { xs: '80px', md: '64px' },
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
          <Typography
            variant="h6"
            fontFamily={'Roboto'}
            color={'text.secondary'}
            marginBottom={'32px'}
          >
            {props.body}
          </Typography>
          <FlexButton {...props.navLink} />
        </Box>
        <Box
          component="img"
          src={props.image}
          sx={{
            width: { xs: '360px', md: '500px' },
            height: { xs: '302.4px', md: '439.23px' },
          }}
        />
      </Box>
    </>
  );
}

export default Hero;
