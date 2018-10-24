'use strict';
const express = require('express');
const router = express.Router();
const {CREATE, VIEWMANY, VIEWONE, UPDATE, DELETE} = require('../controllers/categories')


/**
 * @api {post} /categories/new-category New Category
 * @apiName NewCategory
 * @apiGroup Category
 * @apiDescription This endpoint creates new category
 * @apiParamExample {json} Request-Example:
 *     {
 *       "name":"some name"
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
      }
    }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
            "data": {
                "name":"state", 
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
router.post('/new-category', CREATE);


/**
 * @api {get} /categories/view-categories/ ViewParentCategorys
 * @apiName ViewCategory
 * @apiGroup Category
 * @apiDescription This endpoint returns all categories
 *
 *
 * 
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
            "data": [
                {
                    "name":"state", 
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
router.get('/view-categories/', VIEWMANY);


/**
 * @api {get} /categories/view-one-category/:id ViewOneCategory
 * @apiName ViewOneCategory
 * @apiGroup Category
 * @apiDescription This endpoint returns the details of one category
 *
 *
 * 
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
            "data": {
                "name":"state", 
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
router.get('/view-one-category/:id', VIEWONE);


/**
 * @api {put} /categories/update-categories/:id UpdateCategory
 * @apiName UpdateCategory
 * @apiGroup Category
 * @apiDescription This endpoint updates categories
 *
 * 
 *
 * @apiParamExample {json} Request-Example:
 *     {
                "name":"state"
       }
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
            "data":{
               "name":"state"
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
router.put('/update-categories/:id', UPDATE);


/**
 * @api {delete} /categories/delete-categories/:id DeleteCategory
 * @apiName DeleteCategory
 * @apiGroup Category
 * @apiDescription This endpoint deletes categories
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
router.delete('/delete-categories/:id', DELETE);


module.exports = router;
