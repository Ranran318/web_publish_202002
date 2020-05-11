// jq_rel_display.js

(function($){
	// jquery start===================

	var st01 = $('.style_01');
	var st01Li = st01.find('li');

	var con = $('.content');
	var conLi = con.children('div');// === var conLi = con.find('div');

st01Li.eq(0).addClass('action');

/* 
var liBg = st01Li.eq(0).css('backgroundColor');
 var c01 = conLi.eq(0).css('backgroundColor');
 st01Li.eq(0).css({'backgroundColor':c01});
*/
 st01Li.children('button').on('click focus',function(e){
	 e.preventDefault();

var myThis = $(this).parent('li');
var i = myThis.index();
var conLiEq = conLi.eq(i);

myThis.addClass('action');
myThis.siblings().removeClass('action');




	 $(this).addClass('action');
	 $(this).siblings().removeClass('action');

	 /*
	 var i = $(this).index();
	 var conLiEq = conLi.eq(i);
	 //conLi.hide();
*/

	 conLiEq.siblings().stop().hide();
	 conLiEq.stop().fadeIn();

	 /*
	 var conCol = conLi.eq(i).css('backgroundColor');
	 $(this).siblings().css({'backgroundColor':liBg});
	 $(this).css({'backgroundColor':conCol});
*/







/*
  
	st01Li.on('click',function(e){
		 e.preventDefault();
		 //$(this).addClass('action');
		 //$(this).siblings().removeClass('action');



		 var i = $(this).index();
		 //conLi.hide();

		 conLi.eq(i).siblings().stop().hide();
		 conLi.eq(i).stop().fadeIn();

		 */
	});

	//=====================================
	
	/*
	var accMenu = $('.accordion_menu');
	var accSt01 = accMenu.children('.acc_style_01');
	var accSt01_dt = accSt01.find('dt');
	var accSt01_dd = accSt01.find('dd');

	// console.log(accSt01_dt.length, accSt01_dd.length);

	//dt('accSt01_dt')를 클릭시(버튼을 클릭하는 것으로 설정/focus처리)
	accSt01_dt.find('button').on('click focus',function(){
		//이미 열려잇는 dd는 접히고,(단, 선택된 순서 뒤의 내용이라면 열려있고)
		var thisView = $(this).parent('dt').next('dd').css('display');
		
		if(thisView ==='none'){ accSt01_dd.stop().slideUp();  }
	
		//선택된 dt 바로 뒤에 있는 dd('accSt01_dd')를 나타나게(slideDown)해라
	 $(this).parent('dt').next('dd').stop().slideDown();
	});
*/


var accMenu = $('.accordion_menu');
	var accSt01 = accMenu.children('.acc_style_01');
	var accSt01_dt = accSt01.find('dt');
	var accSt01_dd = accSt01.find('dd');

	// console.log(accSt01_dt.length, accSt01_dd.length);

	//dt('accSt01_dt')를 클릭시(버튼을 클릭하는 것으로 설정/focus처리)
	accSt01_dt.find('button').on('click', function(e){
		//console.log(e.type);
		e.preventDefault();
		//이미 열려잇는 dd는 접히고,(단, 선택된 순서 뒤의 내용이라면 열려있고)
		var dtPar = $(this).parent('dt');
		var thisPar = dtPar.next('dd');
		var thisView = thisPar.css('display') == 'none';
		//console.log(thisView)
		
		if(thisView){ 
			accSt01_dd.stop().slideUp(); 
			thisPar.stop().slideDown();
			dtPar.addClass('action');
			dtPar.siblings('dt').removeClass('action');
		}else{
		 accSt01_dd.stop().slideUp();
		 accSt01_dt.removeClass('action');
  
 		
	}
	
		//선택된 dt 바로 뒤에 있는 dd('accSt01_dd')를 나타나게(slideDown)해라
	});







	//몇가지 문제점 정리...

//1.slide 처리시 toggle이 중복현상되는 것.
//2.focus 처리시 색상처리
//3.변수 정리



//==============================================

//아코디언메뉴 html 구조를 이용한 탭메뉴 만들기

var moreBtn = $('.more_style').find('dt').children('button');



moreBtn.on('click',function(e){
	e.preventDefault();

  var thisDt = $(this).parent('dt');
  var dtNextView = thisDt.next('dd').css('display') === 'none'
  
    if(dtNextView){
      
      	$('.more_style').find('dd').hide();
      	thisDt.next('dd').fadeIn();
  	
  	
        
        //해당하는 dt의 이름을 확인
        thisDt.siblings('dt').removeClass('action');
        thisDt.addClass('action');
 }
	

});











	// jquery end ================
})(jQuery);