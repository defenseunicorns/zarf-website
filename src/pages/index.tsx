import Hero from '../components/Hero/Hero';
import React, { ReactElement } from 'react';
import PageLayout from '../components/PageLayout';
import { heroProps } from '../assets/data/heroProps';
import HowZarfWorks from '../components/Sections/HowZarfWorks';
import AirplaneMode from '../components/Sections/AirplaneMode';

function index(): ReactElement {
  return (
    <PageLayout>
      <Hero {...heroProps.home} />
      <HowZarfWorks />
      <AirplaneMode />
    </PageLayout>
  );
}

export default index;
