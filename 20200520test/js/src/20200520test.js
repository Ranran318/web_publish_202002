//20200520test.js

(function($){
//scroll값 45px 이상일 경우 상단여백없이 고정 fixed


var Wscroll= $(window).scrollTop();
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



viewBoxLi.prepend(VLiClone);
viewBoxLi = viewBox.find('li');

$(window).on('scroll',function(){
 if(Wscroll > 45 + 'px'){
	headBox.css({'position':'fixed', 'marginTop':'0'});
 }

});

//광고슬라이드



/*
//광고영역에 마우스올릴 시 일시정지

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