import '../assets/css/global.css';
import '../assets/css/blobz.min.css';
import ZarfNav from './NavBar/ZarfNav';
import React, { ReactElement, PropsWithChildren, ReactNode } from 'react';

function PageLayout(props: PropsWithChildren<ReactNode>): ReactElement {
  return (
    <>
      <ZarfNav />
      {props.children}
    </>
  );
}

export default PageLayout;
