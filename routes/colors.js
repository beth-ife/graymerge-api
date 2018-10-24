'use strict';
const express = require('express');
const router = express.Router();
const {CREATE, VIEWMANY, VIEWONE, UPDATE, DELETE} = require('../controllers/colors')


/**
 * @api {post} /colors/new-color New Color
 * @apiName NewColor
 * @apiGroup Color
 * @apiDescription This endpoint creates new color
 * @apiParamExample {json} Request-Example:
 *     {
 *       "name":"some name",
 *       "color_swatch":"http://web-link-to-color-swatch"
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
router.post('/new-color', CREATE);


/**
 * @api {get} /colors/view-colors/ ViewParentColors
 * @apiName ViewColor
 * @apiGroup Color
 * @apiDescription This endpoint returns all colors
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
router.get('/view-colors/', VIEWMANY);


/**
 * @api {get} /colors/view-one-color/:id ViewOneColor
 * @apiName ViewOneColor
 * @apiGroup Color
 * @apiDescription This endpoint returns the details of one color
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
router.get('/view-one-color/:id', VIEWONE);


/**
 * @api {put} /colors/update-colors/:id UpdateColor
 * @apiName UpdateColor
 * @apiGroup Color
 * @apiDescription This endpoint updates colors
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
router.put('/update-colors/:id', UPDATE);


/**
 * @api {delete} /colors/delete-colors/:id DeleteColor
 * @apiName DeleteColor
 * @apiGroup Color
 * @apiDescription This endpoint deletes colors
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
router.delete('/delete-colors/:id', DELETE);


module.exports = router;
