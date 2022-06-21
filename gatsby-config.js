/** @type {import('gatsby').GatsbyConfig} */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { SITE_URL, PATH_PREFIX, TAG_MANAGER } = require('./env.js');

// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules',
);

module.exports = {
  siteMetadata: {
    title: `Zarf`,
    siteUrl: SITE_URL,
    image: `/img/social-preview.png`,
    description: `DevSecOps for Airgap`,
    keywords: `DevSecOps, DevOps, Airgap, Kubernetes, Cloud Native, kind, k3s, k3d`,
  },
  pathPrefix: PATH_PREFIX,
  plugins: [
    'gatsby-plugin-top-layout',
    'gatsby-plugin-mui-emotion',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Zarf`,
        start_url: `/*`,
        background_color: `#000000`,
        theme_color_in_head: false,
        display: `minimal-ui`,
        icon: 'src/assets/svg/favicon.svg',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static-root`,
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        // Gatsby required rules directory
        rulePaths: [gatsbyRequiredRules],
        // Default settings that may be ommitted or customized
        stages: ['develop'],
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        exclude: ['node_modules', 'bower_components', '.cache', 'public'],
        // Any additional eslint-webpack-plugin options below
        // ...
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets\/svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        createLinkInHead: true,
        exclude: [`/404`, `/enterprise-support`],
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: TAG_MANAGER,
        includeInDevelopment: false,
      },
    },
  ],
};
