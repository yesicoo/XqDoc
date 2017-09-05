var express = require('express');
var router = express.Router();
var menudao =require('../DbDao/MenusDao');

/* GET home page. */
router.get('/', function(req, res, next) {
    var menus = menudao.allMenus();
    console.log(menus);
    res.render('index', { title: 'Xq.Doc',menus:menus });
});

module.exports = router;
