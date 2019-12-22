module.exports = {
    mode: 'development',
    entry: './src/js/app.js',
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    devServer:{
        contentBase: './dist'
    },
};
