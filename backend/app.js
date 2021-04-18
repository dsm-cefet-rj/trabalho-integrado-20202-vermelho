var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var pedidosExRouter = require('./routes/pedidosEx');
var cardapiosExRouter = require('./router/cardapiosEx')

const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/backend'
const connect = mongoose.connect(url)

connect.then(db => {
    console.log("connected correctly to the server")
}, err => {console.log(err)})

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter); // Porta
app.use('/pedidosEx', pedidosExRouter);
//app.use('/cardapiosEx', cardapiosExRouter);

module.exports = app;