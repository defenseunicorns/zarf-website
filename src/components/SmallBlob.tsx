import BlobSm from '../assets/svg/maintained-by-sm-blob.svg';
import { Box, styled } from '@mui/material';
import Blob from '../assets/svg/maintained-by-blob.svg';
import { hideLarge, hideSmall } from '../utils/display';
import React, { PropsWithChildren, ReactElement } from 'react';

const ChildSection = styled(Box)`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  position: relative;
  overflow: hidden;
` as typeof Box;

const BlobWrapper = styled(Box)`
  --time: 40s;
  z-index: -1;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
` as typeof Box;

function SmallBlob(props: PropsWithChildren<unknown>): ReactElement {
  return (
    <ChildSection
      component="section"
      sx={{
        height: { xs: '520px', md: '405px' },
        width: { xs: '100%', md: '735px' },
      }}
    >
      {props.children}
      <BlobWrapper className="tk-blob-skew tk-blob-scale" sx={hideSmall}>
        <Blob width="100%" height="100%" preserveAspectRatio="none" />
      </BlobWrapper>
      <BlobWrapper className="tk-blob-skew tk-blob-scale" sx={hideLarge}>
        <BlobSm width="100%" height="100%" preserveAspectRatio="none" />
      </BlobWrapper>
    </ChildSection>
  );
}

export default SmallBlob;
