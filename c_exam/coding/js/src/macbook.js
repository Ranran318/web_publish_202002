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
	 var j='0000';
	 var imgLength = 92;
	 
// #laptopSize
	 var laptopSize = $('#laptopSize');
	 var laptopSizeOffset = laptopSize.offset().top;
	 var laptopSizeMacbook = laptopSize.find('.macbook');
	 var macbookDiv = laptopSizeMacbook.children('div').children('div');
	 var macbookDl = macbookDiv.children('dl');
   var macbookVideo = laptopSize.find('.macbook_video');

// #retinaDisplay
 var retinaDisplay = $('#retinaDisplay');
 var retinaImg = retinaDisplay.find('.retina_image');
 var people = retinaImg.find('.people');
 var artwork = retinaImg.find('.artwork'); 
 
 
 retinaImg.css({height: winH + 'px'});


 // 기능 수행 ====================================================================

	 // #openLaptop 영역 처리 ----------------------------------------------
		openH2.animate({opacity:1, top:0}, 800);
		openLaptop.find('p').delay(200).animate({opacity:1, top:0},800);


     for (var i=0; i<imgLength; i++){
			//if(i)
			if(i < 10){
				     j = '000' + i;
			}else if (i < 100){
				     j = '00' + i;
			}else if( i < 1000){
			       j = '0' +  i;
			}else { 
			       j = i;
			}

			//j = 0000 ~ 0092
			macbook.append(macbookInImg);
			macbook.find('img').eq(i).attr({'src':url + 'large_' + j + '.jpg'});

		}
		//macbook.find('img').not(macbook.find('img').eq(0)).hide;
		macbook.find('img').hide();
		macbook.find('img').eq(0).show();
  
// ------------------------------------------------
 var secondScrollStart = 850;

	 win.on('scroll', function(){
			var thisScroll = $(this).scrollTop();
			//상단 제목 + 스크롤이 이동 +  투명해지게 하기
			var myop = 1 - thisScroll / 400;  
			    openH2.css({top: -thisScroll, opacity:myop});
		
			//console.log(thisScroll);
			//console.log(myop);
		 //스크롤시 노트북 이미지 변경되게 하기
			var imgSelect = parseInt(thisScroll / 600 *imgLength);
			for (imgSelect >= imgLength){ impSelect = imgLength-1;}
	 })
		// #openLaptop 영역 처리 끝  ---------------------------
		
		
		// #laptopSize 영역 처리  ---------------------------
	 macbookDl.css({opacity:0});
	 $.each(macbookDl, funciton(data)){ 
		                            $(this).css({opacity:0})};

		// dl의 offset값을 각각 파악
		var dlOffset = [];
		for ( var i=0; i < macbookDl.length; i++){
		    	dlOffset[i] = macbookDl.eq(i).offset().top;
		}
		//console.log(dlOffset);

     win.on('scroll',function(){
						var winScroll = $(this).scrollTop();
						var winScrollPlus = winScroll + winHPart;
						var op = 0;
						//laptopSize 위치값파악하여 동작체크
						//if(winScrollPlus >= laptopSizeOffset){
						//	//console.log('laptopSizeOffset 스타트!!!');
						//	var op1 = ( winScrollPlus - laptopSizeOffset) / 400;
						//  //console.log(op1);
						//	laptopSize.css({opacity: op1});
						//}
						

						//laptopSize 위치값파악 후 dl값의 위치에 따라 투명도 처리
						if(winScorllPlus >= laptopSizeOffset){
						
						//dl값을 각각 파악하여 매번 순환체크하도록 처리
				    for(var i=0; i < macbookDl.length; i++){
							if(winScrollPlus >= dlOffset[i] && op <= 1){
									op = (winScrollPlus - dlOffset[i]) / 400;
									macbookDl.eq(i).css({opacity: op});
	  						}
								}		
								
								//동영상 동작하게 만들기
								if(macbookVideo.hasClass('active')){ //active라는 class가 있으면 수행하고 없으면 수행하지마
								macbookVideo.find('video').get(0).play();
							}
						}

			 
					});

				//	macbookVideo.on('click', function(e){
				//								e.preventDefault();
				//								macbookVideo.find('video').get(0).play();		
				//								console.log(macbookVideo.find('video')[0])			
				//	});

// #retinaDisplay ------------------------------
 var retinaImgOffset = retinaImg.offset().top;
 var retinaImgWidth = retinaImg.outerWidth();
 var winWidth = win.outerWidth();
 var retinaImgPercent = retinaImgWidth / winWidth * 100;
 console.log(retinaImgPercent);
 retinaImg.css({width: retinaImgPercent + '%'});
 
var rep = 0;
var rep2 = 100;
var rep3 = 0;
var retinaLaptopGo = false;


 win.oN('scroll', function(){
	 var winScroll = $(this).scrollTop();
	 var winScrollPlus = winScroll + winHPart;
  
	 if(winScrollPlus >= retinaImgOffset && rep <= 30){
		 var rep = (winScrollPlus - retinaimgOffset) / winH * 30;
		 retinaImg.css({width: retinaImgPercent + rep +'vw'});
										 
	 }

//스크롤 다 내리면서 커진 사진 다시 작아지는 과정. => 높이값 줄어드는.
	 if(winScroll >= retinaImgOffset && rep2 >= 0){
		            rep2 = 120 - (winScroll - reitnaImgOffset) / winH * 100;
		// console.log(rep2);
								retinaImg.css({position:'fixed', top:0});
								people.css({height: rep2 + '%'});
	 }else{ retinaImg.css({position:'relative', top:'auto'});}

	 if(rep2 <= 0){
		 rep3 = winScrollPlus - retinaImgOffset / winH * 30;
		 console.log(rep3);
		 retinaImg.css({width:, height: });
		  
	 }

 });



})(jQuery);