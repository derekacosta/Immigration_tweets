const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['es2015', 'react'],
                },
            },
            {
                test: /\.s?css$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 125000, // Convert images < 8kb to base64 strings
                        name: 'img/[name].[ext]'
                    }
                }]
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public'
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    node: {
            console: true,
            fs: 'empty',
            net: 'empty',
            tls: 'empty'
    },
    target: 'web'
};
