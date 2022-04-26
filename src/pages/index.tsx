import Hero from '../components/Hero/Hero';
import React, { ReactElement } from 'react';
import PageLayout from '../components/PageLayout';
import { heroProps } from '../assets/data/heroProps';
import HowZarfWorks from '../components/Sections/HowZarfWorks';

function index(): ReactElement {
  return (
    <PageLayout>
      <Hero {...heroProps.home} />
      <HowZarfWorks />
    </PageLayout>
  );
}

export default index;
