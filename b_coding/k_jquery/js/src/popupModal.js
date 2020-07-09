//popupModal.js

(function($){

	 var cardData = listView;
	 var colorData = colorArr;
	 var listView = $('#listViewBox');
	 var listUl = listView.find('ul');
	 var modalWin = $('#modalBox');
	 var modalImg = modalWin.find('.modal_image');
	 var modalCloseBtn = modalWin.find('.modal_close');



	 //비동기처리롤 인해 새로 생겨나는 형태는 기존의 변수나 선택자에 담기지 않는다.
	 //이를 해결하기 위한 방법으로는, 
	 //첫번째 : $(document) 에서부터 찾아서 선택하는 형식을 취하면 된다.
	 //두번째 : 최종선택자는 클릭 후에 판단하는 형식으로 취한다.
	 

	 $(document).find(listUl).on('click', 'li',function(e){
		 e.preventDefault();
		 var indexCard = $(this).index();
		 console.log(indexCard);
		 
		 modalImg.css({
			 backgroundImage:'URL('+ cardData[indexCard].image + ')',
			 backgroundSize:'cover',
			 backgroundRepeat:'no-repeat',
			 backgroundPosition: '50% 50%'
	  });
		 modalImg.text(cardData[indexCard].model_);
		 modalWin.fadeIn(function(){
			     $(this).on('mousemove', function(e){
						     var mouseP = { x = e.clientX, y:e.clientY};
								 console.log(mouseP);
								 modalImg.css({transform:'rotateX('+  mouseP.x / 100*3 + 'deg) rotateY('+ mouseP.X / 100*10 + 'deg)'
								});
					 });

					 //keyboard 이벤트
					 $(document).on('keyup',function(e){
						 var key = e.key;
						 var keycase = key.toLowerCase();
						 var keyTrue = true;
						 if(keyTrue){
							  kyeTrue = false;
						 

						 console.log(keycase);
						 switch(keycase){
										case 'arrowup'  :
										case 'arrowleft' :
                         indexCard -= 1;
										break;

										case 'arrowdown' : 
										case 'arrowleft':
											indexCard += 1;
										break;

										case 'esc' : 
										     modalWin.fadOut();
										     listUl.find('li').eq(indexCard).find('a').focus();
										break;
									
										}

										console.log(indexCard);
										if(indexCard <= 0){
											indexCard = 0;
										}else if(indexCard >= NowListLen){
											     indexCard = NowListLen;
													 modalWin.fadeOut();
										}else{
											modalImg.css({backgroundImage:'URL('+ cardData[indexCard].image + ')'});
										}
										
							}
                    
						 //console.log(key);
				});
		 });
	 });

	 modalCloseBtn.on('click', function(e){
	  	e.preventDefault();
			modalWin.fadeOut(100);
	 });
	   
})(jQuery);