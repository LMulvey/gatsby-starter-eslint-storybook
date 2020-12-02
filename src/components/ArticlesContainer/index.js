import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import * as Styled from "./Articles.styles";

const index = ({ articles }) => {
  return (
    <Styled.Container>
      {articles.map(({ node }) => (
        <Styled.Article>
          {node.frontmatter.image ? (
            <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
          ) : null}
          <Link to={`articles/${node.frontmatter.slug}`}>
            <h3>{node.frontmatter.title}</h3>
          </Link>
        </Styled.Article>
      ))}
    </Styled.Container>
  );
};

export default index;
