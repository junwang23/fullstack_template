const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: {
        "bundle.js": [__dirname + '/js/index.jsx']
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name]',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
            { test: /\.jsx?/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({filename: "bundle.css"})
    ]
};
module.exports = config;