module.exports = {
    webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
     return config   
    },

    module: {
        rules: [
            {test: /\.txt$/, use: 'zeit/next-sass'}
        ]
    }
};