//slide_banner_02.js

(function($){
	var miniP = $('#miniProduct');
	var miniIndi = miniP.find('.indicator');
	var miniIndiLi = miniIndi.find('li').children('a');

	var miniPlist = miniP.find('.product');
	var miniParea = miniPlist.children('ul');
	var timed = 700;


	miniPlist.css({'overflow':'hidden'});

   miniIndi.hide();

 /*
	miniIndiLi.on('click',funciton(e){
		e.preventDefault();
 
		var i = $(this).parent('li').index();
		var iPer = -i*100;
		miniParea.stop().animate({ 'marginLeft': iPer + '%'},timed);



	});

	*/

	var miniPareaLi = miniParea.find('li');
	var miniPliCopy = miniPareaLi.eq(-1).clone(true);

	miniParea.prepend(miniPliCopy);
	miniPareaLi = miniParea.find('li');

	 //length를 수행하기 위에 위에 var에 대해 추가되거나 변경된 내용의 "갯수"를 갱신(push,최종 결과) 선언해줘야함.
	//console.log(mLilenT);
	var mLilenT = miniPareaLi.length;

	miniParea.css({width: mLilenT * 100 + '%',
								 'position':'relative', 'left' : -100 + '%'
								 });
								 
	miniPareaLi.css({width: 100 / mLilenT + '%'});

//더 추가될 화면(차후)를 대비해서 컨트롤하기 위해 js로 위와 같이 만들어줌.



        var i = 0;
       	var MyProSlide = function(){
       		             i+=1;
       		             //var pLiLen =  miniParea.find('li').length;-1
       		            // if( i>= pLiLen-1){ i = -1;}
                   
       		            // var i = $(this).parent('li').index();
       		             var iPer = -i*100;
       		             miniParea.stop().animate({ 'marginLeft': iPer + '%'},timed, function(){
                        if(i >= mLilenT-2){miniParea.css({'marginLeft': 100 + '%'}); i = -1;}

								});
       
       	}; // C A B C 화면에서 C -> C를 거쳐서 A화면으로 전환하게끔 하는 과정의 식. 그러므로 이 식은 C(3) 에서 C(-1)로 이동하는 식인 것임. 우우..어려어  이거 젤 어려운 식임..오른쪽에서 왼쪽으로가는 식.
	setInterval(function(){MyProSlide(); }, timed*2);

 //버튼 슬라이드 --------------------------------------------
  
var miniP2 = $('#miniProduct2');
var miniBtn = miniP2.find('.btn');
var miniNext = miniBtn.children('.next');
var miniPrev = miniBtn.children('.prev');

var miniBanner = miniP2.children('.product').find('ul');
var miniBanLast = miniBanner.find('li').eq(-1).clone(true);
    miniBanner.prepend(miniBanLast);
var miniBan2Len = miniBanner.children('li').length;
      miniBanner.css({'width' : miniBan2Len * 100 +'%'});
      miniBanner.children('li').css({'width': 100 / miniBan2Len + '%'});
   miniBanner.css({position: 'relative', 'left': -100 + '%'});

var n = 0;



miniNext.on('click',function(e){
 e.preventDefault();
 n += 1;
 miniBanner.stop().animate({'marginLeft':n * -100 + '%'}, timed, function(){
 
         if( n >= miniBan2Len - 2){
	            n = -1;
	            miniBanner.css({'marginLeft' : 100 + '%'})
     }
	
	});


});

miniPrev.on('cilck', function(e){
	e.preventDefault();
	n -= 1;
	miniBanner.stop().animate({'marginLeft':n * -100 + '%'}, timed, function(){
		 if(n < 0 ){ n = miniBan2Len - 2; }
    miniBanner.css({'marginLeft' : n * -100 + '%'})
		 });
});



var myInterval;
var MvSlide = 
   (function(){
		 myInterval = setInterval(function(){miniNext.trigger('click');}, timed *2);
/*
setInterval(function(){
                	miniNext.trigger('click');
                  //trigger : 대신 처리하는 기능, on 이벤트 같은 '수행하라'는 기능을 가짐.
								}, timed *4);
								*/
								// 변수로 이렇게 불린다만 선언(얘기)했을 뿐 수행하고 있는 상태이다.
								MvSlide(); 
							

	miniP2.on('mouseenter', function(){
		clearInterval(myInterval);
	
});

  miniP2.on('mouseleave', function(){
		MySlide();
	});
	 
});
// 일시정지(clearInterval), 진행(MySlide) 기능 처리가능 
//setInterval : 함수로 감싸고 변수로 활용해서 쓰는게 활용도가 높다.
          

	 
/*


var miniP2List = miniP2.find('.product');
var miniP2Area = miniP2List.find('ul');


miniP2List.css({'overflow':'hidden'});


//--------------------------------

var miniP2Li = miniP2Area.find('li');
var Mini2LiCopy = miniP2Li.eq(-1).clone(true);

   miniP2List.prepend(Mini2LiCopy);
	 miniP2Li = miniP2Area.find('li');

		var miniLiLenT = miniP2Li.length;

		miniP2Area.css({width: miniLiLenT * 100 + '%',
		               'position':'relative', 'left' : -100 + '%'
		                });
		
		miniP2Li.css({width: 100 / miniLiLenT + '%'});
		 
		 //----------------------------------
		 var miniP2Btn = miniP2.find('btn');
			
		 
				if( miniP2Btn.on('click', function(){
					var i = 0;
					var MyProSlide = function(){
								 i+=1;
										
								 var iPer = -i*100;
								 miniParea.stop().animate({ 'marginLeft': iPer + '%'},timed, function(){
								 if(i >= mLilenT-2){miniParea.css({'marginLeft': 100 + '%'});i = -1} });
				
					};



				}))
 */
			
	 
})(jQuery);