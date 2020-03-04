import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function Article({ data, location }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { title, excerpt, author } = frontmatter;

  return (
    <Layout>
      <SEO title={title} description={excerpt} pathname={location.pathname} />
      <h1>{title}</h1>
      <p>By {author}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        title
        slug
        author
        postedAt
      }
    }
  }
`;
