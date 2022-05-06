import OpenSourceStats from '../components/Sections/OpenSourceStats/StatsCard';
import HowZarfWorks from '../components/Sections/HowZarfWorks';
import AirplaneMode from '../components/Sections/AirplaneMode';
import MaintainedBy from '../components/Sections/MaintainedBy';
import WhyUseZarf from '../components/Sections/WhyUseZarf';
import Examples from '../components/Sections/Examples';
import { heroProps } from '../assets/data/heroProps';
import PageLayout from '../components/PageLayout';
import React, { ReactElement } from 'react';
import Hero from '../components/Hero/Hero';

function index(): ReactElement {
  return (
    <PageLayout>
      <Hero {...heroProps.home} />
      <HowZarfWorks />
      <AirplaneMode />
      <Examples />
      <WhyUseZarf />
      <OpenSourceStats />
      <MaintainedBy />
    </PageLayout>
  );
}

export default index;
