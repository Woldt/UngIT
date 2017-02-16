var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    context: __dirname,

    entry: [
        //'webpack-dev-server/client?http://localhost:3000',
        //'webpack/hot/only-dev-server',
        './assets/js/index'
    ],

    output: {
        path: path.resolve('./public/'),
        //filename: '[name]-[hash].js',
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/public/', // Tell django to use this URL to load packages and not use STATIC_URL + bundle_name
    },

    plugins: [
        //new webpack.HotModuleReplacementPlugin(),
        //new webpack.NoEmitOnErrorsPlugin(), // don't reload if there is an error
        //new BundleTracker({filename: './webpack-stats.json'}),
    ],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot-loader', 'babel-loader?presets[]=es2015,presets[]=stage-0,presets[]=react,plugins[]=transform-runtime'],
            }
        ],
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },
}