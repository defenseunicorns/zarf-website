import React, { ReactElement } from 'react';
import ReroutePageBackdrop, {
  ReroutePageProps
} from '../components/ReroutePage';

// markup
function NotFoundPage(): ReactElement {
  const path = location.pathname.replace('/', '');
  const rerouteProps: ReroutePageProps = {
    title: 'Not Found!',
    topLine: 'Error 404',
    middleLine: `${path}`,
    bottomLine: 'not found!',
    buttonLink: '/',
    buttonText: 'Return Home'
  };
  return <ReroutePageBackdrop {...rerouteProps} />;
}

export default NotFoundPage;
