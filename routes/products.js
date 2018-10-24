'use strict';
const express = require('express');
const router = express.Router();
const {CREATE, VIEWMANY, VIEWONE, UPDATE, DELETE} = require('../controllers/products')


/**
 * @api {post} /products/new-product New Product
 * @apiName NewProduct
 * @apiGroup Product
 * @apiDescription This endpoint creates new product
 * @apiParamExample {json} Request-Example:
 *     {
 *
 *     }
 *
 * @apiParamExample {json} Model-Object:
 *     {
         id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        currencyId: {
            allowNull: false,
            type: DataTypes.UUID,
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
            references: {
                model: "currencies",
                key: "id",
                deferrable: DataTypes.Deferrable.INITIALLY_DEFERRED
            }
        },
        categoryId: {
            allowNull: false,
            type: DataTypes.UUID,
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
            references: {
                model: "categories",
                key: "id",
                deferrable: DataTypes.Deferrable.INITIALLY_DEFERRED
            }
        }

    }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
            "data": {
         *
         *     },
            "success": true,
            "message": "successfully created"
        }
 @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400
 *      {
            "status": false,
            "message": "Bad Request",
            "errors": "some errror message"
        }
 *
 */
router.post('/new-product', CREATE);


/**
 * @api {get} /products/view-products/ ViewParentProducts
 * @apiName ViewProduct
 * @apiGroup Product
 * @apiDescription This endpoint returns all products
 *
 *
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
            "data": [
                 {
         *
         *     }

            ],
            "success": true,
            "message": "successfully retrieved"
        }


 @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400
 *      {
            "status": false,
            "message": "Bad Request",
            "errors": "some error message"
        }
 *
 */
router.get('/view-products/', VIEWMANY);


/**
 * @api {get} /products/view-one-product/:id ViewOneProduct
 * @apiName ViewOneProduct
 * @apiGroup Product
 * @apiDescription This endpoint returns the details of one product
 *
 *
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
            "data":  {
         *
         *     },
            "success": true,
            "message": "successfully retrieved"
        }


 @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400
 *      {
            "status": false,
            "message": "Bad Request",
            "errors": "some error message"
        }
 *
 */
router.get('/view-one-product/:id', VIEWONE);


/**
 * @api {put} /products/update-products/:id UpdateProduct
 * @apiName UpdateProduct
 * @apiGroup Product
 * @apiDescription This endpoint updates products
 *
 *
 *
 * @apiParamExample {json} Request-Example:
 *      {
         *
         *
         }
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
            "data": {
         *
         *     },
            "success": true,
            "message": "successfully updated"
        }


 @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400
 *      {
            "status": false,
            "message": "Bad Request",
            "errors": "some error message"
        }
 *
 */
router.put('/update-products/:id', UPDATE);


/**
 * @api {delete} /products/delete-products/:id DeleteProduct
 * @apiName DeleteProduct
 * @apiGroup Product
 * @apiDescription This endpoint deletes products
 *
 *
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
            "data":1 //number of records deleted,
            "success": true,
            "message": "successfully deleted"
        }


 @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400
 *      {
            "status": false,
            "message": "Bad Request",
            "errors": "some error message"
        }
 *
 */
router.delete('/delete-products/:id', DELETE);


module.exports = router;
