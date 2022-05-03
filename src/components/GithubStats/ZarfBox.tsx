/* eslint-disable */
import ZarfBubbles from '../../assets/png/zarf-bubbles.png';
import React, { ReactElement, useCallback, useState } from 'react';
import onResize from '../../hooks/onResize';
import Box from '@mui/material/Box';
import { hideSmall } from '../../utils/display';

const ZARF_TOP_MULTIPLIER = 0.53;

function ZarfBox(props: {
  parentHeight?: number;
  leftAlignRef: React.MutableRefObject<HTMLDivElement | undefined>;
}): ReactElement {
  const [zarfTop, setZarfTop] = useState<number>();
  const [zarfLeft, setZarfLeft] = useState<number>();

  onResize(
    useCallback(() => {
      props.parentHeight &&
        setZarfTop(ZARF_TOP_MULTIPLIER * props.parentHeight);
      props.leftAlignRef.current &&
        setZarfLeft(props.leftAlignRef.current.getClientRects()[0].left);
    }, [props.parentHeight, props.leftAlignRef.current]),
  );

  return (
    <Box
      component="img"
      src={ZarfBubbles}
      alt="Zarf Bubbles"
      sx={{
        ...hideSmall,
        width: '262px',
        height: '260px',
        position: 'absolute',
        left: zarfLeft,
        top: zarfTop,
      }}
    />
  );
}

export default ZarfBox;
