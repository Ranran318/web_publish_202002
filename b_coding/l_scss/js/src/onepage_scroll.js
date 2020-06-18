(function($){

 var timed = 500;
  $('html').animate({scrollTop:0},timed/10);

	var gnb = $('#gnbBox')
	var gnbLi = gnb.find('li');
	
	//마우스휠 형식------------------------------
	var scrollOffset = [];
	var i = 0;
	for (; i < gnbLi.length; i++){
		var selHref = gnbLi.eq(i).find('a').attr('href');
		var selEl = $(selHref).offset().top;
		scrollOffset[i] = selEl;

	}
//console.log( scrollOffset);
gnbLi.eq(0).addClass('action');   gnbLi.eq(0).siblings().removeClass('action');


$(window).on('scroll', function(){
	var winScroll = $(window).scrollTop();

	if(winScroll < scrollOffset[1]){
		gnbLi.eq(0).addClass('action');   gnbLi.eq(0).siblings().removeClass('action');

	}else if(winScroll > scrollOffset[2] && winScroll <= scrollOffset[2]){
		gnbLi.eq(1).addClass('action'); 	gnbLi.eq(1).siblings().removeClass('action');

	}else if(winScroll > scrollOffset[3] && winScroll <= scrollOffset[3]){
		gnbLi.eq(2).addClass('action');   gnbLi.eq(2).siblings().removeClass('action');

	}else if(winScroll > scrollOffset[4] && winScroll <= scrollOffset[4]){
		gnbLi.eq(3).addClass('action');   gnbLi.eq(3).siblings().removeClass('action');
	}

	
});
//---------------------------

	$(gnbLi).children('a').on('click',function(e){
		e.preventDefault();
		var sectionName = $(this).attr('href');
		//console.log(sectionName);
		var sectionOffset = $(sectionName).offset().top;
		// console.log(sectionOffset);
		
		$('html,body').animate({scrollTop: sectionOffset});
	
//==============================



		var headBox = $('#headBox')
		var pointSide = '<aside id="pointNaviBox"></aside>';
				headBox.after(pointSide);
		var pointNavi = $('#pointNaviBox');
		var gnbClone = gnb.children('ul').clone(true);
		pointNavi.append(gnbClone);
				
	      	pointNavi.css({position:'fixed', top:10+'rem', right:3 + 'rem', 
	      	               width:2+'rem', height:'auto'});
      
	      	pointNavi.children('ul').css({width:'100%', height:'auto', backgroundColor:'rgba(255,255,255,0.5)'});
		pointNavi.find('li').css({width:'2rem', height:'2rem', marginBottom:'2rem'});
		pointNavi.find('a').css({display:'block', borderRadius:'2rem', backgroundColor:'#3fa', fontSize:0, width:'2rem',height:'2rem'});


	});



//Top 버튼 생성, 1000px 이전에는 보이지 x, 이후에 보이게 만들기, 클릭시 최상단으로 이동=======================================
/*
var scroll = $(document).scrollTop();
console.log( scroll );

var footBox = $('#footBox');
var Topside = '<div class="topBox"><a href="#viewBox">Top<a></div>';
var asideBtn = $(footBox).before(Topside);




var topBtn = $('.topBox');

topBtn.css({width: 30 + 'px', });


$(document).on('scroll',function(){
	if(scroll = 1000){ function(e){
		e.preventDefault();
		topBtn = $('.topBox');
	 
		topBtn.css({display : 'block'});
		/*	
		topBtn.on('click', function(){
			 
	 
		});
	 
	 }}
});

*/

//마우스휠====<덤으로 한 것>===============================
var topMvText = '<div class="top_move_btn"><a href="#headBox"><span>상단으로 이동</span></a></div>';
$('#asInfoBox').after(topMvText);

var topMvBtn = $('top_move_btn');
topMvBtn.css({position:'fixed',left:'50%', bottom:'3rem', marginLeft:'40rem',zIndex:'1000',
												 width: '70px', height: '70px', backgroundColor: '#fa0', display:'none'});
topMvBtn.find('a').css({display:'block', width:'100%',height:'100%'});



$(window).on('scroll',function(e){
	e.preventDefault();
  var winScroll = $(window).scrollTop();
/*
	if(winScroll >= 1000){
		topMvBtn.stop().fadeIn();

	}else{ topMvBtn.stop.fadeOut();}
*/
	(winScroll >= 1000) ? topMvBtn.stop().fadeIn(timed) : topMvBtn.stop().fadeOut(timed);

});

topMvBtn.on('click',['a'], function(e){
	e.preventDefault();
	$('html.body').animate({scrollTop: 0});
});

//topMvBtn.find('a').on~ 이라고 쓰는게 좋다. 하지만 a가 내부에 속하기 때문에
//그냥 topMvBtn.on~이라고 써도 되나 신경쓰인다면 위처럼 쓰면 된다.


$(window).on('mousewheel DOMMouseScroll',function(e){
	var myEvt = e.originalEvent;
	var wheelValue;
	
	if(myEvt.wheelDeltaY){
			wheelValue = myEvt.wheelDeltaY; // 120 | -120
  }else{
	   	wheelValue = myEvt.detail * -40; //-3 | 3
	}
	   
	console.log(e.originalEvent.wheelDeltaY );
	//console.log(e.originalEvent.detail) or console.log(wheelValue);
});







//==================================
/*
$('메뉴').on('click',function(){

*/
	
	/*
	scroll =>
var scrollTop = $(this).scrollTop();
var x = $('x');
	$(window).scrollTop()
	
$('').animate({scrollTop : top},500);
return false;

//==========================

	var index = $(this).parent().index();
//클릭한 ~를 가진 ul의 li의 인덱스 값을 변수에 넣는다.
 var top = $('').eq(index-1).offset().top;

});



*/
})(jQuery);