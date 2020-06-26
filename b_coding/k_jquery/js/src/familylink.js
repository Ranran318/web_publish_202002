(function($){
 var dd = $('dd')
 dd.hide();

 var select = $('#linkpage');
 select.on('change', function(){
				var val = $(this).val();
				//console.log(val);
        window.location = val;
 });
 
	// -----------------------------------------
	var t2 = $('.type_02');
	var t2dt = t2.find('dt');

	t2dt.on('click', function(e){
		t2.finde('dd').show();
	});

	var t3 = $('.type_03');
	var t3Dt = t3.find('dt');
	var t3Dd = t3.find('dd');
	var go = $('.page_go').find('a');

	t3Dt.on('click', function(e){
			 e.preventDefault();
			 t3.find('dd').stop().slideToggle(100);
   		});
	 
			 t3Dd.on('click', function(e){
						e.preventDefault();
						var dataHref = $(this).attr('data-href');
						//console.log(dataHref);
						go.attr({'href':dataHref, 'arget':'blank'});
						go.focus();
			 });

})(jQuery);