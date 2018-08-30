module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    desc: "Welcome To My Blog!"
  },
  pathPrefix: "/gatsby",
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'img',
        path: `${__dirname}/src/images`
      }
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },

    {
      resolve: "gatsby-transformer-remark",
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
}
