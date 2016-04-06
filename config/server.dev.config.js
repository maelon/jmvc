var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var webpackConfigBase = require('../webpack.config.js');

var compiler = new webpack(webpackConfigBase);
var server = new webpackDevServer(compiler, {
    publicPath: ''
});
server.listen(8000, 'localhost', function (e) {
});
