$(function() {

});

// 用户注册
$(document).on('click', '.btn-reg', function() {
  var account = $('input[name="reg-account"]').val();
  var password = $('input[name="reg-password"]').val();
	var repassword = $('input[name="reg-repassword"]').val();
	var name = $('input[name="reg-name"]').val();
	var phone = $('input[name="reg-phone"]').val();
  var data = {
    'account': account,
		'password': password,
		'name': name,
    'phone': phone
  }
  if (account.length == 0 || password.length == 0 || (password != repassword) || name.length == 0 || phone.length == 0) {
    showTips('warning', 'Warning!', '请检查填写信息！');
  } else {
    ajaxPost('/userreg', data, function(result) {
      if (result.success) {
        showTips('success', 'Success!', result.success + '，两秒钟之后返回登录页面！');
        setTimeout(function() {
          location.href = '/login';
        }, 2000);
      }
    });
  }
});

// 用户注册
$(document).on('click', '.btn-login', function() {
  var account = $('input[name="account"]').val();
  var password = $('input[name="password"]').val();
  var data = {
    'account': account,
		'password': password
  }
  if (account.length == 0 || password.length == 0) {
    showTips('warning', 'Warning!', '请检查填写信息！');
  } else {
    ajaxPost('/userlogin', data, function(result) {
      if (result.success) {
        showTips('success', 'Success!', result.success + '，两秒钟之后跳转到首页！');
        setTimeout(function() {
          location.href = '/';
        }, 2000);
      }
    });
  }
});

// 下单addDingDan
$(document).on('click', '.btn-addDingDan', function() {
  var chanpinid = $(this).data('chanpinid');
  var xingchengid = $('select[name="xingchengid"]').val();
	var ddrenshu = $('input[name="ddrenshu"]').val();
	var allprice = ($('.item-price').data('price') * ddrenshu).toFixed(2);
  var data = {
    'chanpinid': chanpinid,
    'xingchengid': xingchengid,
    'ddrenshu': ddrenshu,
    'allprice': allprice
  }
  if (ddrenshu.length == 0) {
    showTips('warning', 'Warning!', '请填写订单的人数！');
  } else {
    showBtnTips('success', '确定下单吗？', '订单总价格为' + allprice + '元', '取消', '确定', function() {
      ajaxPost('/addDingDan', data, function(result) {
        if (result.success) {
          showTips('success', 'Success!', result.success);
        }
      });
    });
  }
});
