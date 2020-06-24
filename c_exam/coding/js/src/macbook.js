(function($){
	 var win = $(window);
	 var winH = win.innerHeight();
	 var winHPart = winH / 3*2;
	 	 
// #openLaptop
	 var openLaptop = $('#openLaptop');
	 var openH2 = openLaptop.find('h2');
	 var macbook = openLaptop.find('.macbook');
	 var macbookInImg = '<img src="" alt="맥북이미지" />';
	 var url = '../img/mac/';
	 var j='0000'
	 var imgLength = 92;
	 
// #laptopSize
	 var laptopSize = $('#laptopSize');
	 var laptopSizeOffset = laptopSize.offset().top;

   // #openLaptop 영역 처리 ----------------------------------------------
     for (var i=0; i<93; i++){
			//if(i)
			if(i<10){
				j = '000' + i;
			}else if (i < 100){
				j = '00' + i;
			}else{
				j = i;
			}

			//j = 0000 ~ 0092
			macbook.append(macbookInImg);
			macbook.find('img').eq(i).attr({'src':url + 'large_' + j + 
			'.jpg'});

		}
		//macbook.find('img').not(macbook.find('img').eq(0)).hide;
		macbook.find('img').hide();
		macbook.find('img').eq(0).show();

// ------------------------------------------------
 var secondScrollStart = 650;

	 win.on('scroll', function(){
			var thisScroll = $(this).scrollTop();
			//상단 제목 + 스크롤이 이동 +  투명해지게 하기
			var myop = 1 - thisScroll / 400;  
			    openH2.css({top: -thisScroll,opacity:myop});
			var subScroll;
			//console.log(thisScroll);
			//console.log(myop);
		 //스크롤시 노트북 이미지 변경되게 하기
			var imgSelect = parseInt(thisScroll / 600 *imgLength);
			for (imgSelect >= imgLength){ 
				impSelect = imgLength-1;
						secondScrollStart = $(this).scrollTop();		
			 };
		// #openLaptop 영역 처리 끝  ---------------------------
		
		
		// #laptopSize 영역 처리  ---------------------------
     win.on('scroll',function(){
            var winScroll = $(this)
		 });

			 
		});
})(jQuery);