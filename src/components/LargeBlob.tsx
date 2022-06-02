import React, { PropsWithChildren, ReactElement } from 'react';
import Blob from '../assets/svg/captioned-blob.svg';
import { Box, styled } from '@mui/material';

const LargeBlobContainer = styled(Box)`
  width: 100%;
  min-height: 640px;
  max-height: 640px;
  position: relative;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
` as typeof Box;

const BlobContainer = styled(Box)`
  --time: 40s;
  display: flex;
  z-index: -1;
  position: absolute;
  align-items: center;
  justify-content: center;
  height: 700px;
  min-height: 700px;
  max-height: 700px;
  min-width: 1084px;
` as typeof Box;

function LargeBlob({ children }: PropsWithChildren<unknown>): ReactElement {
  return (
    <LargeBlobContainer component="section">
      {children}
      <BlobContainer className="tk-blob-skew tk-blob-scale">
        <Blob height="90%" width="100%" preserveAspectRatio="none"></Blob>
      </BlobContainer>
    </LargeBlobContainer>
  );
}

export default LargeBlob;
