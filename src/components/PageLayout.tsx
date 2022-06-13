import React, { ReactElement, PropsWithChildren } from 'react';
import ZarfNav from './Sections/NavBar/ZarfNav';
import getPathname from '../hooks/getPathname';
import '@fontsource/m-plus-rounded-1c/500.css';
import '@fontsource/m-plus-rounded-1c/400.css';
import Footer from './Sections/Footer';
import SiteHelmet from './SiteHelmet';
import '../assets/css/blobz.min.css';
import { Box } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../assets/css/global.css';
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
