var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
const bp = require('body-parser')
const mongoose = require('mongoose')
var app = express();

const Route = require('./router/router')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors())
app.use(bp.json())

app.use("/", Route)

const port = 9000;
app.listen(port,function(){
  console.log(`Server is Running at ${port} Successfully`)
})

mongoose.connect("mongodb+srv://Raj:Rajeswar143@cluster0.f9qho.mongodb.net/")
.then(resp=>{
  console.log("Connected to MongoDB Successfully")
})
.catch(err=>{
  console.log(err)
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
