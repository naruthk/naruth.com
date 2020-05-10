
import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";

import { Global } from '@emotion/core';
import { globalStyles } from "../utils/styles";

const Layout = ({ children, showWelcomeText }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Global styles={globalStyles} />
      <Header
        siteTitle={data.site.siteMetadata.title}
        showWelcomeText={showWelcomeText}
      />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showWelcomeText: PropTypes.bool
}

Layout.defaultProps = {
  showWelcomeText: false
};

export default Layout
