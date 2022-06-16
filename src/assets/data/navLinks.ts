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
    text: 'Contact an Expert',
    url: '/enterprise-support',
  },
  zarfExamples: {
    text: 'Examples',
    target: '_blank',
    rel: 'noopener noreferrer',
    url: 'https://defenseunicorns.github.io/zarf/examples',
  },
  zarfDocs: {
    target: '_self',
    text: 'Documents',
    rel: 'noopener noreferrer',
    url: 'https://docs.zarf.dev/docs/zarf-overview',
  },
  github: {
    text: 'Github',
    target: '_blank',
    rel: 'noopener noreferrer',
    url: 'https://github.com/defenseunicorns/zarf',
  },
  startContributing: {
    target: '_blank',
    rel: 'noopener noreferrer',
    text: 'view contributor guide',
    url: 'https://docs.zarf.dev/docs/developer-guide/contributor-guide',
  },
  defenseUnicorns: {
    target: '_blank',
    text: 'Defense Unicorns',
    rel: 'noopener noreferrer',
    url: 'https://defenseunicorns.com',
  },
  gettingStarted: {
    target: '_blank',
    text: 'Getting Started',
    rel: 'noopener noreferrer',
    url: 'https://docs.zarf.dev/docs/getting-started',
  },
  userGuide: {
    target: '_blank',
    text: 'User Guide',
    rel: 'noopener noreferrer',
    url: 'https://docs.zarf.dev/docs/user-guide/the-zarf-cli/the-zarf-cli',
  },
  homebrew: {
    text: 'Brew',
    target: '_blank',
    url: 'https://brew.sh/',
    rel: 'noopener noreferrer',
  },
};

export const navLinks: NavLink[] = [
  namedLinks.product,
  namedLinks.zarfExamples,
  namedLinks.zarfDocs,
];
