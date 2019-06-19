module.exports = {
  siteMetadata: {
    title: `Cтраница Артёма Рыжкова`,
    description: `Страница начинающего фронтенд разработчика`,
    url: ``,
    twitterUsername: `@temmyriz`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/pages/blog-posts/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Artyom's page`,
        short_name: `ArtyomR`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#225378`,
        display: `standalone`,
        icon: `src/images/icon.svg`, 
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
