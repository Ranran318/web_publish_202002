(function($){
	var mouseMv = $('.move_mouse');
	var imgArea = $('.movie_image');
	var mouseMvWidth = mouseMv.outerWidth();
	var imgLen = 105; //사용이미지 갯수
	 
	for(var i=0; i<imgLen; i++){
		imgArea.append('<img src="../img/introMovie/intro_movie' + ( i + 1 ) + '.png" alt="배경 인트로이미지 처리">');
	}

	var imgobj =  imgArea.find('img');


	/*//001 - 마우스 움직였을경우에 이미지변경되게 만들기
	mouseMv.on('mousemove',function(e){
		//마우스 좌표 파악하는 기능
		//(offsetX | offsetY: 선택영역 기준,
		// pageX  | pageY: 브라우저기준(document), 
		//clientX |  clientY: 브라우저기준(자체), 
		//screenX  | screenY: 모니터좌표기준, 화면)

		//console.log(e.originalEvent.offsetX);
		//% 재는 방법 : 값 / 기준 *100 -> 마우스 위치 / mouseMvWidth *105
		var mvRel = e.originalEvent.offsetX;
	//	var myRel = mvRel / mouseMvWidth * imgLen;
	  var myRel = parseInt(mvRel / mouseMvWidth * imgLen) ;
		//console.log( myRel);
		//$('.movie_image').css({left: myRel / 3 + 'px'});
		imgobj.eq(myRel).stop().show();
		imgobj.eq(myRel).siblings().stop().hide();

		//movie_image에 연습.
	});
	*/

	// 002 - 스크롤 이동시 이미지 변경되게 만들기
	 $(window).on('scroll', function(e){
		 //var offsetTop = $(this).offset().Top;
		 var offsetTop = $(this).scrollTop();
		// var myScroll = parseInt( offsetTop / $('#wrap').outerHeight() * imgLen);
		var myScroll = parseInt( offsetTop / $('#wrap').outerHeight()/2 * imgLen);
		// console.log(myScroll);
		if(myScroll < imgLen ){
   
			imgobj.eq(myScroll).stop().show();
			imgobj.eq(myScroll).siblings().stop().hide();
		}else{imgArea.css({top:(-myScroll + imgLen + 'rem')});}
		
		});


})(jQuery);