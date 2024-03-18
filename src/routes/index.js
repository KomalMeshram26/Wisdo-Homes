const express = require('express');
const router = express.Router();

router.use('/post', require('./postRoutes'));
router.use('/user', require('./userRoutes'))

module.exports = router
