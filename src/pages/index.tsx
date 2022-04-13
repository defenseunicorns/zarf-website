import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React, { ReactElement } from 'react';
import HeroBlob from '../assets/svg/hero-blob.svg';
const BlobContainer = styled(Box)`
  position: absolute;
  left: -55%;
  top: 0;
  --time: 40s;
  --amount: 1;
`;

export default function Index(): ReactElement {
  return (
    <>
      <BlobContainer className="tk-blob">
        <HeroBlob />
      </BlobContainer>
    </>
  );
}
