//jq_eq_index_setInterval.js

(function($){
		
	var indi = $('.indicator');
	var indiLi = indi.find('li');
	var indiLink = indiLi.children('a');
	var addView = $('.add_view_wrap');
	var addViewList = addView.children('div');
	var timed = 500;

	 var indiNarr = $('.indi_narr');
	 var indiNarrLi = indiNarr.find('li');
		



	 var AdViewMv = function(i){
		var myPer = -i * 100;
		//----------------------
		addView.stop().animate({'marginLeft':myPer + '%'},timed);
    //----------------------
    indiLi.removeClass('action');
    indiLi.eq(i).addClass('aciton');
    //----------------------
    indiNarrLi.removeClass('action');
    indiNarrLi.eq(i).addClass('aciton');
	 };

	 var i = 0;

	indiLink.on('focus', function(e){
		e.preventDafault(); // on('focus')하기 이전의 기능들이 수행되는 걸 막아줌. 

	  i = $(this).parent('li').index();
		AdViewMv(i);
	});
		// console.log(i);
	/*	var myPer = -i * 100; //css에 따른 값에 마이너스를 붙여라.
   
		//addView.css({'marginleft':myPer + '%'});
		addView.stop().animate({'marginleft':myPer + '%'},timed); //var를 통해 수치변경.
	    
	*/
		/*
   	var indiLi = indi.find('li');
		 var indiNarrLi = indiNarr.find('li');
		 
		     indiLi.removeClass('action');
         indiLi.eq(i).addClass('aciton');
         indiNarrLi.removeClass('action');
         indiNarrLi.eq(i).addClass('aciton');
		*/
//------------------------------------
//$(this).parent('li').addClass('aciton');

//indiLi.removeClass('action');
//indiLi.eq(i).addClass('aciton');


//indiLi.eq(i).siblings().removeClass('action');
		
//-------------------------------------
	//	indiNarrLi.removeClass('action');
	 // indiNarrLi.eq(i).addClass('aciton');
	 


		//전체를 뺀 다음에 적용을 시켜줘야함
		//indiNarrLi.eq(i).siblings().removeClass('action');


//=====================================================================
		indiNarrLi.on('click',function(e){
			e.preventDefault();
		  i = $(this).index();
			AdViewMv(i);
/*
		indiNarrLi.removeClass('action');
    indiNarrLi.eq(i).addClass('aciton');
		});

		//indiNarrLi.eq(i).siblings().removeClass('action');

		//---------------------------------------------------------
		var myPer = -i * 100; //css에 따른 값에 마이너스를 붙여라.
   
		//addView.css({'marginleft':myPer + '%'});
		addView.stop().animate({'marginleft':myPer + '%'},timed);
*/
	});

	//setInterval(function(){},); // timed*4 마다 앞의 function(){}을 수행하게 한다.
	setInterval(function(){
		
	i+=1;
	//일정시간마다 수행하게한다 -밖에서 함수를 만들어서 (자동슬라이드)
	
	if(i >= addViewList.length){i = 0}
	
	AdViewMv(i);
}, timed*4 );

	
	
	//setInterval : 순수한 자바슼크립트 함수


	/*
	$('.indecator').find('li').on('click',function(e){
	 var add = $('.add_view').children('div').find('div')
			
	      if($('add').on('click')){}else{}	 
	*/	

	

})(jQuery);