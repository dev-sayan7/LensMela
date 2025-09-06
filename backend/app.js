var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();

const connectDB = require('./database/dbConfig');
connectDB();

const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/usersRoutes');
const contestRouter =  require('./routes/contestRoutes');

var app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/contests', contestRouter);

module.exports = app;
