/* eslint-disable */
const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin =require('optimize-css-assets-webpack-plugin')
const DynamicCdnWebpackPlugin = require('dynamic-cdn-webpack-plugin')
// const CompressionPlugin = require('compression-webpack-plugin')
 
module.exports = merge(common, {
    devtool:'source-map',
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
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
        // new CompressionPlugin({
        //     asset: '[path].gz[query]',
        //     algorithm: 'gzip',
        //     test: /\.(js|html)$/,
        //     threshold: 10240,
        //     minRatio: 0.8
        // })
    ],
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }
        ]
    }
})