import { Box, Typography } from '@mui/material';
import React, { ReactElement } from 'react';

interface StatProps {
  title: string | number;
  subtitle: string;
}
function Stat({ title, subtitle }: StatProps): ReactElement {
  return (
    <Box textAlign={'center'} minWidth="90px">
      <Typography variant="h2">{title}</Typography>
      <Typography variant="h6" fontFamily={'Roboto'}>
        {subtitle}
      </Typography>
    </Box>
  );
}

export default Stat;
