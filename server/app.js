var express = require('express');
var path = require('path');
var logger = require('morgan');

var todoRouter = require('./routes/todo');
var authRouter = require('./routes/auth');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/todo', todoRouter);
app.use('/auth', authRouter);

module.exports = app;
