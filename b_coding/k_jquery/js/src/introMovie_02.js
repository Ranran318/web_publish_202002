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

	var j=0, intervalImg;
	var SetIntervalImg = function(){

		intervalImg = setInterval(function(){
			 j += 1;
		//console.log(j);
		imgArea.find('img').eq(j).show();
		imgArea.find('img').eq(j).siblings().hide();
		if(j >= imgLen){ clearInterval(intervalImg) };	
}, 20);

}// SetIntervalImg

	//SetIntervalImg();
	$(window).on('scroll',function(){
		var st = $(this).scrollTop();
		if(st >= 50 ){	SetIntervalImg();}
		else{ j=0; 	imgArea.find('img').eq(j).show();}
	});

	//-----------------------------------
	var win = $(window);
	var winH = win.outerHeight();
	var splitText_01 = $('.split_text_01');
	var stT01_Img = splitText_01.find('img');
	var spT01Offset = splitText_01.offset().top;

	stT01_Img.css({position:'absolute', top:0, left:0, width:'100%', height:'auto',});
	var imgP = [];
	for(var k=0; k < 42; i++){
		imgP[k] = -380 * k;

	}

	console.log(imgP);


var l=0;
var stIterval = {};
var stIterval = setInterval(function(){
   stIterval = setInteral(function(){
		 l += 1
		 var stTIterval = setInterval(function(){
			l+=1;
			stT01_Img.animate({top:imgP[l]},3000);

			if(l >= 42){clearInterval(stIterval),100};
	 })
	}
	)
	
});

	win.on('scroll', function(e){
		var st = $(this).scrollTop() + (winH/2);

		if(st >= spT01Offset){
      SplitTextInterval();		
	}
	
});

//**문제점(수정해야할 사항) : 스크롤시 setInterval 기능이 반복수행됨.

var arr2 = [[],[]]; //앞에건 x 뒤에껀 y.
for(var i=0; i<4; i++){arr2[0][i] = 429 * -i;}
for(var i=0; i<11; j++){arr2[0][j] = 378 * -j;}
console.log(arr2);



})(jQuery);