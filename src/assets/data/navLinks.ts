import NavLink from '../../interfaces/NavLink';

export const navLinks: NavLink[] = [
  {
    url: '/',
    title: 'Product'
  },
  {
    url: 'https://defenseunicorns.github.io/zarf/examples',
    title: 'Examples',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  {
    url: 'https://defenseunicorns.github.io/zarf',
    title: 'Documents',
    target: '_blank',
    rel: 'noopener noreferrer'
  }
];

interface SocialLinks {
  [key: string]: NavLink;
}
export const socialLinks: SocialLinks = {
  slack: {
    url: 'https://slack.k8s.io/',
    title: 'Slack',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  github: {
    url: 'https://github.com/defenseunicorns/zarf',
    title: 'Github',
    target: '_blank',
    rel: 'noopener noreferrer'
  }
};
