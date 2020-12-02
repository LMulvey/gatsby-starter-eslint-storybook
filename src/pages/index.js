import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import ArticlesContainer from "../components/ArticlesContainer";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              title
              slug
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const articles = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Home" />
      <h1>gatsby-starter-eslint-storybook</h1>
      <p>starter</p>

      <ArticlesContainer articles={articles} />
      <Link to="/articles/">Articles</Link>
    </Layout>
  );
};

export default IndexPage;
