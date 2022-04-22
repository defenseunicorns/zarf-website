import PirateShip from '../../assets/png/pirate-ship.png';
import { HeroProps } from '../../components/Hero/Hero';
import ZarfEdge from '../../assets/png/zarf-edge.png';
import { socialLinks } from './navLinks';

interface HeroPropsData {
  [key: string]: HeroProps;
}
export const heroProps: HeroPropsData = {
  home: {
    header: 'DevSecOps for Airgap',
    body: 'A free open source tool that enables continuous software delivery on disconnected networks.',
    buttonText: 'View on Github',
    buttonLink: socialLinks.github.url,
    image: ZarfEdge,
  },
  slack: {
    header: 'Making a Splash on Slack',
    body: "Join our project channels on K8's slack",
    buttonText: 'Join Slack Now',
    buttonLink: 'https://slack.k8s.io/',
    image: PirateShip,
  },
};
