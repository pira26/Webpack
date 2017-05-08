const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const rimraf = require('rimraf');

module.exports = {
  entry: ["./client/src/index.js"],
  output: {
    path: path.join(__dirname, "..", "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: require('./webpack.loaders.js')
  },
  plugins: [
    function() {
      console.log("Clearing /dist directory");
      rimraf.sync(path.join(__dirname, "..", "dist"), require('fs'), (err) => {
        if(er) console.log("Clearing of /dist directory failed", err);
      });
    },
    new ExtractTextPlugin("style.css"),
    new webpack.DefinePlugin({
      "environment": '"production"',
      NODE_ENV: JSON.stringify("production")
    }),
    new (webpack.optimize.UglifyJsPlugin),
    new HtmlWebpackPlugin({template: path.join("client", "dist", "index.html")}),
  ],
  resolve: {
    modules: ["node_modules", "client"],
    plugins: [
      new DirectoryNamedWebpackPlugin()
    ]
  }
}
