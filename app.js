'use strict';

require('./global/functions');
const createError = require('http-errors');
const express = require('express');

const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const uploadFile = require('./utils/fileUploadHandler');
const fileUpload = require('express-fileupload');

const indexRouter = require('./routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(fileUpload());


//Handling file uploads at this point so I dont't have to deal with uploading every time a new endpoint requires file upload
app.use(async (req, res, next) => {

    if (req.files) {
        for (let i in req.files) {

            let upload_;
            if (Array.isArray(req.files[i])) {
                upload_ = req.files[i];
            } else {
                upload_ = req.files[i][0]
            }

            await uploadFile(upload_).then(file => {
                req.body[i] = file;
                next();
            }).catch(err => {
                next(err)
            });


        }
        delete req.files;

    } else {
        next();
    }

});


app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({
        status: false,
        meta: {
            msg: 'API encountered an error'
        },
        errors: err.toString()
    })
    ;
});

module.exports = app;
