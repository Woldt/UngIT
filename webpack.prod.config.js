var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
var config = require('./webpack.config.js')

config.output.path = require('path').resolve('./assets/dist');
config.output.publicPath = '/static/dist/';

config.plugins = config.plugins.concat([
    new BundleTracker({filename: './webpack-stats-prod.json'}),

    new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
            screw_ie8: true,
            keep_fnames: true
        },
        compress: {
            screw_ie8: true
        },
        comments: false
    })
]);

config.plugins.unshift(
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production'),
        }
    })
);

module.exports = config;
