import { ZarfCardProps } from '../../components/ZarfCard';
import FileLock from '../../assets/png/file-lock.png';
import CloudWifi from '../../assets/png/cloud-wifi.png';
import CloudServer from '../../assets/png/cloud-server.png';

export const howZarfWorksCards: ZarfCardProps[] = [
  {
    topImage: FileLock,
    headerFirstLine: 'Packages Cloud',
    headerSecondLine: 'Apps & Resources',
    body: 'Lucas ipsum dolor sit amet tatooine darth skywalker darth bothan fett chewbacca coruscant luuke organa. Darth skywalker darth bothan.',
  },
  {
    topImage: CloudWifi,
    headerFirstLine: 'Rebuilds',
    headerSecondLine: 'Cloud Apps Offline',
    body: 'Lucas ipsum dolor sit amet tatooine darth skywalker darth bothan fett chewbacca coruscant luuke organa. Darth skywalker darth bothan. ',
  },
  {
    topImage: CloudServer,
    headerFirstLine: 'Runs Cloud Apps',
    headerSecondLine: 'Disconnected',
    body: 'Lucas ipsum dolor sit amet tatooine darth skywalker darth bothan fett chewbacca coruscant luuke organa. Darth skywalker darth bothan. ',
  },
];
