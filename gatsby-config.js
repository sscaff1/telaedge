module.exports = {
  siteMetadata: {
    title: 'Tela Edge',
    subTitle: 'Modern, Simple',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-glamor',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
};
