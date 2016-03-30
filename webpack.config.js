module.exports = {
    'entry': './test-es6.js',
    'output': {
        'path': __dirname,
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
    }
}
