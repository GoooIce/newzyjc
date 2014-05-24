var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    res.redirect('/');
});

router.get('/new', function(req, res){

});

router.post('/new', function(req, res){

});

router.get('/:news_id/view', function(req, res) {

});

router.post('/:news_id/del', function(req, res) {

});

module.exports = router;
