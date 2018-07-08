module.exports = {
  siteMetadata: {
    version: require('./package.json').version,
    title: 'DCommons Lab | Software Development &amp; Consulting | hello@dcommons.lab | Oakville, Ontario',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
     resolve: `gatsby-source-filesystem`,
     options: {
       path: `${__dirname}/src/pages`,
       name: 'pages',
     },
   },
   {
     resolve: `gatsby-transformer-remark`,
     options: {
       plugins: [
         {
           resolve: `gatsby-remark-images`,
           options: {
             maxWidth: 590,
           },
         },
         {
           resolve: `gatsby-remark-responsive-iframe`,
           options: {
             wrapperStyle: `margin-bottom: 1.0725rem`,
           },
         },
         'gatsby-remark-prismjs',
         'gatsby-remark-copy-linked-files',
         'gatsby-remark-smartypants',
       ]
     }
   },
  //  {
  //    resolve: `gatsby-plugin-google-analytics`,
  //    options: {
  //      trackingId: "UA-123654-14",
  //      head: false
  //    },
  //  }
  ],
};
