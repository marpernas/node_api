const express = require('express');
var router = express.Router();

router.get('/:id?', require('./services/find'));
router.post('/', require('./services/create'));
router.delete('/:id/:productId', require('./services/remove'));

module.exports = router;