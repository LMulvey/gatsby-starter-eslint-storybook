import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const Articles = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `);
  const articles = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Articles" />
      <h1>Articles</h1>
      {articles
        ? articles.map(({ node }) => (
            <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
          ))
        : null}
    </Layout>
  );
};

export default Articles;
