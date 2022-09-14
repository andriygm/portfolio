const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');

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
            // {
            //     test: /\.ejs$/,
            //     use: ['ejs-loader']
            // },
            // {
            //     test: /\.(hbs|handlebars)$/,
            //     use: ['handlebars-loader']
            // },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[hash][ext]'
                }
            },
            {
                test: /\.(woff|woff2|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'font/[hash][ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/views/index.html',
            title: 'Home',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/views/work.html',
            title: 'Work',
            filename: 'work.html'
        }),
        // new HtmlWebpackPartialsPlugin({
        //     path: path.join(__dirname, './src/views/partials/nav.html'),
        //     location: 'navigation',
        //     template_filename: ['index.html']
        // })
    ]
};