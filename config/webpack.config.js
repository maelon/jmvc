'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
    'entry': {
        'jmvc': [ path.resolve(__dirname, '../src/jmvc.js') ]
    },
    'output': {
        'path': path.resolve(__dirname, '../dist'),
        'filename': '[name].min.js',
        'sourceMapFilename': '[name].js.map',
        'library': '[name]',
        'libraryTarget': 'umd'
    },
    'devtool': 'false',
    'resolve': {
        'alias': {
            'root': path.resolve(__dirname, '../src'),
            'pslib': path.resovle(__dirname, '../src/pslib'),
            'facade': path.resovle(__dirname, '../src/facade'),
            'model': path.resovle(__dirname, '../src/model'),
            'view': path.resovle(__dirname, '../src/view'),
            'controller': path.resovle(__dirname, '../src/controller'),
            'command': path.resovle(__dirname, '../src/command'),
            'proxy': path.resovle(__dirname, '../src/proxy')
        },
		'extensions': ['', '.js']
	},
    'resolveLoader': {
        'modulesDirectories': [path.resolve(__dirname, '../node_modules')]
    },
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
