
$(function(){
	$('nav li a').click(function(){
		$(this).addClass('cl-red').siblings().removeClass('cl-red');
	});
})
