import ZarfBubbles from '../../assets/png/zarf-bubbles.png';
import React, { ReactElement, useState } from 'react';
import { hideSmall } from '../../utils/display';
import onResize from '../../hooks/onResize';
import Box from '@mui/material/Box';

const ZARF_TOP_MULTIPLIER = 0.53;

function ZarfBox(props: {
  parentHeight?: number;
  parentRef: React.MutableRefObject<HTMLDivElement | undefined>;
}): ReactElement {
  const [zarfTop, setZarfTop] = useState<number>();
  const [zarfRight, setZarfRight] = useState<number>();

  onResize(() => {
    props.parentHeight && setZarfTop(ZARF_TOP_MULTIPLIER * props.parentHeight);
    props.parentRef.current && setZarfRight(props.parentRef.current.offsetLeft);
  });

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
        right: zarfRight,
        top: zarfTop,
      }}
    />
  );
}

export default ZarfBox;
