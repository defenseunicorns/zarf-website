import ZarfNav from './Sections/NavBar/ZarfNav';
import getPathname from '../hooks/getPathname';
import Footer from './Sections/Footer';
import SiteHelmet from './SiteHelmet';
import Fade from '@mui/material/Fade';
import '../assets/css/blobz.min.css';
import { Box } from '@mui/material';
import '../assets/css/global.css';
import { SeoProps } from './seo';
import React, {
  ReactElement,
  PropsWithChildren,
  useState,
  useEffect,
} from 'react';

export interface PageLayoutProps {
  seoProps?: SeoProps;
}

function PageLayout(props: PropsWithChildren<PageLayoutProps>): ReactElement {
  const pathname = getPathname();
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timeout = setTimeout((): void => setFade(true), 500);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <>
      <SiteHelmet {...props.seoProps} route={pathname.replace('/', '')} />
      <ZarfNav pathname={pathname} />
      <Fade in={fade}>
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
      </Fade>
    </>
  );
}

export default PageLayout;
