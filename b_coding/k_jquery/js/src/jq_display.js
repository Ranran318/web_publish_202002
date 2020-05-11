/* jq_display.js*/

//$(document).ready(function(){});
//$.ready(function(){});
//$(function(){});

(function($){
	var dpBox = $('.display_box');
	var btn = $('.btn').children('button');
	//console.log( btn.length);
	//btn.eq(14).css({'backgroundColor' : '#fac'});
	
	dpBox.css({'display' : 'none'});


// preventDefault() : 선택자 내부 요소에 링크/버튼 등의 요소가 존재하면, 
//                    각자 요소에 다른 기능을 수행하게 된다.
//                    이때 이러한 기능을 사전에 동작하지 못하게 하기 위해 쓰이는 메소드.

	
	//display:block
  btn.eq(0).on('click',function(e){
		e.preventDefault();
		dpBox.css({'display':'block'});

	})

	//display:none
	btn.eq(1).on('click', function(e){
		 e.preventDefault();
		 dpBox.css({'display':'none'});
	});


	//display:my-toggle
	btn.eq(2).on('click', function(e){
		 e.preventDefault();
		 var dpV = dpBox.css('display');
		// console.log( dpV );

		 if(dpV === 'block'){
			     dpBox.css({'display':'none'});
		}else{
			     dpBox.css({'display':'block'});
		 }
	});

	// 눈에 보이는 것들을 보이고 없애는 기능==============================================

// show
btn.eq(3).on('click', function(e){
		e.preventDefault();
		dpBox.show(1000);
});

//hide
btn.eq(4).on('click',function(e){
	e.preventDefault();
	dpBox.hide(1000);
});

btn.eq(5).on('click',function(e){
	e.preventDefault();
	dpBox.toggle(500);
});

btn.eq(6).on('click',function(e){
	e.preventDefault();
	dpBox.stop().fadeIn(1000);

});

btn.eq(7).on('click',function(e) {
	e.preventDefault();
	dpBox.stop().fadeOut(2000);
});


btn.eq(8).on('click',function(e){
	e.preventDefault();
	dpBox.stop().fadeToggle(500);
});



// 메뉴드롭다운같은 슬라이드 업다운 기능================================================
btn.eq(9).on('click',function(e){
	e.preventDefault();
	dpBox.stop().slideDown(700);
});

btn.eq(10).on('click', function(e){
	e.preventDefault();
	dpBox.stop().slideUp(500);
});

btn.eq(11).on('click', function(e) {
	e.preventDefault();
	dpBox.stop().slideToggle(1000);
});

// class 이름을 넣었다(addClass) 뺐다(removeClass) 하는 기능===============================
btn.eq(12).on('click',function(e) {
	e.preventDefault();
	dpBox.addClass('action');
});

btn.eq(13).on('click',function (e) {
	e.preventDefault();
	dpBox.removeClass('action');
});


btn.eq(14).on('click',function(e){
	e.preventDefault();
	//var dpA = dpBox.attr('class');
	//var dps = dpA.split('');
	//console.log( dps );
	//if(dps[1] === 'action');

	 var dpAc = dpBox.hasClass('action'); // class이름 ('action'의 유무를 판단)
	 if(dpAc === false){
      dpBox.addClass('action');
	 }else{
		 dpBox.removeClass('action');
	 }

});




})(jQuery);


