//jq_scrollOffset.js

(function($){
	//jquery start
	//scrollTop() : 화면내의 스크롤이 이동한 값을 표기하는 형태.
	//scrollTop -> animate() 메소드내에도 기능을 사용할 수 있다.
	$(document).on('scroll', function(e){
	 var myScroll = $(this).scrollTop() //this : 이벤트가 발생하는 그 주체를 가르킴
		console.log( myScroll);//이동값을 확인

		if(myScroll > 100){
			 $ ('#headBox').css({'position':'fixed','top':0});
			
		}else{$('#headBox').removeAttr('style');

		} // if(){  }else{   };
	});
	
	//$('#wrap').on('click', function(e){

		//$('html, body').animate({'scrollTop':'1500px'}); //이동시키는 것.
		//$('html,body').scrollTop('500px');
	  //
	//});

	//offset() : 브라우저 상단에서부터 원하는 개체(선택자)가 얼만큼 떨어져 있는지를 확인하는 기능 
	             //--개인해석:도형이 얼마나 떨어져있는가, 위치도 설정하게 할 수 있음.
	//offset().top | offset().left



var headBox = $('#headBox');	
var hT = $('#headBox').offset().top; // $('headBox').css('top'); // 100px 'px'이라고 문자가 떠서 parseInt를 걸어줘야하기 때문에 offset 써줌.	

$(document).on('scroll', function(){
  var docST = $(document).scrollTop(); //스크롤의 위치 파악
	
	//headBox 위치 확인 ex. top: 100px; 인것.
	if( docST > hT ){
		$('#headBox').css({'position':'fixed', 'top':'0'});
	}else{
		$('#headBox').removeAttr('style');
	}
	
});

	//	$(document).on('scroll',function(){
	//		var doScroll = $(this).scrollTop();
	//		var doOffset = $('#headBox').offset()
//
	//		console.log( doScroll, doOffset); //console 값 위치,픽셀로 뜸.
	//		$('#headBox').offset({top:doScroll, left: doScroll});
	//	});


// ============================
var bodyH = $('body').height();
console.log(bodyH);
$('#viewBox').height(bodyH);

//  시간차 반응 - 페를로스- 글씨,그림,상자 따로 움직이게==========================

var viewBox = $('#viewBox');
var viewBoxH2 = viewBox.children('h2');
var viewVideo = viewBox.find('.video');
var titleBg = $('.title_bg');
//var htTop = viewBoxH2.offset().top;
//console.log(htTop);

var conBgP = $('.con_img').css('backgroundPositionY');
var parseCon = parseInt( conBgP);

console.log( parseCon);

$(document).on('scroll',function(){
	var doScroll = $(document).scrollTop();
	//viewBoxH2.css({'marginTop':-doScroll});
	viewBoxH2.css({'marginTop':doScroll/2+'px'});
	viewVideo.css({'marginTop': doScroll * 1.2 + 'px'});


	//console.log( -doScroll/5);
	var ot = -doScroll/3;
	titleBg.css({'marginTop':ot * 0.7 + 'px'});

	titleBg.children('h2').css({'marginTop':ot * 0.4 + 'px'});

  $('.con_img').css({'backgroundPositionY': 50 -  ot/15 + '%'});


});





	//jquery end
})(jQuery);