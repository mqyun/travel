var express = require('express');
var router = express.Router();

var crypto = require('crypto');

var adminmodel = require('../models/adminmodel');

// 管理员登录页面
router.get('/', function(req, res, next) {
  res.render('admin/login', {
    title: '管理员登录'
  });
});

// 管理员登录
router.post('/login', function(req, res, next) {
  var hash = crypto.createHash('md5');
  var account = req.body.account;
  var reqpassword = req.body.password;
  hash.update(reqpassword);
  var password = hash.digest('hex');
  adminmodel.selectAdmin(account, function(err, rows) {
    if (err) {
      res.json({
        'error': err
      });
      return next(err);
    }
    if (rows.length == 0) {
      res.json({
        'error': '用户不存在'
      });
      return next(err);
    }
    if (rows[0].password != password) {
      res.json({
        'error': '密码错误'
      });
      return next(err);
    }
    req.session.name = rows[0].name;
    req.session.uid = rows[0].id;
    req.session.usertype = 'admin';
    req.session.quanxian = '1';
    res.json({
      'success': '登录成功'
    });
  });
});

// 管理员产品管理页面
router.get('/chanpin', function(req, res, next) {
  adminmodel.getAllChanPinPage(function(err, pagenum) {
    if (err) {
      return next(err);
    }
    res.render('admin/chanpin/index', {
      title: '管理员首页',
      pagenum: pagenum[0]
    });
  });
});

// 获取某一页产品信息
router.post('/pageChanPinInfo', function(req, res, next) {
  var page = (req.body.page - 1) * 10 || 0;
  adminmodel.selectAllChanPin(page, function(err, chanpinList) {
    if (err) {
      return next(err);
    }
    res.render('admin/chanpin/_ChanPinInfoList', {
      chanpinList: chanpinList
    }, function(err, html) {
      res.json({
        'success': true,
        'view': html
      })
    });
  });
});

module.exports = router;
