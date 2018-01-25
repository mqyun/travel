$(function() {
  getPageChanPinInfo({});
});

// 请求某一页产品信息
function getPageChanPinInfo(data) {
  ajaxPost('/admin/pageChanPinInfo', data, function(result) {
    if (result.success) {
      $('.info-tbody').html('');
      $('.info-tbody').append(result.view);
    }
  })
}
