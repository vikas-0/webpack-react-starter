/* eslint-disable */
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: [
        './src/index.jsx',
    ],
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'An App',
            template: 'src/assets/index.html',
            favicon: 'src/assets/favicon.ico',
            hash:true,
            
        })
    ],
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].bundle.js',
        //publicPath: '/static/',
    },
    module: {
        rules: [
            {   test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader',
                options: {
                    presets:['es2015', 'react'],
                    cacheDirectory: true
                } 
            },
            
        ]
    },
}