import ComingSoonBG from '../assets/images/comingSoonBg.png';
import ZarfBubbles from '../assets/images/zarfBubbles.png';
import Typography from '@mui/material/Typography';
import { Backdrop, styled } from '@mui/material';
import Container from '@mui/material/Container';
import React, { ReactElement } from 'react';
import FlexButton from './FlexButton';
import Box from '@mui/material/Box';

const ReroutePageBackdrop = styled(Backdrop)`
  background-image: url(${ComingSoonBG});
  background-size: cover;
  display: flex;
  align-items: center;
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
      open={true}
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
        <Box sx={{ pb: { xs: '2.5rem', md: 0 } }}>
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
          <FlexButton url={props.buttonLink} text={props.buttonText} />
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
