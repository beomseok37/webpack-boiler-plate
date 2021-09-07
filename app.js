const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const indexRouter = require('./routes/index');
const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);
const port = process.env.port || 3000

app.use(cookieParser());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(__dirname+'/src'));

// app.use('/',indexRouter);
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats:{colors:true}
  })
);

app.get("/", function(req, res) {});

const server = app.listen(port);