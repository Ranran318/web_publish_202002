//landing.js

(function($){
var ft = $('.fixed_text').find('span');
var part = [];
  part[0] = $('.part_01');
  part[1] = $('.part_02');
  part[2] = $('.part_03');
  part[3] = $('.part_04');
  part[4] = $('.part_05');
var partOffset = [];

  var i = 0;
  for(; i<part.length; i += 1){
              partOffset[i] = part[i].offset().top;
        }

//console.log(partOffset);

//========================================

part[0].css({backgroundImage : 'linear-gradient(30deg, #acf, #afc)'});
//=====================================
var win = $(window);
var winH = win.innerHeight();
var thisTop = $(window).scrollTop() + (winH/4*3);
ft.text(thisTop);
//-------------------------------------------------------------
//추가 내용 세팅
var p1 = $('.p1');
var p2 = $('.part_02').children('div');
var p3 = $('.part_03');
var p4 = $('.part_04').find('li');
var p5 = $('.part_05');
var p5Day = p5.find('.day');
var yy = p5day.find('.yy');
var mm = p5day.find('.mm');
var dd = p5day.find('.dd');
var myDay = [2020, 6, 2];
//------------------------------------------------------
//var ViewSet = function(){}???????????????????????????????????????????????????????????

var ScrollView = function(){
	thisTop = win.scrollTop() + (winH/4*3);
	for (var j = 0; j < partOffset.length; j++){
		if(thisTop > partOffset[j]){
					part[j].find('h2').slideDown();
					
					switch(j){
					  	case 0:
						      	p1.slideDown(500);
							break;

							case 1:
								setTimeout(function(){
								p2.css({display:'block', opacity:0, position:'relative'});
								p2.eq(0).delay(500).animate({opacity:1, top:'50px'},800);
								p2.eq(1).delay(600).animate({opacity:1, top:'70px'},700);
								},100);
								break;
								case 2:
									$('.p3').addClass('active');
									break;

								case 3:
									setTimeout(function(){p4.eq(0).addClass('active');},0);
									setTimeout(function(){p4.eq(1).addClass('active');},200);
									setTimeout(function(){p4.eq(2).addClass('active');},400);
									setTimeout(function(){p4.eq(3).addClass('active');},1200);
							
									break;

									case 4:
										setTimeout()
								   break;
								
										
					} //setTimeout -> 딜레이기능
					
		}
	}
}

ScrollView();

//===================

win.on('scroll', function(e){
			 ft.text(thisTop);
			 ScrollView();
			
 	



if(thisTop >= 1000){
	//console.log('!!!!!!');
	ft.animate({'backgroundColor':'#777'}); 
}

var j = 0; //변하는 수
for( ; j < partOffset.length; j++){
	if(thisTop > partOffset[j]){
				 //console.log('!');
				 //break;
				 part[j].siblings().find('h2').hide();
				 part[j].find('h2').fadeIn();}

	};

//	partOffset[i]
//	if(thisTop > partOffset[0]){
//		 //console.log('!');
//		 //break;
//		 part[0].siblings().find('h2').hide();
//		 part[0].find('h2').fadeIn();
//
//		}else if(thisTop < partOffset[1]){//console.log('!!');
//	        	part[1].siblings().find('h2').hide();
//	          part[1].find('h2').slideDown();
//	}
//		else if(thisTop < partOffset[2]){//console.log('!!!');
//	        	part[2].siblings().find('h2').hide();
//	          part[2].find('h2').show();
//	}
//		else if(thisTop < partOffset[3]){//console.log('!!!!');
//	        	part[3].siblings().find('h2').hide();
//	          part[3].find('h2').fadeIn();
//	}
//		else{//console.log('!!!!!');
//	        	part[4].siblings().find('h2').hide();
//	          part[4].find('h2').fadeIn();
//	}
//}
//=========================================

/*
var p21 = $('.p2_1');
var p22 = $('.p2_2');


p21.animate({'transform': 'translateY(' + 50 + 'px'+')'},300,'ease');

p22.animate({'transform': 'translateY(' + 50+ 'px'+')'},300,'ease',100);

//========================================
var p301= $('.p3_01');
var p302= $('.p3_02');
var p303= $('.p3_03');

p301.fadeIn().animate({?},500,'easeIn');,
p301.animate({?},500,'easeIn');


p302.animate({},500,'easeIn';)
*/




});
//for(var z=0; z <= 2020; z++){

	var z = 0;
	var setI;
	var myCount = function(){

		setI = setInterval(function(){
			z++;
			if(z <= myDay[0] - 300){
				z+=20;}
				else if (z < myDay[0]){
					z+=1;
				}
				
				yy.text(z);
			},10);
			//}
			
		};








})(jQuery);