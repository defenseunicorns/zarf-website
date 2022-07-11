import HowSupportHelps from '../../components/Sections/EnterpriseSupport/HowSupportHelps';
import SupportForm from '../../components/Sections/EnterpriseSupport/SupportForm';
import PirateShip from '../../assets/png/pirate-ship.png';
import { HeroProps } from '../../components/Hero/Hero';
import ZarfEdge from '../../assets/png/zarf-edge.png';
import { namedLinks } from './navLinks';
import React from 'react';
import Link from '@mui/material/Link/Link';

interface HeroPropsData {
  [key: string]: HeroProps;
}
export const heroProps: HeroPropsData = {
  home: {
    header: 'DevSecOps for Airgap',
    body: 'A free open source tool that enables continuous software delivery on disconnected networks.',
    navLink: { ...namedLinks.installNow },
    image: ZarfEdge,
  },
  slack: {
    header: 'Join the Conversation',
    body: (
      <>
        Zarf is on the K8’s slack. Join our product channel{' '}
        <Link
          href="https://kubernetes.slack.com/archives/C03B6BJAUJ3"
          target="_blank"
          rel="noopener noreferrer"
        >
          #zarf
        </Link>{' '}
        for the latests news, updates, and information.
      </>
    ),
    navLink: {
      text: 'Join Slack Now',
      url: 'https://kubernetes.slack.com/archives/C03B6BJAUJ3',
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
