import Seo, { SeoProps } from './seo';
import { Box } from '@mui/material';
import React, { ReactElement } from 'react';

function SiteHelmet(props: SeoProps): ReactElement {
  return (
    <Box className="SiteHelmet">
      <Seo {...props} />
    </Box>
  );
}

export default SiteHelmet;
