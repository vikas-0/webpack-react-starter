/* eslint-disable */
const webpack = require('webpack')
const merge = require('webpack-merge')
const MinifyPlugin = require("babel-minify-webpack-plugin")
const common = require('./webpack.common.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin =require('optimize-css-assets-webpack-plugin')
const DynamicCdnWebpackPlugin = require('dynamic-cdn-webpack-plugin')
// const CompressionPlugin = require('compression-webpack-plugin')
 
module.exports = merge(common, {
    devtool:'source-map',
    plugins: [
        new MinifyPlugin(),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV':JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin('style.css'),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint : true
        }),
        new DynamicCdnWebpackPlugin({
            only: ['react', 'react-dom']
        })
    ],
    module:{
        rules:[
            {   test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader',
                options: {
                    presets:[
                        ['env', {
                            'targets': {
                                'browsers': ['last 2 versions'],
                            },
                            'modules': false,
                            'debug': false,
                        }],
                        "react"
                    ],
                    cacheDirectory: true
                } 
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            
        ]
    }
})