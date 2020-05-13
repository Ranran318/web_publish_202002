//

(function(){
	var vb = $('#viewBox');
	// 만약 A 파트의 var p = vb.find('p'); 를 이곳으로 옮겨온다면 실행하지 않는다. 
	// 왜냐하면 p태그 가 만들어지기 전이기 때문이다.
	for(var i=0; i<5 ; i++){
		vb.append('<p>'+i+'</p>');
	}

	//-A파트----------------------------
	var p = vb.find('p');
	p.css({'width' : '100px', 'margin':'10px',
					 'margin' : '10px',
						'backgroundColor':'#a5c',
						'color':'#fff'});
//---A 경우-----------------------------------------------
  //vb.append('<p>other_01</p>');  //==>애를 새로운 언급해 줄 시에는 얘에 따른 새로운 디자인 언급도 해줘야한다. 
	//var p = vb.find('p')	
	//p.css({'width' : '100px', 'margin':'10px',
	//'margin' : '10px',
	// 'backgroundColor':'#a5c',
	// 'color':'#fff'});


//-----A 경우 대신 다시 B경우 -----------------------------------------------
/*
p.oon('click', function(){
	$(this).animate({'backgroundColor':'#7af'},
	                function(){
										$(this).css({'border':'5px solid #333'});
									});
});
*/

//-------------B경우 + C경우 콜라보 -----------

//폰으로 찍은 것 추가로 쓰기.

// -----

})(jQuery);