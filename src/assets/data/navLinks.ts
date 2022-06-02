import NavLink from '../../interfaces/NavLink';

export const navLinks: NavLink[] = [
  {
    url: '/',
    text: 'Product',
  },
  {
    url: 'https://defenseunicorns.github.io/zarf/examples',
    text: 'Examples',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    url: 'https://docs.zarf.dev/docs/zarf-overview',
    text: 'Documents',
    target: '_self',
    rel: 'noopener noreferrer',
  },
];

interface SocialLinks {
  [key: string]: NavLink;
}
export const socialLinks: SocialLinks = {
  slack: {
    url: '/slack',
    text: 'Slack',
  },
  github: {
    url: 'https://github.com/defenseunicorns/zarf',
    text: 'Github',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  startContributing: {
    url: 'https://github.com/defenseunicorns/zarf/blob/master/CONTRIBUTING.md',
    text: 'start contributing',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  defenseUnicorns: {
    url: 'https://defenseunicorns.com',
    text: 'Defense Unicorns',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
};
