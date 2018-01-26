var express = require('express');
var router = express.Router();

var usermodel = require('../models/usermodel');

// 用户首页面
router.get('/', function(req, res, next) {
  usermodel.getAllFenLei(function(err, fenleiList) {
    if (err) {
      return next(err);
    }
    usermodel.getNewChanPin(function(err, chanpinList) {
      if (err) {
        return next(err);
      }
      res.render('user/index/index', {
        title: '众乐首页',
        fenleiList: fenleiList,
        chanpinList: chanpinList
      });
    });
  });
});

module.exports = router;
