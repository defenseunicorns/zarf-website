import Footer from './Footer';
import '../assets/css/global.css';
import { Box } from '@mui/material';
import '../assets/css/blobz.min.css';
import ZarfNav from './NavBar/ZarfNav';
import React, { ReactElement, PropsWithChildren, ReactNode } from 'react';
import getPathname from '../hooks/getPathname';
import MaintainedBy from './Sections/MaintainedBy';
import SiteHelmet from './SiteHelmet';

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
        <MaintainedBy />
        <Footer pathname={pathname} />
      </Box>
    </>
  );
}

export default PageLayout;
