import React, { ReactElement } from 'react';
import Blob from '../assets/svg/captioned-blob.svg';
import { Box, styled, Typography } from '@mui/material';

export interface CaptionedBlobProps {
  title?: string;
  body?: string;
}

const CaptionedBlobContainer = styled(Box)`
  width: 100vw;
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

function CaptionedBlob({ title, body }: CaptionedBlobProps): ReactElement {
  return (
    <CaptionedBlobContainer component="section">
      <Typography
        sx={{
          typography: { xs: 'h3', md: 'h2' },
          mx: '10%',
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h6"
        fontFamily="Roboto"
        sx={{
          mx: { xs: '5%', md: '10%', lg: '15%', xl: '20%' },
          mt: '24px',
        }}
      >
        {body}
      </Typography>
      <BlobContainer className="tk-blob-skew tk-blob-scale">
        <Blob height="90%" width="100%" preserveAspectRatio="none"></Blob>
      </BlobContainer>
    </CaptionedBlobContainer>
  );
}

export default CaptionedBlob;
