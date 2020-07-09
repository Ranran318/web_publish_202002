//popupModal.js

(function($){

	 var cardData = listData;

	 var colorData = colorArr;
	 var listViewBox = $('#listViewBox');
	 var listUl = listViewBox.find('ul');
	 var modalWin = $('#modalBox');
	 var modalView = modalWin.find('.modal_view');
	 var modalImg = modalWin.find('.modal_image');
	 var modalCloseBtn = modalWin.find('.modal_close');



	 //비동기처리롤 인해 새로 생겨나는 형태는 기존의 변수나 선택자에 담기지 않는다.
	 //이를 해결하기 위한 방법으로는, 
	 //첫번째 : $(document) 에서부터 찾아서 선택하는 형식을 취하면 된다.
	 //두번째 : 최종선택자는 클릭 후에 판단하는 형식으로 취한다.
	 var cardI;
	 
	 $(document).find(listUl).on('click', 'li', function(e){
		 e.preventDefault();
		 
		 var indexCard = $(this).index();
		 cardI = indexCard;
		//  console.log(cardData[indexCard].image);
		var modalImgSource = cardData[indexCard].image;
			modalImg.css({ backgroundImage:'URL(' + modalImgSource + ')',  backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition: '50% 50%' });
		
			
		 modalImg.text(cardData[indexCard].model_);
		 modalWin.fadeIn(function(){});
	});



	 // 마우스 움직일 경우
	 modalView.on('mousemove', function(e){
		var mouseP = { x: e.clientX, y: e.clientY};
		//console.log(mouseP);
		modalView.css({transform:'rotateX('+  -mouseP.x / 100*2 + 'deg)\
									translate('+ mouseP.y / 100*10 + 'px)\
									perspective(500px)'});
	});



 //키보드 처리로 인한 이미지 변경
		//keyboard 이벤트
		
		$(document).on('keyup',function(e){
			var key = e.key;
			var keycase = key.toLowerCase();
			
			switch(keycase){
						 case 'arrowup'  :
						 case 'arrowleft' :
									cardI -= 1;
						 break;

						 case 'arrowdown' : 
						 case 'arrowleft':
							cardI += 1;
						 break;

						 case 'escape' : 
									modalWin.fadeOut();
									listUl.find('li').eq(cardI).find('a').focus();
						 break;
					 
						 }

						 console.log(cardI);
						 if(cardI <= 0){
							      cardI = 0;
						 }else if(cardI >= NowListLen){
						      	cardI = NowListLen;
										modalWin.fadeOut();
						 }else{
							 modalImg.css({backgroundImage:'URL('+ cardData[cardI].image + ')'});
						}
						 
			 
						 
			//console.log(key);
 });

 //닫기버튼 

	 modalCloseBtn.on('click', function(e){
	  	e.preventDefault();
			modalWin.fadeOut(100);
	 });



	 
	   
})(jQuery);