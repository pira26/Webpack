const path = require('path');
const express = require('express');

let app = express();

const webpack = require('webpack');
const config = require('./webpack.config.developement.js');
const compiler = webpack(config);

app.use(require('connect-history-api-fallback')({verbose: false}));
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

const server = app.listen(8000, 'localhost', function(err) {
  if(err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:8000', server.address().port);
});
