var express = require('express');
var router = express.Router();
var resultController = require('../controllers/result')
/* GET home page. */
router.post('/', resultController.insert);
router.get('/', resultController.fetch);
router.delete('/:id', resultController.lost);

module.exports = router;
