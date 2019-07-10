$(function(){

	//  选择城市
	$('#header .hover_display_item').hover(function(){

		$(this).css('background-image',"url('application/views/TPL_SIMPLE/images/location_top.png')");

		$('#header .hover_display_div').css('display','block');
	},function(){

		$(this).css('background-image',"url('application/views/TPL_SIMPLE/images/location_bottom.png')");

		$('#header .hover_display_div').css('display','none');
	});

});
