const express = require('express');
const indexRouter = express.Router();

indexRouter.get('/',function(req,res,next){
  res.render('index.html');
})

module.exports =indexRouter;