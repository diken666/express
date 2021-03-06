var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var rankingRouter = require('./routes/ranking');
var originRouter = require('./routes/ranking_origin');
var rookieRouter = require('./routes/ranking_rookie');
var cinemaRouter = require('./routes/ranking_cinema');
var bangumiRouter = require('./routes/ranking_bangumi');
var videoPlayRouter = require('./routes/video_play');
var searchRouter = require('./routes/search');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/ranking',rankingRouter);
app.use('/ranking_origin',originRouter);
app.use('/ranking_rookie',rookieRouter);
app.use('/ranking_cinema',cinemaRouter);
app.use('/ranking_bangumi',bangumiRouter);
app.use('/video_play',videoPlayRouter);
app.use('/search',searchRouter);


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
