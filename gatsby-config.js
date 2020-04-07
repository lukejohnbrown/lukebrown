module.exports = {
  siteMetadata: {
    title: `Luke Brown`,
    description: `Freelance web designer and developer from sunny Cardiff, Wales`,
    author: `@lukejohnbrown`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-netlify',
    'gatsby-plugin-styled-components',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
              disableBgImage: true
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#F5DE19`,
        theme_color: `#F5DE19`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Heebo`,
            variants: [`400`, `500`, `600`, `800`],
          },
          {
            family: 'Source Code Pro',
            variants: ['400']
          }
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
