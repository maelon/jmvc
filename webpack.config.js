var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    'entry': {
        'app': ['./test-es6.js']
    },
    'output': {
        'path': path.resolve(__dirname, 'build'),
        'publicPath': '/static/',
        'filename': '[name].[chunkhash].js',
        'sourceMapFilename': '[name].[chunkhash].js'
    },
    'devtool': 'inline-source-map',
    'module': {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    'plugins': [
        new webpack.optimize.UglifyJsPlugin({
            'compress': {
                'warnings': false
            }
        }),
        new htmlWebpackPlugin()
    ]
}
