import ComingSoonBG from '../assets/images/comingSoonBg.png';
import ZarfBubbles from '../assets/images/zarfBubbles.png';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import React, { ReactElement } from 'react';
import Button from '@mui/material/Button';
import { Backdrop, styled } from '@mui/material';
import Box from '@mui/material/Box';

const ComingSoonBackground = styled(Backdrop)`
  background-image: url(${ComingSoonBG});
  background-size: cover;

  display: flex;
  align-items: center;
`;

const TypoRoboto = styled(Typography)`
  font-family: 'Roboto';
`;

// markup
function ComingSoon(): ReactElement {
  return (
    <ComingSoonBackground
      open={true}
      sx={{
        backgroundPositionX: { xs: '22%', sm: '15%', md: 'center' }
      }}
    >
      <title>Coming Soon!</title>
      <Container
        sx={{
          width: '100%',
          height: { xs: '100vh', md: '50vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'center', md: 'space-around' },
          flexDirection: { xs: 'column', md: 'row' }
        }}
      >
        <Box sx={{ pb: { xs: '2.5rem', md: 0 } }}>
          <TypoRoboto
            sx={{ typography: { xs: 'body1', md: 'h5' } }}
            gutterBottom
          >
            OPEN SOURCE PROJECT
          </TypoRoboto>
          <Typography
            sx={{
              typography: { xs: 'h2', md: 'h1' },
              pt: '20px'
            }}
          >
            Website
          </Typography>
          <Typography
            sx={{
              typography: { xs: 'h2', md: 'h1' }
            }}
            gutterBottom
          >
            Coming Soon!
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="https://github.com/defenseunicorns/zarf"
            sx={{ display: { xs: 'none', md: 'flex' }, width: '168px' }}
          >
            View on Github
          </Button>
          <Button
            variant="contained"
            size="medium"
            href="https://github.com/defenseunicorns/zarf"
            sx={{ display: { xs: 'flex', md: 'none' }, width: '147px' }}
          >
            View on Github
          </Button>
        </Box>
        <Box
          component="img"
          src={ZarfBubbles}
          sx={{
            height: { xs: '240px', md: '320px' },
            width: { xs: '240px', md: '320px' }
          }}
        />
      </Container>
    </ComingSoonBackground>
  );
}

export default ComingSoon;
