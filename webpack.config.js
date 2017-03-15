let path = require("path");
let webpack = require('webpack');
let BundleTracker = require('webpack-bundle-tracker');
let commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
    name: "common",
    filename: "common.bundle.js",
});

module.exports = {
    context: __dirname,

    entry: {
        activitiesContainer: './assets/js/containers/ActivitiesContainer',
        allActivitiesContainer: './assets/js/containers/AllActivitiesContainer',
        adaptionChips: './assets/js/containers/AdaptionChips',
        suitedForPicker: './assets/js/containers/SuitedForPicker',
        activityPicker: './assets/js/containers/ActivityPicker',
        weekPicker: './assets/js/containers/WeekPicker',
    },

    output: {
        path: path.resolve('./assets/bundles/'),
        filename: '[name].bundle.js',
        publicPath: 'http://localhost:3000/assets/bundles/', // Tell django to use this URL to load packages and not use STATIC_URL + bundle_name
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(), // don't reload if there is an error
        new BundleTracker({filename: './webpack-stats.json'}),
        commonsPlugin
    ],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot-loader', 'babel-loader?presets[]=es2015,presets[]=stage-0,presets[]=react,plugins[]=transform-runtime,plugins[]=transform-decorators-legacy'],
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ],
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },
};
