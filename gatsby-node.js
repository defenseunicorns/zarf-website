// gatsby-node.js
exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `/`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/coming-soon`
  });

  createRedirect({
    fromPath: `/home`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/coming-soon`
  });
};
