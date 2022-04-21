import React, { ReactElement } from 'react';
import { heroProps } from '../assets/data/heroProps';
import Hero from '../components/Hero/Hero';

function Slack(): ReactElement {
  return <Hero {...heroProps.slack} />;
}

export default Slack;
