import React, { ReactElement } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ZarfBubbles from '../assets/images/zarfBubbles.png';
import ComingSoonBG from '../assets/images/comingSoonBg.png';
import Typography from '@mui/material/Typography';

// styles
const backgroundStyles = {
  backgroundImage: `url(${ComingSoonBG})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center'
};

// markup
function ComingSoon(): ReactElement {
  return (
    <Box style={backgroundStyles}>
      <title>Coming Soon!</title>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh'
          }}
        >
          <Box
            sx={{
              width: { xs: '90%', sm: '55%', md: '50%' },
              height: '50%',
              marginLeft: 'auto',
              marginRight: 'auto',
              paddingTop: '2%'
            }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{
                flexGrow: 1,
                fontFamily: 'roboto',
                fontSize: { xs: '18px', md: '24px' },
                fontWeight: { xs: 'regular', md: 'medium' }
              }}
              gutterBottom
            >
              OPEN SOURCE PROJECT
            </Typography>
            <Typography
              variant="h1"
              component="div"
              sx={{
                flexGrow: 1,
                fontSize: { xs: '48px', md: '64px' },
                paddingTop: '20px'
              }}
            >
              Website
            </Typography>
            <Typography
              variant="h1"
              component="div"
              sx={{
                flexGrow: 1,
                fontSize: { xs: '48px', md: '64px' },
                paddingBottom: '20px'
              }}
              gutterBottom
            >
              Coming Soon!
            </Typography>
            <Button
              variant="rounded"
              size="medium"
              href="https://github.com/defenseunicorns/zarf"
              sx={{
                width: { lg: '170px' },
                heigh: { lg: '45px' }
              }}
            >
              View on Github
            </Button>
          </Box>
          <Box
            sx={{
              width: { xs: '80%', md: '50%' },
              height: '50%',
              backgroundImage: `url(${ZarfBubbles})`,
              backgroundSize: { xs: 'contain', md: '65%' },
              backgroundPosition: 'top',
              backgroundRepeat: 'no-repeat'
            }}
          ></Box>
        </Box>
      </Container>
    </Box>
  );
}

export default ComingSoon;
