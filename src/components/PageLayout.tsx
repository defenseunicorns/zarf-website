import Footer from './Footer';
import '../assets/css/global.css';
import { Box } from '@mui/material';
import '../assets/css/blobz.min.css';
import ZarfNav from './NavBar/ZarfNav';
import React, { ReactElement, PropsWithChildren, ReactNode } from 'react';
import getPathname from '../hooks/getPathname';

function PageLayout(props: PropsWithChildren<ReactNode>): ReactElement {
  const pathname = getPathname();
  return (
    <>
      <ZarfNav pathname={pathname} />
      <Box
        component="main"
        sx={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          gap: '72px',
        }}
      >
        {props.children}
        <Footer pathname={pathname} />
      </Box>
    </>
  );
}

export default PageLayout;
