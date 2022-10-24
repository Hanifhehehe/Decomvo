require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-minimal-blog/gatsby-config.js
    siteTitle: `DeComVo`,
    siteTitleAlt: `Decolonized Community Voices`,
    siteHeadline: `Decolonized Community Voices`,
    siteUrl: `https://decomvo.web.app`,
    siteDescription: `Decolonized Community Voices || Making decolonized voices heard!`,
    siteImage: `/banner.jpg`,
    author: `Adina Kendelbacher`,
  },
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `🏠`,
            slug: `/`,
          },
          {
            title: `Artikel`,
            slug: `/artikel`,
          },
          {
            title: `Über Uns`,
            slug: `/about`,
          },
          {
            title: `Kooperationen`,
            slug: `/kooperation`,
          },
          {
            title: 'Kontakt',
            slug: `/kontakt`,
          }
        ],
        externalLinks: [
          {
            name: `Insta`,
            url: `https://instagram.com/decomvo`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-source-notion-api`,
      options: {
        token: process.env.NOTION_TOKEN,
        databaseId: process.env.NOTION_DATABASE,
        propsToFrontmatter: true,
        lowerTitleLevel: true,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/blog/`,
        background_color: `#220B55`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#00667B`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
  ].filter(Boolean),
}
