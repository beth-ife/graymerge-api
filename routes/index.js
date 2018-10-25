'use strict';
const express = require('express');
const router = express.Router();

/* GET home page. */
router.use('/categories', require('./categories'));
router.use('/products', require('./products'));
router.use('/colors', require('./colors'));
router.use('/currencies', require('./currencies'));
router.use('/images', require('./images'));
router.use('/upload-image',(req,res,next)=>{
    return res.json(req.body)
});
router.get('/',(req,res,next)=>{
    return res.json({status:true,message:"Hello and Welcome! Please find the docs at http://pollmatrix_docs.surge.sh/"})
});


module.exports = router;
