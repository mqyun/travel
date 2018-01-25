$(function(){

});

// 添加分类
$(document).on('click', '.btn-addfenleimodal', function() {
	layer.open({
    type: 1,
    title: '添加分类',
    area: ['600px'],
    skin: 'layui-layer-lan',
    content: '<div class="panel-body">\
    <div class="form col-md-12"><form class="form-horizontal tasi-form">\
    <div class="form-group"><label class="control-label col-lg-3">分类名称</label>\
    <div class="col-lg-9"><input type="text" name="fenlei-name" class="form-control"></div></div>\
    </div></div>',
    btn: ['添加'],
    shadeClose: true,
    yes: function (index, layero) {
      var name = $('input[name="fenlei-name"]').val();
      var data = {
        'name': name
      }
      layer.close(index);
      if (name.length == 0) {
        showTips('warning', 'Warning!', '请填写分类名称！');
      } else {
        ajaxPost('/admin/addFenLei', data, function (result) {
          if (result.success) {
            showTips('success', 'Success!', result.success);
            setTimeout(function () {
              location.reload();
            }, 1000);
          }
        });
      }
    }
  });
});

// 修改分类名称
$(document).on('click', '.btn-xgfenleiname', function() {
	var fenleiid = $(this).data('fenleiid');
	layer.open({
    type: 1,
    title: '添加分类',
    area: ['600px'],
    skin: 'layui-layer-lan',
    content: '<div class="panel-body">\
    <div class="form col-md-12"><form class="form-horizontal tasi-form">\
    <div class="form-group"><label class="control-label col-lg-3">分类名称</label>\
    <div class="col-lg-9"><input type="text" name="fenlei-name" class="form-control"></div></div>\
    </div></div>',
    btn: ['修改'],
    shadeClose: true,
    yes: function (index, layero) {
      var name = $('input[name="fenlei-name"]').val();
      var data = {
				'fenleiid': fenleiid,
        'name': name
      }
      layer.close(index);
      if (name.length == 0) {
        showTips('warning', 'Warning!', '请填写要修改的分类名称！');
      } else {
        ajaxPost('/admin/xgFenLei', data, function (result) {
          if (result.success) {
            showTips('success', 'Success!', result.success);
            setTimeout(function () {
              location.reload();
            }, 1000);
          }
        });
      }
    }
  });
});
