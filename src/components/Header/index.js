import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import { Container } from "./Header.styles";

const Header = ({ siteTitle }) => (
  <Container color="red" bg="yellow">
    <h1>{siteTitle}</h1>
    Coming Soon
  </Container>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
