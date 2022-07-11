import NavLink from '../../interfaces/NavLink';
import React, { ReactElement } from 'react';
import { Typography } from '@mui/material';
import ButtonLink from '../ButtonLink';
import { Box } from '@mui/system';
import HeroBlob from './HeroBlob';

export interface HeroProps {
  navLink?: NavLink;
  header?: string;
  image?: string;
  body?: string | ReactElement;
  rhsChild?: ReactElement;
  lhsChild?: ReactElement;
}

function Hero(props: HeroProps): ReactElement {
  return (
    <>
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
            mt: { xs: '54px', lg: '0px' },
            display: 'flex',
            maxWidth: '492px',
            flexDirection: 'column',
          }}
        >
          {props.header && (
            <Typography
              sx={{
                typography: { xs: 'h3', lg: 'h1' },
              }}
              marginBottom={'32px'}
            >
              {props.header}
            </Typography>
          )}
          {props.body && (
            <Typography
              variant="h6"
              fontFamily={'Roboto'}
              color={'text.secondary'}
              marginBottom={'32px'}
            >
              {props.body}
            </Typography>
          )}
          {props.lhsChild && props.lhsChild}
          {props.navLink && <ButtonLink {...props.navLink} />}
        </Box>
        {props.image && (
          <Box
            component="img"
            src={props.image}
            sx={{
              width: { xs: '360px', md: '500px' },
              height: { xs: '302.4px', md: '439.23px' },
            }}
            loading="lazy"
          />
        )}
        {props.rhsChild && props.rhsChild}
      </Box>
      <HeroBlob />
    </>
  );
}

export default Hero;
