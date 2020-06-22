// jq_rel_display_mytest3

(function ($) {
	
$(.menu_Box).children('dt').on('click', function (e) {
	
	//메뉴 클릭시에 밑으로 내려와 메뉴들. 상태.
	if($(this).children('dd').css('display') === 'none'){ 
	   
		$(.menu_Box).find('dd').hide();
		$(this).parent('dt').next('dd').fadein();

	}



})(jQuery);