/*
import * as jQuery from "../base/jquery-3.5.1.js";
import * as jQuery from "../base/jquery-ui.js";
*/
//html 에서 jquery js파일 숨기고 싶을때 여기에 적음

(function($){
	
	$('#wrap').height('5000px');

	var imgArea = $('.img_area');
	var imgLen = 105;
	var imgUrl;

	for(var i=0; i < imgLen; i++){
	      	imgUrl = '../img/introMovie/intro_movie' + (i + 1) ;
	      	imgArea.append('<img src="'+ imgUrl + '.png" alt ="내용 입력">');

	}

	imgArea.find('img').css({display : 'none', position:'relative', top: '50%', width:'100%',transform:'translateY(-50%)'});
	imgArea.find('img').eq(0).show();
	imgArea.css({overflow:'hidden'});

	var j=0;
	var intervalImg;

	var SetIntervalImg = function(){
                		intervalImg = setInterval(function(){
                			 j += 1;
                		//console.log(j);
                		imgArea.find('img').eq(j).show();
                		imgArea.find('img').eq(j).siblings().hide();
                
                		if(j >= imgLen){ 
                						clearInterval( intervalImg ); 
                					  }	
                    }, 30);
									
};// SetIntervalImg

	//SetIntervalImg();
	$(window).on('scroll',function(){
	        	var st = $(this).scrollTop();
	        	if(st >= 50 ){	SetIntervalImg();}
	    
	});

	//-----------------------------------
	var win = $(window);
	var winH = win.outerHeight();
	var splitText_01 = $('.split_text_01');
	var stT01_Img = splitText_01.find('img');
	var spT01Offset = splitText_01.offset().top;

	stT01_Img.css({position:'absolute', top:0, left:0, width:'100%', height:'auto'});
	var imgP = [];
	for(var k=0; k < 42; i++){
		imgP[k] = -380 * k;

	}

	console.log(imgP);
var l=0;

var stIterval = {};
var SplitTextInterval = function(){
   stIterval = setInteral(function(){
		           l += 1
		          	stT01_Img.css({top:imgP[l]},3000);
          
								if(l >= 42){clearInterval(stIterval);}
	 },100);
	 };
	
	
	


	win.on('scroll', function(e){
		     var st = $(this).scrollTop() + (winH/2);
		     if(st >= spT01Offset){
                  SplitTextInterval();		
	}
	
});

//**문제점(수정해야할 사항) : 스크롤시 setInterval 기능이 반복수행됨.
// setInterval 중복 조건처리기능을 반복수행하지 못하게 해서 처리했음.
//---------------------------------------------------------------------
// 행/열 방식으로 이미지를 배치한 경우

//x,y값에 따른 배치
var arr2 = [[],[]]; //앞에건 x 뒤에껀 y.

//x값 위치 (가로 429px 간격)
for(var i=0; i<4; i++){arr2[0][i] = 429 * -i;}

//y값 위치(세로 378px 간격)
for(var i=0; i<11; j++){arr2[1][j] = 378 * -j;}
//console.log(arr2);
var split_text_02 = $('.split_text_02');
var splitText02_offset = split_text_02.offset().top;




var s2 = 0;
var s2_01 = 0;
var s2_02 = 0;

//
//var ForFn = function(){
	for( ; s2_01 < 11; s2_01 += 1 ){
		for(;s2_02 < 4; s2_02 +=1 ){
			console.log( s2_01, s2_01);
		}
	}
//};

//ForFn();






var s2 = 0;
var scroll2Bool = true;
var scroll2Go;

var Set2interval = function(){
	if(scroll2Bool){
		scroll2Bool = false;
		scroll2Go = setInterval(function(){
							 s2 += 1;
							 console.log(s2);
							 if(s2 > 15){
							            clearInterval(scroll2Go); 
							}
		},30);
	}
};

//화면에 보이는 정도쯤 오면 진행하고 안 보일 때쯤 진행 안 함.
win.on('scroll', function(){
	var thisScroll = win.scrollTop();
	var thisScrollPlus = thisScroll + (winH/3*2);
	if(thisScrollPlus >  splitText02_offset){
	     Set2interval();
	}else if( (thisScroll-1000) < splitText02_offset){
		 clearInterval(scroll2Go);
		 s2 = 0;
		 scroll2Bool = true;
	}
});

//값을 4로 나누면..


})(jQuery);
