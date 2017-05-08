const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  devtool: "source-map",
  entry: ["webpack-hot-middleware/client", "./client/src/index.js"],
  output: {
    path: path.join(__dirname, "..", "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: require('./webpack.loaders.js')
  },
  plugins: [
    new ExtractTextPlugin("style.css"),
    new webpack.DefinePlugin({
      "environment": '"developement"',
      NODE_ENV: JSON.stringify("developement")
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({template: path.join("client", "dist", "index.html")}),
  ],
  resolve: {
    modules: ["node_modules", "client"],
    plugins: [
      new DirectoryNamedWebpackPlugin()
    ]
  }
}
