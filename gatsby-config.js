module.exports = {
  siteMetadata: {
    title: `VetTrust`,
    description: `Welcome to VetTrust`,
    author: `Andrew <andrew@bbm.co.uk>`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `VetTrust`,
        short_name: `VetTrust`,
        start_url: `/`,
        background_color: `#f7b0c3`,
        theme_color: `#f7b0c3`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `8hkoud5vhgxv`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `jIAzGZe0TP9t_htQ_igGbNVfUsMoa7OwO8Ou4tuh3Os`,
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
  ],
}
