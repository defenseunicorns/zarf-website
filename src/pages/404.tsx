import React, { ReactElement, useEffect, useState } from 'react';
import ReroutePageBackdrop, {
  ReroutePageProps
} from '../components/ReroutePage';

const defaultRerouteProps: ReroutePageProps = {
  title: 'Not Found!',
  topLine: 'Error 404',
  middleLine: 'Page',
  bottomLine: 'not found!',
  buttonLink: '/',
  buttonText: 'Return Home'
};
// markup
function NotFoundPage(): ReactElement {
  const [rerouteProps, setRerouteProps] =
    useState<ReroutePageProps>(defaultRerouteProps);

  useEffect(() => {
    setRerouteProps(
      (p): ReroutePageProps => ({
        ...p,
        middleLine: location.pathname.replace('/', '')
      })
    );
  }, [setRerouteProps]);

  return <ReroutePageBackdrop {...rerouteProps} />;
}

export default NotFoundPage;
