/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
      title: 'Evann Wu Personal Website',
      author: 'Evann Wu'
  },
  plugins: [
      {
          resolve: 'gatsby-source-contentful',
          options: {
              spaceId: '7icxsgjiha62',
              accessToken: 'zubmL_F0bMxOKfCYWa0wkelKR1ioxOFqcwwtByXl-xM'
          }
      },
      'gatsby-plugin-sass',
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              name: 'src',
              path: `${__dirname}/src/`
          }
      },
      'gatsby-plugin-sharp',
      {
          resolve: 'gatsby-transformer-remark',
          options: {
              plugins: [
                  'gatsby-remark-relative-images',
                  {
                      resolve: 'gatsby-remark-images',
                      options: {
                          maxWidth: 750,
                          linkImagesToOriginal: false
                      }
                  }
              ]
          }
      }
  ]
}