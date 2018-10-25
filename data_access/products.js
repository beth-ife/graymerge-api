'use strict';
const model = require('../models/index');
const Model = model.products;
let include = [
    {model: model.categories},
    {model: model.currencies},
    {model: model.colors},
    {model: model.images}
];


const CREATE = (data) => {


    return Model.create(data, {include: [{model: model.images}]}).then(query_resp => {
        if (!query_resp.errors) {
            return {data: query_resp}

        } else {
            throw query_resp.errors;
        }
    }).catch(err => {
        return {errors: err.toString()}
    })
};
const VIEW = (query = null) => {
    let db_query;


    db_query = Model.findAll({
        where: query,
        attributes: ['id', 'name', 'price'],
        include: [{model: model.images}, {model: model.currencies}]
    });
    return db_query.then(query_resp => {

        if (!query_resp.errors) {
            return {data: query_resp}
        } else {
            throw query_resp.errors;
        }
    }).catch(err => {
        return {errors: err.toString()}
    })
};

const VIEWONE = (query) => {
    let db_query;
    //let include = [];

    db_query = Model.findOne({where: query, include});
    return db_query.then(query_resp => {

        if (!query_resp.errors) {
            return {data: query_resp}
        } else {
            throw query_resp.errors;
        }
    }).catch(err => {
        return {errors: err.toString()}
    })
};


const UPDATE = (query, data) => {
    return Model.update(data, {where: query, returning: true}).then(query_resp => {
        if (!query_resp.errors) {

            return {data: query_resp[1]}
        } else {
            throw query_resp.errors;
        }
    }).catch(err => {
        return {errors: err.toString()}
    })
};

const DELETE = (query) => {
    return Model.destroy({where: query}).then(query_resp => {
        if (!query_resp.errors) {
            return {data: query_resp}
        } else {
            throw query_resp.errors;
        }
    }).catch(err => {
        return {errors: err.toString()}
    })
};

module.exports = {
    create: CREATE,
    update: UPDATE,
    view: VIEW,
    viewOne: VIEWONE,
    REMOVE: DELETE
};