import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>COVID 19</h1>
    <p>Thanks</p>
    <Link to="/articles/">Articles</Link>
  </Layout>
);

export default IndexPage;
