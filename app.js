const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const path = require('path');
//const indexRouter = require('./routes/index');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);
const port = process.env.port || 3000

//app.use('/', indexRouter);

app.set('views', path.join(__dirname, 'dist'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(cookieParser());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(__dirname+'/src'));

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats:{colors:true}
  })
);



const server = app.listen(port);