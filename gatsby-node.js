const express = require("express");
exports.onCreateDevServer = ({ app }) => {
  app.use(express.static("public"));
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const articleTemplate = require.resolve(`./src/templates/article.js`);
  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const resolvePath = ({ frontmatter: { slug } }) => {
    return `articles/${slug}`;
  };

  const edgesToBuild = result.data.allMarkdownRemark.edges;
  edgesToBuild.forEach(({ node }) => {
    createPage({
      path: resolvePath(node),
      component: articleTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};
