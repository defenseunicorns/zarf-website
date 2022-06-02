import BlobSm from '../../../assets/svg/maintained-by-sm-blob.svg';
import { Box, Link, styled, Typography } from '@mui/material';
import Blob from '../../../assets/svg/maintained-by-blob.svg';
import { hideLarge, hideSmall } from '../../../utils/display';
import { socialLinks } from '../../../assets/data/navLinks';
import DuLogo from '../../../assets/png/full-du-logo.png';
import React, { ReactElement } from 'react';

interface MaintainedByProps {
  tagLine: string;
}

const MaintainerSection = styled(Box)`
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

function SupportBy({ tagLine }: MaintainedByProps): ReactElement {
  return (
    <MaintainerSection
      component="section"
      sx={{
        height: { xs: '520px', md: '405px' },
        width: { xs: '100%', md: '735px' },
      }}
    >
      <Box
        textAlign={'center'}
        flexDirection="column"
        gap={'16px'}
        display="flex"
      >
        <Typography variant="h5">{tagLine}</Typography>
        <Link
          href={socialLinks.defenseUnicorns.url}
          target={socialLinks.defenseUnicorns.target}
          rel={socialLinks.defenseUnicorns.rel}
          title={socialLinks.defenseUnicorns.text}
        >
          <Box
            component="img"
            src={DuLogo}
            alt={socialLinks.defenseUnicorns.text}
            sx={{
              width: { xs: '280px', md: '320px' },
              height: { xs: '60px', md: '68.4px' },
            }}
          />
        </Link>
      </Box>
      <BlobWrapper className="tk-blob-skew tk-blob-scale" sx={hideSmall}>
        <Blob width="100%" height="100%" preserveAspectRatio="none" />
      </BlobWrapper>
      <BlobWrapper className="tk-blob-skew tk-blob-scale" sx={hideLarge}>
        <BlobSm width="100%" height="100%" preserveAspectRatio="none" />
      </BlobWrapper>
    </MaintainerSection>
  );
}

export default SupportBy;
