/* eslint-disable */
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
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
                            'debug': true,
                        }],
                        "react"
                    ],
                    cacheDirectory: true
                } 
            },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
            
        ]
    }
})