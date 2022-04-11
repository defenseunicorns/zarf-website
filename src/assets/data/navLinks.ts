import NavLink from '../../interfaces/NavLink';

export const navLinks: NavLink[] = [
  {
    url: '/',
    title: 'Product'
  },
  {
    url: 'https://defenseunicorns.github.io/zarf/examples',
    title: 'Examples',
    target: '__blank'
  },
  {
    url: 'https://defenseunicorns.github.io/zarf',
    title: 'Documents',
    target: '__blank'
  }
];

interface SocialLinks {
  [key: string]: NavLink;
}
export const socialLinks: SocialLinks = {
  slack: {
    url: 'https://github.com/defenseunicorns/zarf/discussions',
    title: 'Slack',
    target: '__blank'
  },
  github: {
    url: 'https://github.com/defenseunicorns/zarf',
    title: 'Github',
    target: '__blank'
  }
};
