import { exampleCards } from '../../assets/data/cardData';
import React, { ReactElement } from 'react';
import ExampleCard from '../ExampleCard';

function Examples(): ReactElement {
  return (
    <>
      {exampleCards.map(
        (c, i): ReactElement => (
          <ExampleCard {...c} key={i} />
        ),
      )}
    </>
  );
}

export default Examples;
