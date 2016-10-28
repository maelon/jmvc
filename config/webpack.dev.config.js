'use strict'

const path = require('path');
const webpack = require('webpack');

const config = require('./webpack.config.js');
config.entry['jmvc'] = [
    'webpack-dev-server/client?http://localhost:8000/',
    'webpack/hot/dev-server',
    path.resolve(__dirname, '../src/jmvc.js')
];
config.output = {
    'path': path.resolve(__dirname, '../dist'),
    'filename': '[name].[hash].js'
};
config.devtool = 'inline-source-map';
//config.devtool = false;
config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin()
]);

module.exports = config;
