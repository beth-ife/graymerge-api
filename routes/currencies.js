'use strict';
const express = require('express');
const router = express.Router();
const {CREATE, VIEWMANY, VIEWONE, UPDATE, DELETE} = require('../controllers/currencies')


/**
 * @api {post} /currencies/new-currency New Currency
 * @apiName NewCurrency
 * @apiGroup Currency
 * @apiDescription This endpoint creates new currency
 * @apiParamExample {json} Request-Example:
 *     {
 *       "name":"naira",
 *       "symbol":"NGN"
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
          unique: true,
          allowNull: false,
      },
       symbol: {
          type: DataTypes.STRING,
          allowNull: false,
      },

    }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
            "data": {
                "name":"naira",
                "symbol":"NGN"
                "id":"2db37500-47d2-11e8-8030-d5e6b3bbc68c"
            },
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
router.post('/new-currency', CREATE);


/**
 * @api {get} /currencies/view-currencies/ ViewParentCurrencys
 * @apiName ViewCurrency
 * @apiGroup Currency
 * @apiDescription This endpoint returns all currencies
 *
 *
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
            "data": [
                {
                "name":"naira",
                "symbol":"NGN"
                "id":"2db37500-47d2-11e8-8030-d5e6b3bbc68c"
            }

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
router.get('/view-currencies/', VIEWMANY);


/**
 * @api {get} /currencies/view-one-currency/:id ViewOneCurrency
 * @apiName ViewOneCurrency
 * @apiGroup Currency
 * @apiDescription This endpoint returns the details of one currency
 *
 *
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
            "data": {
                "name":"naira",
                "symbol":"NGN"
                "id":"2db37500-47d2-11e8-8030-d5e6b3bbc68c"
            },
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
router.get('/view-one-currency/:id', VIEWONE);


/**
 * @api {put} /currencies/update-currencies/:id UpdateCurrency
 * @apiName UpdateCurrency
 * @apiGroup Currency
 * @apiDescription This endpoint updates currencies
 *
 *
 *
 * @apiParamExample {json} Request-Example:
 *     {
                "name":"naira",

            }
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
            "data":{
                "name":"naira",
                "symbol":"NGN"
                "id":"2db37500-47d2-11e8-8030-d5e6b3bbc68c"
            },
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
router.put('/update-currencies/:id', UPDATE);


/**
 * @api {delete} /currencies/delete-currencies/:id DeleteCurrency
 * @apiName DeleteCurrency
 * @apiGroup Currency
 * @apiDescription This endpoint deletes currencies
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
router.delete('/delete-currencies/:id', DELETE);


module.exports = router;
