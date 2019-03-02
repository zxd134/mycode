
function fnHover(){
	
	$('[data-toggle=tab]').hover(function(){
		
		data.currentIndex = $(this).index();
//		console.log($(this).index());
		$($(this).attr('href')).show().siblings().hide();
		$(this).css({'background':'#0da89b','color':'white','cursor':'pointer'}).siblings().css({'background':'#f0f0f0','color':'black'});
		fnTime();
	})
	
}

function fnTime(){
	clearInterval(data.timer);
	data.timer=setInterval(function(){
//			console.log($('[data-toggle=tab]'));
		data.currentIndex = ++data.currentIndex%$('[data-toggle=tab]').length;
		$('.tab-content').children(':eq('+data.currentIndex+')').show().siblings().hide();
		var that = $('[data-toggle=tab]')[data.currentIndex];
		$(that).css({'background':'#0da89b','color':'white','cursor':'pointer'}).siblings().css({'background':'#f0f0f0','color':'black'});
		
		
	},2000)
		
}
function imgHover(){

	$('.tab-pane').hover(function(){
		clearInterval(data.timer);
	},function(){
		fnTime();
	})
	
}