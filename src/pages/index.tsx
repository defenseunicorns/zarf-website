import HowZarfWorks from '../components/Sections/HowZarfWorks';
import AirplaneMode from '../components/Sections/AirplaneMode';
import { exampleCards } from '../assets/data/cardData';
import { heroProps } from '../assets/data/heroProps';
import ExampleCard from '../components/ExampleCard';
import PageLayout from '../components/PageLayout';
import StatsCard from '../components/StatsCard';
import React, { ReactElement } from 'react';
import Hero from '../components/Hero/Hero';

function index(): ReactElement {
  return (
    <PageLayout>
      <Hero {...heroProps.home} />
      <HowZarfWorks />
      <AirplaneMode />
      {exampleCards.map(
        (c, i): ReactElement => (
          <ExampleCard {...c} key={i} />
        ),
      )}
      <StatsCard />
    </PageLayout>
  );
}

export default index;
