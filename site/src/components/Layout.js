import React from "react";
import PropTypes from "prop-types";
// import { useStaticQuery, graphql } from "gatsby"

import GlobalStyle from "../styles/GlobalStyle";

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <div id="root">
      <GlobalStyle></GlobalStyle>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with ❤️ by Hamza Basrai
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
