import WirelessCloud from '../../assets/png/cloud-icons/wireless-cloud.png';
import CloudSecurity from '../../assets/png/cloud-icons/cloud-security.png';
import WebSecurity from '../../assets/png/cloud-icons/web-security.png';
import Community from '../../assets/png/cloud-icons/community.png';
import { ExampleCardProps } from '../../components/ExampleCard';
import Server from '../../assets/png/cloud-icons/server.png';
import Pieces from '../../assets/png/cloud-icons/pieces.png';
import ZarfNuclear from '../../assets/png/zarf-nuclear.png';
import { ZarfCardProps } from '../../components/ZarfCard';
import ZarfRocket from '../../assets/png/zarf-rocket.png';
import ZarfSub from '../../assets/png/zarf-sub.png';
import CloudDocument from '../../assets/png/cloud-icons/document.png';
import CloudHosting from '../../assets/png/cloud-icons/hosting.png';
import CloudServer from '../../assets/png/cloud-icons/server.png';

export const howZarfWorksCards: ZarfCardProps[] = [
  {
    topImage: WebSecurity,
    headerFirstLine: 'Securely Package Cloud',
    headerSecondLine: 'Apps & Resources',
    body: 'Provides the ability to package a chunk of the internet and then securely deliver all of the files and dependencies needed to run an application in a disconnected environment.',
  },
  {
    topImage: WirelessCloud,
    headerFirstLine: 'Deploy Cloud Apps',
    headerSecondLine: 'While Disconnected',
    body: 'Provides the ability to deploy apps declaratively and without internet connectivity. Opening up the door for modern cloud capabilities to be deployed in disconnected environments.',
  },
  {
    topImage: Server,
    headerFirstLine: 'Easily Maintain Apps',
    headerSecondLine: 'While Disconnected',
    body: 'Zarf reduces the skill and resources needed to manage and update applications in disconnected environments, ensuring no down time or data loss when updating software.',
  },
];

export const whyUseZarfCards: ZarfCardProps[] = [
  {
    topImage: Community,
    headerFirstLine: 'Free and Open Source',
    headerSecondLine: 'Solution',
    body: 'Source code is open and viewable to the public which increases security through transparency. Zarf is also a free tool and available for public use.',
  },
  {
    topImage: CloudSecurity,
    headerFirstLine: 'Built to Be Distro',
    headerSecondLine: 'Agnostic',
    body: 'Currently offers fully automated support for K3s, K3d, and Kind. Is also compatible with EKS, AKS, GKE, RKE2 and many others distro services.',
  },
  {
    topImage: Pieces,
    headerFirstLine: 'Automates SBOM',
    headerSecondLine: 'Creation',
    body: 'Automatically generates an SBOM from the images listed within a package, in compliance with federal mandate. Includes a UI for SBOM viewing.',
  },
  {
    topImage: CloudDocument,
    headerFirstLine: 'Installs Packages with',
    headerSecondLine: 'Two Commands',
    body: 'Reduces the risk of installation error and complexity of installation procedures by simplifying the installation of packages to just two steps.',
  },
  {
    topImage: CloudHosting,
    headerFirstLine: 'Consistently Deploy',
    headerSecondLine: 'Across Environments',
    body: 'Ensures that applications are deployed the same way each time, whether deployed to a different cluster, machine or environment.',
  },
  {
    topImage: CloudServer,
    headerFirstLine: 'Hosts Own Docker',
    headerSecondLine: 'Registry & Git Server',
    body: 'Zarf spins up K8 clusters, docker registries and git servers offline to allow for disconnected use. For connected users this provides a fail over solution.',
  },
].map(
  (c: ZarfCardProps): ZarfCardProps => ({
    ...c,
    variant: 'nocard',
    bodyColor: 'text.secondary',
  }),
);

export const exampleCards: ExampleCardProps[] = [
  {
    title: 'Sometimes Disconnected',
    body: 'Some systems experience disconnection occasionally due to temporary loss of access, like a rocket going around the moon. Zarf keeps those systems running.',
    image: ZarfRocket,
  },
  {
    title: 'Always Disconnected',
    body: 'Other systems are always disconnected due to lack of internet access. Maybe they are underground, underwater, or on another planet.',
    image: ZarfSub,
    reverse: true,
  },
  {
    title: 'Disconnected in Emergencies',
    body: 'The worlds most important infrastructure needs to be able to control their connection to the internet and still run in the case of internet loss or a cyber attack.',
    image: ZarfNuclear,
  },
];
