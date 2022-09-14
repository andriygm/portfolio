const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/entry.js'
    },
    output: {
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(scss)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.pug$/,
                use: ['html-loader', 'pug-html-loader']
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/html/index.ejs',
            title: 'Home — Andriy Massimilla',
        })
    ]
};