//20200520test.js

(function($){





//console.log( Wscroll );

var headBox = $('#headBox');
var viewBox = $('#viewBox');
var viewBoxUl = viewBox.children('ul');
var viewBoxLi = viewBoxUl.find('li');
var VLiClone = viewBoxLi.eq(-1).clone(true);

var asideBox = $('#indicatorBox');
var indiBtn = asideBox.children('div').find('button');
var prevBtn = indiBtn.find('.prev');
var nextBtn = indiBtn.find('.next'); 


//-----


//viewBoxLi.prepend(VLiClone);
//viewBoxLi = viewBox.find('li');


//1.scroll값 45px 이상일 경우 상단여백없이 고정 fixed
$(document).on('scroll',function(e){
	var Wscroll= $(document).scrollTop();
	
	console.log( Wscroll);

 if(Wscroll > 45){
	headBox.css({'width':'100%', 'position':'fixed', 'top':'0'});
 }else{ headBox.css({'position':'absolute','top':'45px'});}

});

//2.슬라이드 기능 가로스크롤 처리(무한)(광고슬라이드)
//광고영역에 마우스올릴 시 일시정지, 벗어났을 경우 재생처리(mouseenter, mouseleave)

viewBoxLi.prepend(VLiClone);
console.log(VLiClone);

viewBoxLi = viewBox.find('li');
/*
viewBox.on('mouseleave', function(e){
	e.preventDefault();
	var i = 0
	var timed = 500

	
	setInterval(function(){

   
	},timed,ease);
});

*/

/*

//좌,우 버튼 이전/다음내용 보기 기능
//현재 광고/전체 광ㅅ고수 표기시(다음내용버튼)
//스크롤시 배경이미지 스크롤값보다 약 5% 더 빠르게 배경이미지 상단으로 이동처리
//top.move버튼 스크롤 300이하일 경우 사라지고, 이후 나타나는 기능(300ms)
//전체 focus 처리시 배경색 #ff0 색상처리

var timed = 500;

$(viewBox).on('mouseleave',function(e){
	
	ViewBoxLi.animate({},timed)
	

  setInterval({},timed);


});
*/



//setInterval
//clearInterval
//scrollTop(), offset().top



})(jQuery);