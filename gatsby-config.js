module.exports = {
  siteMetadata: {
    title: `AHS Covid-19 Response`,
    // siteUrl: `http://19tozero.com`,
    description: ``,
    keywords: ["covid-19", "ahs", "covid", "coronavirus"],
    author: `Alberta Health Services`,
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
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `netlify-articles`,
        path: `${__dirname}/_articles`,
      },
    },

    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
  ],
};
