import Hero from '../components/Hero/Hero';
import React, { ReactElement } from 'react';
import PageLayout from '../components/PageLayout';
import { heroProps } from '../assets/data/heroProps';
import HowZarfWorks from '../components/Sections/HowZarfWorks';
import AirplaneMode from '../components/Sections/AirplaneMode';
import { exampleCards } from '../assets/data/cardData';
import ExampleCard from '../components/ExampleCard';

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
    </PageLayout>
  );
}

export default index;
