import NavLink from '../../interfaces/NavLink';

interface SocialLinks {
  [key: string]: NavLink;
}
export const namedLinks: SocialLinks = {
  product: {
    url: '/',
    text: 'Product',
  },
  slack: {
    url: '/slack',
    text: 'Slack',
  },
  installNow: {
    url: '/install',
    text: 'Install Now',
  },
  enterpriseSupport: {
    url: '/enterprise-support',
    text: 'Contact an Expert',
  },
  zarfExamples: {
    url: 'https://defenseunicorns.github.io/zarf/examples',
    text: 'Examples',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  zarfDocs: {
    url: 'https://docs.zarf.dev/docs/zarf-overview',
    text: 'Documents',
    target: '_self',
    rel: 'noopener noreferrer',
  },
  github: {
    url: 'https://github.com/defenseunicorns/zarf',
    text: 'Github',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  startContributing: {
    url: 'https://docs.zarf.dev/docs/developer-guide/contributor-guide',
    text: 'view contributor guide',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  defenseUnicorns: {
    url: 'https://defenseunicorns.com',
    text: 'Defense Unicorns',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  gettingStarted: {
    url: 'https://docs.zarf.dev/docs/getting-started',
    text: 'Getting Started',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  userGuide: {
    url: 'https://docs.zarf.dev/docs/user-guide/the-zarf-cli/the-zarf-cli',
    text: 'User Guide',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
};

export const navLinks: NavLink[] = [
  namedLinks.product,
  namedLinks.zarfExamples,
  namedLinks.zarfDocs,
];
