import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import HeroBlobSvg from '../../assets/svg/hero-blob.svg';
import { Box, styled } from '@mui/material';

interface BlobDimensions {
  width: number;
  height: number;
  top: number;
  left: number;
  mobileLeft: number;
  mobileTop: number;
}

class BlobCalculator implements BlobDimensions {
  private aspect = 0.6318591855790229;
  BLOB_SCREEN_WIDTH_PERCENTAGE = 0.9;
  BLOB_LEFT_PERCENTAGE = -0.273;
  BLOB_TOP_PERCENTAGE = -0.2;
  BLOB_MOBILE_TOP_PERCENTAGE = -0.3;
  width = 0;
  height = 0;
  top = 0;
  left = 0;
  mobileLeft = 0;
  mobileTop = 0;

  constructor(private windowWidth = 1440, private windowHeight = 1024) {
    this.calculateBlobWidth()
      .calculateBlobHeight()
      .adjustHeight()
      .calculateBlobTop()
      .calculateBlobLeft()
      .calculateBlobTopMobile();
  }

  get dimensions(): BlobDimensions {
    return {
      width: this.width,
      height: this.height,
      top: this.top,
      left: this.left,
      mobileLeft: this.mobileLeft,
      mobileTop: this.mobileTop,
    };
  }

  calculateBlobWidth(): BlobCalculator {
    this.width = this.windowWidth - this.BLOB_SCREEN_WIDTH_PERCENTAGE;
    return this;
  }

  calculateBlobHeight(): BlobCalculator {
    this.height = this.width * this.aspect;
    return this;
  }

  calculateBlobTop(): BlobCalculator {
    this.top = this.height * this.BLOB_TOP_PERCENTAGE;
    return this;
  }

  calculateBlobTopMobile(): BlobCalculator {
    this.mobileTop = this.height * this.BLOB_MOBILE_TOP_PERCENTAGE;
    return this;
  }

  calculateBlobLeft(): BlobCalculator {
    this.left = this.width * this.BLOB_LEFT_PERCENTAGE;
    return this;
  }

  adjustHeight(): BlobCalculator {
    this.height =
      this.height > this.windowHeight ? this.windowHeight : this.height;
    return this;
  }
}

const BlobContainer = styled(Box)`
  --time: 40s;
`;

function HeroBlob(): ReactElement {
  const [blobCalculator, setBlobCalculator] = useState<BlobCalculator>(
    new BlobCalculator(),
  );

  const updateBlobDimensions = useCallback((): void => {
    setBlobCalculator(
      new BlobCalculator(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight,
      ),
    );
  }, [setBlobCalculator]);

  useEffect(() => {
    updateBlobDimensions();
    window.addEventListener('resize', updateBlobDimensions);
    return (): void =>
      window.removeEventListener('resize', updateBlobDimensions);
  }, [updateBlobDimensions]);

  return (
    <Box
      sx={{
        display: 'flex',
        position: 'absolute',
        maxWidth: '100vw',
        top: 0,
        left: 0,
        overflow: 'hidden',
        justifyContent: 'center',
      }}
    >
      <BlobContainer
        className="tk-blob-skew"
        sx={{
          minHeight: '818.82px',
          minWidth: '1295.89px',
          position: 'relative',
          width: blobCalculator.dimensions.width,
          height: blobCalculator.dimensions.height,
          top: {
            xs: blobCalculator.dimensions.mobileTop,
            md: blobCalculator.dimensions.top,
          },
          left: {
            xs: blobCalculator.dimensions.mobileLeft,
            md: blobCalculator.dimensions.left,
          },
        }}
      >
        <HeroBlobSvg
          style={{
            height: '100%',
            width: '100%',
          }}
        />
      </BlobContainer>
    </Box>
  );
}

export default HeroBlob;
