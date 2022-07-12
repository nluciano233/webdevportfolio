var express = require('express');
var router = express.Router();
var form_controller = require('../controllers/formController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lucian | Full-stack Web Developer' });
});

router.post('/send-form', form_controller.send);

module.exports = router;
