module.exports = {
  siteMetadata: {
    title: `Hamza Basrai.com`,
    description: `My personal website`,
    author: `Hamza Basrai`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
  ],
}
