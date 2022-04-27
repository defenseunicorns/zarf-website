import '../assets/css/global.css';
import '../assets/css/blobz.min.css';
import ZarfNav from './NavBar/ZarfNav';
import React, { ReactElement, PropsWithChildren, ReactNode } from 'react';
import { Box } from '@mui/material';

function PageLayout(props: PropsWithChildren<ReactNode>): ReactElement {
  return (
    <>
      <ZarfNav />
      <Box
        component="main"
        sx={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          pb: { xs: '80px', md: '64px' },
          gap: '72px',
        }}
      >
        {props.children}
      </Box>
    </>
  );
}

export default PageLayout;
