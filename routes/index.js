var express = require('express');
var router = express.Router();
var resultController = require('../controllers/result')
var jwt = require('jsonwebtoken')

const midty = (req, res, next) => {
  if(req.headers.hasOwnProperty('token')){
    var decoded = jwt.verify(req.headers.token, "dokount")
    req.headers.oten = decoded
    next()
  }
  else {
    res.send("Maaf anda harus login")
  }
}


router.post('/', midty, resultController.insert);
router.get('/all', resultController.fetch);
router.delete('/', midty, resultController.lost);
router.put('/', midty, resultController.update);
router.get('/', midty, resultController.fetchId);


module.exports = router;
