import React, { ReactElement, PropsWithChildren } from 'react';
import getPathname from '../hooks/getPathname';
import ZarfNav from './NavBar/ZarfNav';
import SiteHelmet from './SiteHelmet';
import '../assets/css/blobz.min.css';
import { Box } from '@mui/material';
import '../assets/css/global.css';
import Footer from './Footer';
import { SeoProps } from './seo';

export interface PageLayoutProps {
  seoProps?: SeoProps;
}

function PageLayout(props: PropsWithChildren<PageLayoutProps>): ReactElement {
  const pathname = getPathname();
  return (
    <>
      <SiteHelmet {...props.seoProps} route={pathname.replace('/', '')} />
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
