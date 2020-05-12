//test0512.js - 남해리


(function($){
 
 //button(hide상태)을 클릭시 button(hide상태) hide된 메뉴(display:none;상태)이면 slidedown(display:block)해라. 
var btn = $('.act_Box').find('dt').children('button');

 $(btn).on('click',function(e){
	e.preventDefault();

	if( $('.act_Box').find('dd').css('display')==='none'){
			 $('.act_Box').find('dd').show();}

	})

 //button(display:block)이면 사라지게(display:none;)해라.

	
})(jQuery);