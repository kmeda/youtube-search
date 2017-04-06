var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname+"/static",
    filename: "bundle.js",
    publicPath: "/static/"
  },
  module: {
   loaders: [{
     test: /\.js$/,
     exclude: /node_modules/,
     loader: "babel-loader",
     include: __dirname,
     query: {
       presets: [ 'es2015', 'react', 'react-hmre' ]
     }
   },
   {
    test: /\.scss$/,
    loaders: ExtractTextPlugin.extract('css-loader!sass-loader'),
  }]
},
  plugins: [
      new ExtractTextPlugin({
        filename: 'style.css',
        disable: false,
        allChunks: true }),
      new HtmlWebpackPlugin({
        filename: './index.html',
        template: 'index.html'
      })
    ]
}
