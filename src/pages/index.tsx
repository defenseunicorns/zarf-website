import React, { ReactElement } from 'react';
import { heroProps } from '../assets/data/heroProps';
import Hero from '../components/Hero/Hero';

function index(): ReactElement {
  return <Hero {...heroProps.home} />;
}

export default index;
