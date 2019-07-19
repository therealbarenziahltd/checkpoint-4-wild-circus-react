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
// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, 'public')));

// Initialize auth strategies config
localAuthStrategy;
jwtAuthStrategy;

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/comments', commentariesRouter);
app.use('/prices', pricesRouter);
app.use('/pictures', picturesRouter);
app.use('/shows', showsRouter);

module.exports = app;
