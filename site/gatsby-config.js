module.exports = {
  siteMetadata: {
    title: `Hamza Basrai`,
    description: `My personal website`,
    author: `Hamza Basrai`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto Mono\:300,400`, `Rubik\:300,400`, `Gothic A1\:300,400,700`],
        display: "swap"
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        icon: `src/images/fav.png`
      }
    }
  ]
};
