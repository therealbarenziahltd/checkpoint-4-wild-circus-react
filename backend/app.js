var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
var commentariesRouter = require('./routes/comments');
var pricesRouter = require('./routes/prices');
var picturesRouter = require('./routes/pictures');
var showsRouter = require('./routes/shows');

const { localAuthStrategy } = require('./routes/strategies/local');
const { jwtAuthStrategy } = require('./routes/strategies/jwt');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, 'public')));

// Initialize auth strategies config
localAuthStrategy;
jwtAuthStrategy;

app.use('/', indexRouter);
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/comments', commentariesRouter);
app.use('/api/prices', pricesRouter);
app.use('/api/pictures', picturesRouter);
app.use('/api/shows', showsRouter);

module.exports = app;
