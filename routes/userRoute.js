var express = require('express');
var router = express.Router();

// 用户首页面
router.get('/', function(req, res, next) {
  res.render('user/index', {
    title: '众乐首页'
  });
});

module.exports = router;
