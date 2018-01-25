var db = require('./dboperation');

module.exports = {
  // 验证管理员
  selectAdmin: function(account, callback) {
    var sql = "select * from admin where account = ?;";
    db.exec(sql, account, function(err, rows) {
      if (err) {
        callback(err);
      }
      callback(err, rows);
    });
  },
  // 获取所有产品页码
  getAllChanPinPage: function(callback) {
    var sql = "select ceil(count(id)/10) as page from chanpin;";
    db.exec(sql, '', function(err, rows) {
      if (err) {
        callback(err);
      }
      callback(err, rows);
    });
  },
  // 产品管理页面显示所有产品
  selectAllChanPin: function(page, callback) {
    var sql = "select chanpin.*, fenlei.name as fenleiname from chanpin left join fenlei on chanpin.fenlei = fenlei.id order by id desc limit " + page + ", 10;";
    db.exec(sql, '', function(err, rows) {
      if (err) {
        callback(err);
      }
      callback(err, rows);
    });
  },
  // 添加产品基本信息
  addChanPinInfo: function(place, introduce, fenlei, price, renshu, starttime, youwantime, adminid, callback) {
    var sql = "insert into chanpin(place, introduce, fenlei, price, renshu, starttime, youwantime, adminid) values(?,?,?,?,?,?,?,?);";
    db.exec(sql, [place, introduce, fenlei, price, renshu, starttime, youwantime, adminid], function(err, rows) {
      if (err) {
        callback(err);
      }
      callback(err, rows);
    });
  },
  // 上传产品图片获取刚添加的产品的id
  getJustAddChanPin: function(adminid, callback) {
    var sql = "select * from chanpin where adminid = ? order by id desc limit 0, 1;";
    db.exec(sql, [place, introduce, fenlei, price, renshu, starttime, youwantime, adminid], function(err, rows) {
      if (err) {
        callback(err);
      }
      callback(err, rows);
    });
  },
  // 添加图片路径
  addChanPinImg: function(chanpinid, url, callback) {
    var sql = "insert into chanpinimg(chanpinid, url) values(?,?);";
    db.exec(sql, [chanpinid, url], function(err) {
      if (err) {
        callback(err);
      }
      callback(err);
    });
  },
  // 更改hasImg字段
  updateChanPinHasImg: function(chanpinid, callback) {
    var sql = "update chanpin set hasimg = 1 where id = ?;";
    db.exec(sql, chanpinid, function(err) {
      if (err) {
        callback(err);
      }
      callback(err);
    });
  },
  // 获取所有订单页码
  getAllDingDanPage: function(callback) {
    var sql = "select ceil(count(id)/10) as page from dingdan;";
    db.exec(sql, '', function(err, rows) {
      if (err) {
        callback(err);
      }
      callback(err, rows);
    });
  },
  // 显示所有订单
  selectAllDingDan: function(page, callback) {
    var sql = "select dingdan.*, chanpin.place from dingdan left join chanpin on dingdan.chanpinid = chanpin.id order by id desc limit " + page + ", 10;";
    db.exec(sql, account, function(err, rows) {
      if (err) {
        callback(err);
      }
      callback(err, rows);
    });
  },
  // 处理订单
  handleDingDan: function(id, callback) {
    var sql = "update dingdan set state = 1 where id = ?;";
    db.exec(sql, id, function(err) {
      if (err) {
        callback(err);
      }
      callback(err);
    });
  },
  // 获取所有用户页码
  getAllUserPage: function(callback) {
    var sql = "select ceil(count(id)/10) as page from user;";
    db.exec(sql, '', function(err, rows) {
      if (err) {
        callback(err);
      }
      callback(err, rows);
    });
  },
  // 显示所有用户
  selectAllUser: function(page, callback) {
    var sql = "select * from user order by id desc limit " + page + ", 10;";
    db.exec(sql, account, function(err, rows) {
      if (err) {
        callback(err);
      }
      callback(err, rows);
    });
  },
  // 显示所有管理员
  selectAllAdmin: function(callback) {
    var sql = "select * from admin;";
    db.exec(sql, '', function(err, rows) {
      if (err) {
        callback(err);
      }
      callback(err, rows);
    });
  },
  // 添加管理员
  addAdmin: function(account, password, name, quanxian, callback) {
    var sql = "insert into admin(account, password, name, quanxian) values(?,?,?,?);";
    db.exec(sql, [account, password, name, quanxian], function(err) {
      if (err) {
        callback(err);
      }
      callback(err);
    });
  }
}
