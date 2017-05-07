var path = require('path');
var HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
                 {
                   test: /\.js?$/,
                   loader: 'babel-loader'
                 }
               ]
    },
    plugins: [new HtmlWebPackPlugin({
        template: './index.html'
    })]
}