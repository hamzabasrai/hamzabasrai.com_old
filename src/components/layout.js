import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import GlobalStyle from "../styles/globalStyle"

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
      <div>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with ❤️ by Hamza Basrai
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
