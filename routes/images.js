'use strict';
const express = require('express');
const router = express.Router();
const {CREATE, VIEWMANY, VIEWONE, UPDATE, DELETE} = require('../controllers/images')


/**
 * @api {post} /images/new-image New Image
 * @apiName NewImage
 * @apiGroup Image
 * @apiDescription This endpoint creates new image
 * @apiParamExample {json} Request-Example:
 *     {
 *       "image":"some-image-url",
 *       "productId":"some-product-id"
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
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        productId: {
            allowNull: false,
            type: DataTypes.UUID,
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
            references: {
                model: "products",
                key: "id",
                deferrable: DataTypes.Deferrable.INITIALLY_DEFERRED
            }
        },

    }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
            "data": {
         *       "image":"some-image-url",
         *       "productId":"some-product-id"
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
router.post('/new-image', CREATE);


/**
 * @api {get} /images/view-images/ ViewParentImages
 * @apiName ViewImage
 * @apiGroup Image
 * @apiDescription This endpoint returns all images
 *
 *
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
            "data": [
                 {
         *       "image":"some-image-url",
         *       "productId":"some-product-id"
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
router.get('/view-images/', VIEWMANY);


/**
 * @api {get} /images/view-one-image/:id ViewOneImage
 * @apiName ViewOneImage
 * @apiGroup Image
 * @apiDescription This endpoint returns the details of one image
 *
 *
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
            "data":  {
         *       "image":"some-image-url",
         *       "productId":"some-product-id"
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
router.get('/view-one-image/:id', VIEWONE);


/**
 * @api {put} /images/update-images/:id UpdateImage
 * @apiName UpdateImage
 * @apiGroup Image
 * @apiDescription This endpoint updates images
 *
 *
 *
 * @apiParamExample {json} Request-Example:
 *      {
         *       "image":"some-image-url",
         *
         }
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
            "data": {
         *       "image":"some-image-url",
         *       "productId":"some-product-id"
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
router.put('/update-images/:id', UPDATE);


/**
 * @api {delete} /images/delete-images/:id DeleteImage
 * @apiName DeleteImage
 * @apiGroup Image
 * @apiDescription This endpoint deletes images
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
router.delete('/delete-images/:id', DELETE);


module.exports = router;
