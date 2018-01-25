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
      title: '产品管理',
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

// 获取产品分类管理页面
router.get('/fenlei', function(req, res, next) {
  adminmodel.getAllFenLei(function(err, fenleiList) {
    if (err) {
      return next(err);
    }
    res.render('admin/fenlei/index', {
      title: '分类管理',
      fenleiList: fenleiList
    });
  });
});

// 添加分类
router.post('/addFenLei', function(req, res, next) {
  var name = req.body.name;
  adminmodel.addFenLei(name, function(err) {
    if (err) {
      res.json({
        'error': err
      });
      return next(err);
    }
    res.json({
      'success': '添加分类成功'
    });
  });
});

// 修改分类
router.post('/xgFenLei', function(req, res, next) {
  var fenleiid = req.body.fenleiid;
  var name = req.body.name;
  adminmodel.xgFenLei(name, fenleiid, function(err) {
    if (err) {
      res.json({
        'error': err
      });
      return next(err);
    }
    res.json({
      'success': '修改分类名称成功'
    });
  });
});

module.exports = router;
