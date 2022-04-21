/* eslint-disable */
import React, {
  createRef,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from 'react';
import HeroBlobSvg from '../../assets/svg/hero-blob.svg';
import { Box, styled, useMediaQuery } from '@mui/material';
import theme from '../../theme/theme';

const BlobContainer = styled(Box)`
  --time: 40s;
`;

const NAV_BAR_LG_OFFSET = -80;
const MAX_BODY_WIDTH = 1990;
const BLOB_LEFT_OFFSET_MULTIPLIER = -0.45;
const BLOB_TOP_OFFSET_MULTIPLIER = -0.25;
const BLOB_TOP_SM_MD_OFFSET_MULTIPLIER = -0.4;
const BLOB_TOP_MD_LG_OFFSET_MULTIPLIER = -0.2;

function HeroBlob(): ReactElement {
  const [blobRef] = useState(createRef<HTMLDivElement>());
  const [blobTop, setBlobTop] = useState<number>(0);
  const [blobLeft, setBlobLeft] = useState<number>();
  const [containerTop, setContainerTop] = useState<number | string>(0);
  const [containerLeft, setContainerLeft] = useState<number | string>(0);
  const betweenSmMd = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const betweenMdLg = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const extraLarge = useMediaQuery(theme.breakpoints.up(MAX_BODY_WIDTH));

  const repositionBlob = useCallback(() => {
    if (blobRef.current) {
      setBlobLeft(BLOB_LEFT_OFFSET_MULTIPLIER * blobRef.current.clientWidth);
      setBlobTop(BLOB_TOP_OFFSET_MULTIPLIER * blobRef.current.clientHeight);
      if (betweenSmMd) {
        setBlobTop(
          BLOB_TOP_SM_MD_OFFSET_MULTIPLIER * blobRef.current.clientHeight,
        );
      } else if (betweenMdLg) {
        setBlobTop(
          BLOB_TOP_MD_LG_OFFSET_MULTIPLIER * blobRef.current.clientHeight,
        );
      }
    }
  }, [blobRef.current, betweenSmMd, betweenMdLg, extraLarge]);

  useEffect(() => {
    repositionBlob();
    window.addEventListener('resize', repositionBlob);
    return (): void => {
      window.removeEventListener('resize', repositionBlob);
    };
  }, [repositionBlob]);

  useEffect(() => {
    if (extraLarge) {
      setContainerLeft('unset');
      setContainerTop(NAV_BAR_LG_OFFSET);
    } else {
      setContainerLeft(0);
      setContainerTop(0);
    }
  }, [extraLarge]);

  return (
    <Box
      sx={{
        display: 'flex',
        position: 'absolute',
        maxWidth: '100vw',
        top: containerTop,
        left: containerLeft,
        overflow: 'hidden',
        justifyContent: 'center',
      }}
    >
      <BlobContainer
        className="tk-blob-skew"
        ref={blobRef}
        sx={{
          minHeight: '818.82px',
          minWidth: '1295.89px',
          position: 'relative',
          left: { xs: 0, md: blobLeft },
          top: blobTop,
        }}
      >
        {blobLeft && (
          <HeroBlobSvg
            style={{
              height: '100%',
              width: '100%',
            }}
          />
        )}
      </BlobContainer>
    </Box>
  );
}

export default HeroBlob;
