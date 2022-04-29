import ZarfSub from '../../assets/png/zarf-sub.png';
import FileLock from '../../assets/png/file-lock.png';
import CloudWifi from '../../assets/png/cloud-wifi.png';
import { ZarfCardProps } from '../../components/ZarfCard';
import ZarfRocket from '../../assets/png/zarf-rocket.png';
import CloudServer from '../../assets/png/cloud-server.png';
import ZarfNuclear from '../../assets/png/zarf-nuclear.png';
import { ExampleCardProps } from '../../components/ExampleCard';

export const howZarfWorksCards: ZarfCardProps[] = [
  {
    topImage: FileLock,
    headerFirstLine: 'Securely Package Cloud',
    headerSecondLine: 'Apps & Resources',
    body: 'Lucas ipsum dolor sit amet tatooine darth skywalker darth bothan fett chewbacca coruscant luuke organa. Darth skywalker darth bothan.',
  },
  {
    topImage: CloudWifi,
    headerFirstLine: 'Deploy Cloud Apps',
    headerSecondLine: 'While Disconnected',
    body: 'Lucas ipsum dolor sit amet tatooine darth skywalker darth bothan fett chewbacca coruscant luuke organa. Darth skywalker darth bothan. ',
  },
  {
    topImage: CloudServer,
    headerFirstLine: 'Easily Maintain Apps',
    headerSecondLine: 'While Disconnected',
    body: 'Lucas ipsum dolor sit amet tatooine darth skywalker darth bothan fett chewbacca coruscant luuke organa. Darth skywalker darth bothan. ',
  },
];

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
    body: 'The worlds most important infastructure needs to be able to control their connection to the internet and still run in the case of internet loss or a cyber attack.',
    image: ZarfNuclear,
  },
];
