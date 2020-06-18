//gellery.js

(function($){
	 //gallery 페이지 만들기
	 // 1. html 문서에서 큰 이미지의 경로/파일을 직접 입력해서 가져오게 하기 // 미리 만들고 불러오기
		var part01 = $('.part_01');
		var bigRec = part01.find('.big_rec');
		var part01Li = part01.find('li');
		var part01LiLink = part01Li.children('a');
		var bigSource = '../img/gallery/big/';

		part01LiLink.on('click', function(e){
			e.preventDefault();
			//var thisImg = $(this).css('backgroundImage');
			var thisImg = $(this).parent('li').attr('data-bg');
			//console.log(thisImg);
      bigRec.css({backgroundImage:'url(' + bigSource + thisImg + ')'});
		});

		//이미지 불러오고 뿌리기.


	 //-------------------------------------------------------------
	 // 2. js를 통해 경로를 입력해서 처리하게 만들기 //일일이 불러오기
	
		
   var thumUrl = '../img/gallery/thum/';
   var bigUrl  = '../img/gallery/big/';

		
	 var thumList = [
			'gallery_01.jpg',
			'gallery_02.jpg',
			'gallery_03.jpg',
			'gallery_04.jpg',
			'gallery_05.jpg'
		];
		
		var bigList = [
			'gallery_01.jpg',
			'gallery_02.jpg',
			'gallery_03.jpg',
			'gallery_04.jpg',
			'gallery_05.jpg'
		];
		//-----------------------------
		
		var galleryList = {
			thumUrl : thumUrl,
			thumList : thumList,
			bigUrl : bigUrl,
			bigList : bigList		
		};
	//----------------------------------
		var part02 = $('.part_02');
		var partRec = part02.find('.bic_rec');
		var thumImg = part02.find('.thum_img').children('ul');
		 
     var i=0;
		for( ; i < thumList.length ; i+= 1){

		thumImg.append('<li><a href="#"><span></span></a></li>');
		//thumImg.find('li').eq(i).children('a').css({backgroundImage:'url('+thumurl + thumList[i] + ')' });
		thumImg.find('li').eq(i).children('a').css({backgroundImage:'url('+ thumUrl +  galleryList.thumList[i] + ')' });

		}
		          
		var p2thumLi = thumImg.find('li');
		var p2thumLiLink = p2thumLi.find('a');
		// partRec.css({backgroundImage:'url('+bigUrl+galleryList.bigList[0]+')'});
		
		p2thumLiLink.on('click', function(e){
			e.preventDefault();
			var itIndex = $(this).parent('li').index();
			partRec.css({backgroundImage:'url('+ bigUrl + galleryList.bigList[itIndex] + ')'});
		});
	
		p2thumLi.eq(0).find('a').trigger('click');
		//=======================================================
		/*
	 var part02 = $('.part_02');
	 var bigRec02 = part02.find('.big_rec');
	
	 var thumImg = part02.find('.thum_img');
	 var thumImgUl = thumImg.children('ul');
	 var liASpan = '<li><a href="#"><span></span></a></li>'
	 thumImgUl.prepend(liASpan);
	
	 var thumImgLi = thumImg.children('li');
	 
	 var imgSource = [] 
	 thumImgLi.attr({href="./"})
	 */
	
 //=================================================================================
 //3. 모달윈도우 제작하기
 var bigModal = $('.big_modal');
 var bigModalBtn = bigModal.find('button');
 var part03 = $('.part_03');
 var part03Ul = part03.find('ul');

 var part03Li = '<li><a href="#"><span></span></a></li>';
 
 for( i = 0 ; i < galleryList.thumList.length ; i++){
	 part03Ul.append(part03Li);
	 part03Ul.find('li').eq(i).children('a').css({backgroundImage:'url(' + thumUrl +  galleryList.thumList[i] + ')'});

 }

 var n = 0; 
 var p03Link = part03Ul.find('li').children('a');
  p03Link.on('click',function(e){
					e.preventDefault();

					var itIndex = $(this).parent().index();
					n = itIndex; //백그라운드 ~가는 순서가..

					bigModal.find('.big_img').css({
					      backgroundImage: 'url(' + bigUrl +  galleryList.bigList[itIndex]+ ')',
					      backgroundSize:'cover', backgroundPosition:'50% 50%',
					      backgroundRepeat:'no-repeat'				
				});

					bigModal.fadeIn(function(){
						$(window).on('keyup', function(evt){
							var keyCode = evt.keyCode;
							//console.log(keyCode);
							//왼쪽 37, 오른쪽 39, 빠져나가기27

							if(keyCode == 37) {
								 n -= 1;
								 if(n < 0){
									 n = galleryList.thumList.length -1 }//eq()를 썼을 때면 a[]의 []안에 마이너스를 써서 나온 값이 
																											//쓸모있으나 그냥 배열에서 쓸 때는 a[]에 마이너스 값을 써서 가져올 떼
																											// 마이너스 값을 쓸 수는 있으나 배열 내의 값이 아닌 그 밖의 없는 값을
																											//가져오라는 뜻이기에 결과는 undefind이 나오므로  a.length 에 -1를 써서
																											// 순서번째 수(0,1,2,3,4...)를 맞춰줌.
								 
								 bigModal.find('.big_img').css({backgroundImage: 'url(' + bigUrl +  galleryList.bigList[n]+ ')'});

							}else if( keyCode == 39) {
								 n += 1; 
								 if( n > galleryList.thumList.length -1 ){ n = 0;}
								 bigModal.find('.big_img').css({backgroundImage: 'url(' + bigUrl +  galleryList.bigList[n]+ ')'});
								 
							}else if(keyCode == 27){
                 bigModal.fadeOut(400, function(){
									 p03Link.eq(0).focus();
								 });
							}

						});
					});

	});


	 bigModalBtn.on('click', function(e){
		 e.preventDefault();
		 bigModal.fadeOut(400);
	 });
})(jQuery);