// import { Box } from '@mui/material';
import React, { ReactElement } from 'react';
import CaptionedBlob, { CaptionedBlobProps } from '../CaptionedBlob';

const blobCaption: CaptionedBlobProps = {
  title: 'Airplane Mode for the Cloud',
  body: 'Modern software assumes your systems have access to the internet. This may work for 99% of the world, but certain SECURE systems need to maintain capabilities while being disconnected from the internet. Zarf keeps your software running, no matter your connection status.',
};

function AirplaneMode(): ReactElement {
  return <CaptionedBlob {...blobCaption} />;
}

export default AirplaneMode;
