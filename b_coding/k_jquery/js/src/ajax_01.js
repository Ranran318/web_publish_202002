(function($){
	// ajax기능 이해하기1
	//$.ajax();//메소드 기본
	//$.ajax();
	//$.fn();
	//$.each();
/*
	var d;

	$.ajax({
		url:'../data/ajaxTest.json',
		dataType:'json',
		async:false,//<<외부에서 data확인 가능하게 하려면. async를 붙여주면 됨.
		success:function(data){
			//console.log(data);
			d = data;//<<외부에서 data확인 가능하게 하려면. async를 붙여주면 됨.
			return d; //<<외부에서 data확인 가능하게 하려면. async를 붙여주면 됨.
		}
	});
	console.log(d);//<<외부에서 data확인 가능하게 하려면. async를 붙여주면 됨.
	 
	//$('#wrap').append(d[0].test1)//<<외부에서 data확인 가능하게 하려면. async를 붙여주면 됨.
	$('#wrap').append(d[0])
	//보호하기 위해 불러오기위해.
	*/

	//$.getJSON();
	
	//$.load();==========================

	var wrap = $('#wrap');

	wrap.append('<div class="headBox_wrap"></div>');
	wrap.append('<div class="footBox_wrap"></div>');



	var headWrap = wrap.find('.headBox_wrap');
	var footWrap = wrap.find('.footBox_wrap');
	
	headWrap.load('../page/common/headBox.html',function(){
		var headBox = $('#headBox');
		console.log(headBox);
	});

	footWrap.load('../page/common/footBox.html');




 // setTimeout(function(){
//		var headBox = $('#headBox');
//		console.log(headBox);
//
//	},10);


})(jQuery);