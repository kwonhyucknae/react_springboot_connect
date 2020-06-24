const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

    entry: ['./src/index.tsx'],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['babel-loader', 'ts-loader'],
            },
        ],
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
        ]
    },

    resolve: {
        extensions: ['.js', 'jsx', '.ts', '.tsx'],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
};