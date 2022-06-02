import SupportBy from '../components/Sections/EnterpriseSupport/SupportBy';
import { heroProps } from '../assets/data/heroProps';
import PageLayout from '../components/PageLayout';
import React, { ReactElement } from 'react';
import Hero from '../components/Hero/Hero';
import Box from '@mui/material/Box/Box';

function Support(): ReactElement {
  return (
    <PageLayout>
      <Hero {...heroProps.support} />
      <Box sx={{ my: '16px' }}></Box>
      <SupportBy tagLine="Enterprise Support Provided By:" />
    </PageLayout>
  );
}

export default Support;
