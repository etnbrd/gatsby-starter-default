module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-git',
      options: {

        // remote name, default to origin
        remote: 'origin',

        // SHA1 revision to fetch and checkout
        revision: '30ca382c9a8636340d63caba96b272bab06e0d73',

        // url of the repository to fetch
        url: `https://github.com/toddmotto/public-apis.git`,

        // folder in which to put the repository
        path: `${__dirname}/content/public-apis`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `apis`,
        path: `${__dirname}/content/public-apis`,
        ignore: [
          // Ignore all the hidden files (e.g. the .git folder)
          `**\/.*`,
          // Ignore all non markdown files
          `**\/*!(.md)`
        ]
      },
    },
  ],
}
