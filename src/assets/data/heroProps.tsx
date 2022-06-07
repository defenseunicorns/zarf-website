import HowSupportHelps from '../../components/Sections/EnterpriseSupport/HowSupportHelps';
import SupportForm from '../../components/Sections/EnterpriseSupport/SupportForm';
import PirateShip from '../../assets/png/pirate-ship.png';
import { HeroProps } from '../../components/Hero/Hero';
import ZarfEdge from '../../assets/png/zarf-edge.png';
import { namedLinks } from './navLinks';
import React from 'react';

interface HeroPropsData {
  [key: string]: HeroProps;
}
export const heroProps: HeroPropsData = {
  home: {
    header: 'DevSecOps for Airgap',
    body: 'A free open source tool that enables continuous software delivery on disconnected networks.',
    navLink: { ...namedLinks.quickstart },
    image: ZarfEdge,
  },
  slack: {
    header: 'Making a Splash on Slack',
    body: "Join our project channels on K8's slack.",
    navLink: {
      text: 'Join Slack Now',
      url: 'https://slack.k8s.io/',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    image: PirateShip,
  },
  support: {
    rhsChild: <SupportForm />,
    lhsChild: <HowSupportHelps />,
  },
};
