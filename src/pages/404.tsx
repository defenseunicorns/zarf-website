import React, { ReactElement, useEffect, useState } from 'react';
import getLocationPath from '../hooks/getLocationPath';
import ReroutePageBackdrop, {
  ReroutePageProps,
} from '../components/ReroutePage';
import { Box } from '@mui/material';
import PageLayout from '../components/PageLayout';

const defaultRerouteProps: ReroutePageProps = {
  title: 'Not Found!',
  topLine: 'Error 404',
  middleLine: 'Page',
  bottomLine: 'not found!',
  buttonLink: '/',
  buttonText: 'Return Home',
};

function NotFoundPage(): ReactElement {
  const [rerouteProps, setRerouteProps] =
    useState<ReroutePageProps>(defaultRerouteProps);
  const [pathname] = getLocationPath();

  useEffect(() => {
    setRerouteProps(
      (p): ReroutePageProps => ({
        ...p,
        middleLine: pathname.replace('/', ''),
      }),
    );
  }, [pathname]);

  return (
    <PageLayout>
      <Box
        position="relative"
        sx={{
          height: '100vh',
          width: '100vw',
          marginTop: { xs: '-4rem', md: '-5rem' },
        }}
      >
        <ReroutePageBackdrop {...rerouteProps} />
      </Box>
    </PageLayout>
  );
}

export default NotFoundPage;
