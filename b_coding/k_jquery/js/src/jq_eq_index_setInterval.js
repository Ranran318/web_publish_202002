//jq_eq_index_setInterval.js

(function(){
		
	var indi = $('.indicator');
	var indiLi = indi.find('li');
	var indiLink = indiLi.children('a');
	var addView = $('.add_view_wrap');
	var timed = 500;
	indiLink.on('focus',function(e){
		e.preventDafault(); // on('focust')하기 이전의 기능들이 수행되는 걸 막아줌. 
		

		var i = $(this).parent('li').index();
		// console.log(i);
		var myPer = -i * 100; //css에 따른 값에 마이너스를 붙여라.
   
		//addView.css({'marginleft':myPer + '%'});
		addView.stop().animate({'marginleft':myPer + '%'},timed); //var를 통해 수치변경.
	
	});

	/*
	$('.indecator').find('li').on('click',function(e){
	 var add = $('.add_view').children('div').find('div')
			
	      if($('add').on('click')){}else{}	 
		
	});
	*/

})(jQuery);