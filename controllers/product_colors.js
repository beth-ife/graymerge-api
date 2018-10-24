'use strict';
const createError = require('http-errors');

const {create, REMOVE, view, viewOne, update,} = require('../data_access/product_colors');


const CREATE = (req, res, next) => {
    let status;
    if (req.query.token) {
        delete req.query.token
    }



    let query_data = JSON.parse(JSON.stringify(req.body));

    return create(query_data).then(query_response => {
        if (!query_response.errors) {
            return SuccessResponse(res, "created", query_response.data);
        } else {
            status = 400;
            throw query_response.errors;
        }
    }).catch(err => {
        return next(createError((typeof (status) !== 'undefined') ? status : 500, err));

    })
};


const VIEWMANY = (req, res, next) => {

    let status;

    return view().then(query_response => {
        query_response = JSON.parse(JSON.stringify(query_response))
        if (!query_response.errors) {

            return SuccessResponse(res, "successfully retrieved", query_response.data);
        } else {
            status = 400;
            throw query_response.errors;
        }
    }).catch(err => {
        return next(createError((typeof (status) !== 'undefined') ? status : 500, err.toString()));


    })
};

const VIEWONE = (req, res, next) => {

    let status;

    let query = {id: req.params.id};
    return viewOne(query).then(query_response => {
        if (!query_response.errors) {
            query_response.status = true;
            return SuccessResponse(res, "successfully retrieved", query_response.data);
        } else {
            status = 400;
            throw query_response.errors;
        }
    }).catch(err => {
        return next(createError((typeof (status) !== 'undefined') ? status : 500, err.toString()));


    })
};


const UPDATE = (req, res, next) => {
    let status;
    if (req.query.token) {
        delete req.query.token
    }
    return update({id: req.params.id}, req.body).then(query_response => {
        if (!query_response.errors) {
            query_response.status = true;
            return SuccessResponse(res, "successfully updated", query_response.data);
        } else {
            status = 400;
            throw query_response.errors;
        }
    }).catch(err => {
        return next(createError((typeof (status) !== 'undefined') ? status : 500, err.toString()));


    })
};

const DELETE = (req, res, next) => {
    let status;
    if (req.query.token) {
        delete req.query.token
    }
    return REMOVE({id: req.params.id}).then(query_response => {
        if (!query_response.errors) {
            query_response.status = true;
            return SuccessResponse(res, "successfully deleted", query_response.data);
        } else {
            status = 400;
            throw query_response.errors;
        }
    }).catch(err => {
        return next(createError((typeof (status) !== 'undefined') ? status : 500, err.toString()));


    });
};

module.exports = {
    CREATE, VIEWMANY, VIEWONE, UPDATE, DELETE
};

