import React, { ReactElement } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ZarfBubbles from '../images/zarfBubbles.png';
import ComingSoonBG from '../images/comingSoonBg.png';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

// styles
const pageStyles = {
  color: 'white',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
  backgroundImage: `url(${ComingSoonBG})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
};

const RoundedButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.primary,
  borderRadius: '20px'
}));

// markup
function ComingSoon(): ReactElement {
  return (
    <Box
      style={pageStyles}
      sx={{
        width: '100vw',
        height: '100vh',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
    >
      <title>Coming Soon!</title>
      <Container maxWidth="lg" sx={{ paddingTop: '15%' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1 }}
              gutterBottom
            >
              OPEN SOURCE PROJECT
            </Typography>
            <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
              Website
            </Typography>
            <Typography
              variant="h1"
              component="div"
              sx={{ flexGrow: 1 }}
              gutterBottom
            >
              Coming Soon!
            </Typography>
            <RoundedButton
              variant="contained"
              size="medium"
              href="https://github.com/defenseunicorns/zarf"
            >
              View on Github
            </RoundedButton>
          </Grid>
          <Grid
            item
            xs={8}
            md={6}
            sx={{
              width: '50vw',
              height: '50vh',
              marginLeft: 'auto',
              marginRight: 'auto',
              backgroundImage: `url(${ZarfBubbles})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ComingSoon;
