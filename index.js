const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

var app = express();
var server = http.createServer(app);

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// database
var mongoDb = mongoose.connect('mongodb://localhost/ecommerce');
var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error'));
db.once('open', function(){
    console.log('connected');
})

// add routes
require('./routes')(app);

// fire up express
server.listen(9000, function () {
    console.log('servidor no ar')
});