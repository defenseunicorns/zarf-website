import React, { ReactElement } from 'react';
import ReroutePageBackdrop, {
  ReroutePageProps
} from '../components/ReroutePage';

const rerouteProps: ReroutePageProps = {
  title: 'Coming Soon!',
  topLine: 'Open Source Project',
  middleLine: 'Website',
  bottomLine: 'Coming Soon!',
  buttonLink: 'https://github.com/defenseunicorns/zarf',
  buttonText: 'View On Github'
};

function index(): ReactElement {
  return <ReroutePageBackdrop {...rerouteProps} />;
}

export default index;
