module.exports = {
    pathPrefix: '/demo/olympic',
    siteMetadata: {
        title: 'Gatsby Default Starter',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-json',
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography.js',
            },

        },
        {
            resolve: 'gatsby-plugin-material-ui',
            options: {
                pathToTheme: 'src/themes/default',
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data/`,
            },
        },
    ],
};
