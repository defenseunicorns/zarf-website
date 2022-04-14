import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import HeroBlobSvg from '../assets/svg/hero-blob.svg';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

class BlobCalculator implements BlobDimensions {
  private aspect = 0.6318591855790229;
  BLOB_SCREEN_WIDTH_PERCENTAGE = 0.9;
  BLOB_LEFT_PERCENTAGE = -0.34;
  BLOB_TOP_PERCENTAGE = -0.078;
  width = 0;
  height = 0;
  top = 0;
  left = 0;

  private constructor(private windowWidth: number) {}

  public static getDimensions(windowWidth: number): BlobDimensions {
    return new BlobCalculator(windowWidth)
      .calculateBlobWidth()
      .calculateBlobHeight()
      .calculateBlobTop()
      .calculateBlobLeft().dimensions;
  }

  get dimensions(): BlobDimensions {
    return {
      width: this.width,
      height: this.height,
      top: this.top,
      left: this.left
    };
  }

  calculateBlobWidth(): BlobCalculator {
    this.width = this.windowWidth - this.BLOB_SCREEN_WIDTH_PERCENTAGE;
    return this;
  }

  calculateBlobHeight(): BlobCalculator {
    this.height = this.width * this.aspect;
    console.log(this.height);
    return this;
  }

  calculateBlobTop(): BlobCalculator {
    this.top = this.height * this.BLOB_TOP_PERCENTAGE;
    return this;
  }

  calculateBlobLeft(): BlobCalculator {
    this.left = this.width * this.BLOB_LEFT_PERCENTAGE;
    return this;
  }
}

const BlobContainer = styled(Box)`
  --time: 40s;
`;

interface BlobDimensions {
  width: number;
  height: number;
  top: number;
  left: number;
}

function HeroBlob(): ReactElement {
  const [blobDimensions, setBlobDimensions] = useState<BlobDimensions>();

  const updateBlobDimensions = useCallback((): void => {
    const { innerWidth, innerHeight } = window;
    console.log(innerWidth, innerHeight);
    const dimension = BlobCalculator.getDimensions(
      document.documentElement.clientWidth
    );
    dimension.height =
      dimension.height > window.innerHeight
        ? window.innerHeight
        : dimension.height;
    setBlobDimensions(dimension);
    console.log(
      BlobCalculator.getDimensions(document.documentElement.clientWidth)
    );
  }, [setBlobDimensions]);

  useEffect(() => {
    updateBlobDimensions();
    window.addEventListener('resize', updateBlobDimensions);
    return (): void =>
      window.removeEventListener('resize', updateBlobDimensions);
  }, [updateBlobDimensions]);

  return (
    <BlobContainer
      className="tk-blob-skew "
      style={{
        top: blobDimensions?.top,
        left: blobDimensions?.left,
        position: 'absolute'
      }}
    >
      <HeroBlobSvg
        style={{
          width: blobDimensions?.width,
          height: blobDimensions?.height
        }}
      />
    </BlobContainer>
  );
}

export default HeroBlob;
