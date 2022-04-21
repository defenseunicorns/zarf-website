/* eslint-disable */
import React, {
  createRef,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from 'react';
import HeroBlobSvg from '../../assets/svg/hero-blob.svg';
import { Box, styled } from '@mui/material';

const BlobContainer = styled(Box)`
  --time: 40s;
`;

function HeroBlob(): ReactElement {
  const [blobRef] = useState(createRef<HTMLDivElement>());
  const [blobTop, setBlobTop] = useState<number>(0);
  const [blobLeft, setBlobLeft] = useState<number>(0);

  const repositionBlob = useCallback(() => {
    if (blobRef.current) {
      setBlobLeft(-0.5 * window.innerWidth);
      setBlobTop(-0.3 * window.innerHeight);
    }
  }, [blobRef.current]);

  useEffect(() => {
    repositionBlob();
    window.addEventListener('resize', repositionBlob);
    return (): void => {
      window.removeEventListener('resize', repositionBlob);
    };
  }, [repositionBlob]);

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
        ref={blobRef}
        sx={{
          minHeight: '818.82px',
          // maxHeight: '100vh',
          minWidth: '1295.89px',
          position: 'relative',
          left: { xs: 0, md: blobLeft },
          top: blobTop,
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
