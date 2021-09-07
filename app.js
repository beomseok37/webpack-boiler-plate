const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const indexRouter = require('./routes/index');


const app = express();
const port = process.env.port || 3000

app.use(cookieParser());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('views',__dirname+"/views");
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname+'/public'));

app.use('/',indexRouter);




const server = app.listen(port);