import React, { ReactElement, PropsWithChildren, ReactNode } from 'react';
import ZarfNav from './NavBar/ZarfNav';

function PageLayout(props: PropsWithChildren<ReactNode>): ReactElement {
  return (
    <>
      <ZarfNav />
      {props.children}
    </>
  );
}

export default PageLayout;
