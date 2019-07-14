module.exports = {
  siteMetadata: {
    title: `Hamza Basrai.com`,
    description: `My personal website`,
    author: `Hamza Basrai`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `rubik`,
          `Roboto Mono`
        ],
        display: 'swap'
      }
    },
  ],
}
