import React, { ReactElement, PropsWithChildren, ReactNode } from 'react';
import getPathname from '../hooks/getPathname';
import ZarfNav from './NavBar/ZarfNav';
import SiteHelmet from './SiteHelmet';
import '../assets/css/blobz.min.css';
import { Box } from '@mui/material';
import '../assets/css/global.css';
import Footer from './Footer';

function PageLayout(props: PropsWithChildren<ReactNode>): ReactElement {
  const pathname = getPathname();
  return (
    <>
      <SiteHelmet />
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
