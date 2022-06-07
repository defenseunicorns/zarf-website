import ComingSoonBG from '../assets/png/coming-soon-bg.png';
import ZarfBubbles from '../assets/png/zarf-bubbles.png';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import React, { ReactElement } from 'react';
import { styled } from '@mui/material';
import ButtonLink from './ButtonLink';
import Box from '@mui/material/Box';

const ReroutePageBackdrop = styled(Box)`
  background-image: url(${ComingSoonBG});
  background-size: cover;
  display: flex;
  align-items: center;
  height: 100vh;
  top: 0;
  left: 0;
  position: absolute;
  width: 100vw;
`;

const TypoRoboto = styled(Typography)`
  font-family: 'Roboto';
`;

export interface ReroutePageProps {
  title: string;
  topLine?: string;
  middleLine?: string;
  bottomLine?: string;
  buttonText: string;
  buttonLink: string;
}

// markup
function ReroutePage(props: ReroutePageProps): ReactElement {
  return (
    <ReroutePageBackdrop
      sx={{
        backgroundPositionX: { xs: '22%', sm: '15%', md: 'center' },
      }}
    >
      <title>{props.title}</title>
      <Container
        sx={{
          width: '100%',
          height: { xs: '100vh', md: '50vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'center', md: 'space-around' },
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Box sx={{ pb: { xs: '40px', md: 0 } }}>
          <TypoRoboto
            sx={{
              typography: { xs: 'body1', md: 'h5' },
              textTransform: 'uppercase',
            }}
            gutterBottom
          >
            {props.topLine}
          </TypoRoboto>
          <Typography
            sx={{
              typography: { xs: 'h2', md: 'h1' },
              pt: '20px',
              textTransform: 'capitalize',
            }}
          >
            {props.middleLine}
          </Typography>
          <Typography
            sx={{
              typography: { xs: 'h2', md: 'h1' },
              textTransform: 'capitalize',
            }}
            gutterBottom
          >
            {props.bottomLine}
          </Typography>
          <ButtonLink url={props.buttonLink} text={props.buttonText} />
        </Box>
        <Box
          component="img"
          src={ZarfBubbles}
          sx={{
            height: { xs: '240px', md: '320px' },
            width: { xs: '240px', md: '320px' },
          }}
        />
      </Container>
    </ReroutePageBackdrop>
  );
}

export default ReroutePage;
