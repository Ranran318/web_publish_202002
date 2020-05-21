//resize_02.js

(function($){
	  // 선택자
		var win     = $(window);
		var headBox = $('#headBox');
		//var gnbBox = $('#gnb');
		var gnbMenu = $('#gnbBox');
		var gnbBtn  = gnbMenu.find('.gnb_view_btn');
		var gnbList = gnbMenu.find('.gnb_list');

		//디바이스 환경
		var winW    = win.width();

		var mob700  = function(){
		           	//버튼 클릭
		           	gnbBtn.on('click',['button'],function(e){
		           		     e.preventDefault();
		           		     gnbList.stop().slideToggle();
		           	  });
		            };
		var tablet1400 = function(){
	            	   	gnbList.on('mouseenter',function(){
	            	   		       $(this).addClass('action');
	            	   	});
               
	            	   	headBox.on('mouseleave',function(){
	            	   		      gnbList.removeClass('action');
	            	   	});
	            	   };
    var pcFull = function(){
	           		         gnbList.on('mouseenter',function(){
	           		         gnbList.addClass('action');
           
	           	         	 });
	           		         gnbList.removeClass('action');
	            	};
		//------------------------------
		//디바이스 사이즈 체크
		if(winW <= 700 ){ // 모바일이라면
			mob700();
		}else if(winW <= 1400){ //태블릿이라면
			tablet1400();
		}else{
			pcFull();
		}





		//------------------------------
		win.on('resize',function(){
			var nowWinW = win.width();

			var deviceWidthCheck = winW !== nowWinW;
			          if(deviceWidthCheck){
			          	location.reload(); //참이면 새로고침해라.
			          	//window.location.history.get(0)  //location 현재 위치를 다시 구성시켜라.
			          	//window.location.reload();
			          }


		});
})(jQuery);