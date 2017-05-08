const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [{
      loader: "babel-loader"
    }]
  },
  {
    test: /\.css$/,
    use: ((env) => {
      if(env == 'production') {
        return ExtractTextPlugin.extract({
          use: [{
            loader:'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]--[hash:base64:5]',
            }
          }]
        });
      }
      else {
        return [{
            loader: 'style-loader'
          }, {
            loader:'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]--[hash:base64:5]',
            }
          }
        ];
      }
    })(process.env.NODE_ENV)
  },
  {
    test: /\.(sass|scss)$/,
    use: ((env) => {
      if(env == 'production') {
        return ExtractTextPlugin.extract({
          use: [{
            loader:'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]--[hash:base64:5]',
            }
          }, {
            loader:'sass-loader'
          }]
        });
      }
      else {
        return [{
            loader: 'style-loader'
          }, {
            loader:'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]--[hash:base64:5]',
            }
          }, {
            loader:'node-sass'
          }
        ];
      }
    })(process.env.NODE_ENV)
  },
  {
    test: /\.less$/,
    use: ((env) => {
      if(env == 'production') {
        return ExtractTextPlugin.extract({
          use: [{
            loader:'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]--[hash:base64:5]',
            }
          }, {
            loader:'less-loader'
          }]
        });
      }
      else {
        return [{
            loader: 'style-loader'
          }, {
            loader:'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]--[hash:base64:5]',
            }
          }, {
            loader:'less-loader'
          }
        ];
      }
    })(process.env.NODE_ENV)
  },
  {
    test: /\.(ttf|woff|woff2|jpeg|jpg|png|gif|svg)$/,
    use: [
      {
        loader: "file-loader",
        options: {
          outputPath: path.join("client/dist/","assets"),
          publicPath: "./client/dist/assets",
          name: '[name]--[hash:base64:5].[ext]'
        }
      }
    ]
  }
];
