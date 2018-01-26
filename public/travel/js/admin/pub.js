$(function() {

});

$(document).on('click', '.pageli', function() {
	$('.pageli').removeClass('active');
	$(this).addClass('active');
	var page = $(this).data('pagenum');
	var data = {
		'page': page
	}
	var url;
	if ($(this).hasClass('chanpin-pageli')) {
		url = '/admin/pageChanPinInfo';
	}
	getPageInfo(url, data);
});

// 请求某一页的信息
function getPageInfo(url, data) {
	ajaxPost(url, data, function(result) {
		if (result.success) {
			$('.info-tbody').html('');
      $('.info-tbody').append(result.view);
		}
	});
}
