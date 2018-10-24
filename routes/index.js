'use strict';
const express = require('express');
const router = express.Router();

/* GET home page. */
router.use('/categories', require('./categories'));
router.use('/products', require('./products'));
router.use('/colors', require('./colors'));
router.use('/currencies', require('./currencies'));
router.use('/images', require('./images'));


module.exports = router;
