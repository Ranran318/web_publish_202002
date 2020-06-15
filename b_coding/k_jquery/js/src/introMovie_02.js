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

})(jQuery);
