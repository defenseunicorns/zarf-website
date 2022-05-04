import ZarfBubbles from '../../assets/png/zarf-bubbles.png';
import React, { ReactElement, useState } from 'react';
import onResize from '../../hooks/onResize';
import Box from '@mui/material/Box';
import { hideSmall } from '../../utils/display';

const ZARF_PADDING = 40;
function ZarfBox(props: {
  leftAlignRef: React.MutableRefObject<HTMLDivElement | undefined>;
}): ReactElement {
  const [zarfTop, setZarfTop] = useState<number>();
  const [zarfLeft, setZarfLeft] = useState<number>();
  const selfRef = React.useRef<HTMLDivElement>();

  const setPosition = (): void => {
    const laCurrent = props.leftAlignRef.current;
    if (laCurrent && selfRef.current) {
      const laRect = laCurrent.getBoundingClientRect();
      setZarfLeft(laRect.left - document.body.getBoundingClientRect().left);
      setZarfTop(laCurrent.scrollTop + laRect.height + ZARF_PADDING);
    }
  };

  onResize(setPosition);

  return (
    <Box
      ref={selfRef}
      component="img"
      src={ZarfBubbles}
      alt="Zarf Bubbles"
      sx={{
        ...hideSmall,
        width: '262px',
        height: '260px',
        position: 'absolute',
        top: zarfTop,
        left: zarfLeft,
      }}
    />
  );
}

export default ZarfBox;
