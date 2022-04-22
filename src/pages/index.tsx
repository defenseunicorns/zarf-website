import React, { ReactElement } from 'react';
import { heroProps } from '../assets/data/heroProps';
import Hero from '../components/Hero/Hero';
import PageLayout from '../components/PageLayout';

function index(): ReactElement {
  return (
    <PageLayout>
      <Hero {...heroProps.home} />
    </PageLayout>
  );
}

export default index;
