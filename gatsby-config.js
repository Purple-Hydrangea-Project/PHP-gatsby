/**
  * Configure your Gatsby site with this file.
  *
  * See: https://www.gatsbyjs.org/docs/gatsby-config/
*/

require("dotenv").config({
  path: `.env`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        forceFullSync: true,
      },
    },
  ],
  siteMetadata: {
    title: `The Purple Hydrangea Project`,
    description: `The Purple Hydrangea Project is a student-run 501(c)3 nonprofit organization dedicated to advocating for mental health awareness in children and teens. In our fight to eliminate the stigma around mental health, we hope to move the community towards an environment of understanding in which everyone can feel safe in reaching out for help and speaking about their mental health struggles without fear of being judged, ignored, or shunned. `,
    author: `Isabel Abonitalla, Anna Zhang, Cynthia Yan`,
  },
}