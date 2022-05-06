import React, { MutableRefObject, ReactElement } from 'react';
import { Box, Typography } from '@mui/material';

interface StatProps {
  title: string | number;
  subtitle: string;
  boxRef?: MutableRefObject<HTMLDivElement | undefined>;
}
function Stat({ title, subtitle, boxRef }: StatProps): ReactElement {
  return (
    <Box textAlign={'center'} minWidth="90px" ref={boxRef}>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="h6" fontFamily={'Roboto'}>
        {subtitle}
      </Typography>
    </Box>
  );
}

export default Stat;
