//side_banner_test.js

(function(){
	/*
	var mnP = $('#miniproduct');
	var btn = $('.side_btn');
	var prevbtn = $(btn).children('button').eq(1);
	var nextbtn = $(btn).children('button').eq(2);

	var pWrap = $('.product_wrap');
	var pd = $('.product');
	var proLi = $(pd).find('li');

var n = 0;

  var proLiLeng = $(proLi).length;
  mnP.css({'overflow':'hidden'});

	
	nextbtn.on('click',function(e){
	e.preventDefault();
	n += 1;
	pd.stop().animate({'marginLeft':n * -100 + '%'}, timed, function(){
	
					if( n >= proLiLeng - 3){
							 n = -1;
							 pd.css({'marginLeft' : 100 + '%'})
			}
	 
	 });
 
 });
 
 prevbtn.on('cilck', function(e){
	 e.preventDefault();
	 n -= 1;
	 pd.stop().animate({'marginLeft':n * -100 + '%'}, timed, function(){
			if(n < 0 ){ n = proLiLeng - 3; }
			pd.css({'marginLeft' : n * -100 + '%'})
			});
 });
 
*/

//인디케이터,버튼 언급 ------
var miniProduct        = $('#miniProduct');

var miniBtn            = miniProduct.find('button');
var miniBtnNext        = miniProduct.find('.next');
var miniBtnPrev        = miniProduct.find('.prev');
var timed              = 500;
//-----------------------------------------------
// miniBtn.on('click',function(e){
// 	/*
// 	console.log($(this));
// 	console.log('next:', miniBtnNext);
// 	console.log('prev:', miniBtnPrev);
// 	*/
// });
/*
	var t = $(this)[0];
	console.log( t == miniBtnNext[0]); // 판단비교용으로 쓸 수 있다. [0]를 안 써주면 false라고 뜸. true가 나오게 [0]를 써줘야함.
});

*/
//상품 언급-----------------------------------------

var productUl = miniProduct.find('.product');
var cloneLi = productUl.children('li').eq(-1).clone(true); //li 하나 복제.
    productUl.prepend(cloneLi);

var productLi = productUl.children('li');
var proLiLen = productLi.length; //li 의 갯수
console.log(proLiLen);



// productUl.width(proLiLen * 100 + '%'); 
productUl.css({width:proLiLen * 100 + '%', marginLeft: -100 + '%',
              position: 'relative'});
productLi.width(100 / proLiLen + '%');




var n = 0;
var check = true;

// **indicator 기능 추가(indicator_color)
// 광고 갯수만큼(복제처리제외) indicator 처리
var miniProIndiBtnArea = miniProduct.find('.indicator');
miniProIndiBtnArea.after('<div class="indi_color hidden_wrap"><ul></ul></div>');
var miniProIndiUl = $('.indi_color').children('ul');
var i = 0;
for(; i<proLiLen - 1 ; i++){
	miniProIndiUl.append('<li><a href="#"><span>광고 ' + ( i + 1 ) + '설명</span></a></li>');
}

//$('head').append('<style></style>');
//var styleEl = $('head').find('style');
//var styleT = "
//              .pr_01{background-image: url('../../img/minicake2.jpg');}\
//              .pr_02{background-image: url('../../img/minicake.jpg');}\
//              .pr_03{background-image: url('../../img/minicake2.jpg');}\
//              .pr_04{background-image: url('../../img/minicake.jpg');}\
//              .pr_05{background-image: url('../../img/minicake2.jpg');}";
//styleEl.text(styleT);
//=> js 를 조금만 더 공부하면 이런 디테일까지 가능함.

var miniProIndiLi = miniProIndiUl.find('li').children('a');
miniProIndiUl.find('li').eq(0).addClass('action');

miniProIndiLi.on('click', function(e){
                  e.proventend();
                  var thisParent = $(this).parent();
                      n = thisParent.index();
                  
                  
                  thisParent.addClass('action');
									thisParent.siblings().removeClass('action');
									
									productUl.stop().animate({left: -n * 100 + '%'},timed);
									
});


//------------------------------------------------

/*
miniBtnNext.on('click', function(e){
	e.preventDefault();
	if(check){
		     check = false;
	       n -= 1;
	       productUl.stop().animate({left: -n * 100 + '%'},300,function(){
	       	if(n >= proLilen - 2){n= -1;}
	         productUl.css({left: -n * 100 + '%'});
          	check = true;
       
		});
	}
});

miniBtnPrev.on('click',function(e){
	e.preventDefault();
	if(check){
	      	check = false;
	      	n -= 1;
	      	productUl.stop().animate({left: -n * 100 + '%'}, 300, fucntion(){
	      		 if(n <= -1){ n = proLiLen - 2;}
	      		 productUl.css({left: -n * 100 + '%'});
	      		 check = true; });
		}
	});
	*/
	

	var prSpan = productLi.find('span');
//	prSpan.css({bottom:-100+'%'});
//버튼 기능 합치기---

miniBtn.on('click', function(e){
   
   		e.preventDefault();
   		var thisBtn = $(this)[0];
	   	prSpan.animate({bottom: -100 + '%'});
	   	if(thisBtn === miniBtnNext[0] && check ) {//next 버튼 클릭시
	   		check = false;
	   		n += 1;
	   		productUl.stop().animate({left: -n * 100 + '%'}, timed, function(){
	   			         if(n >= proLiLen - 2){	n = -1;	 }
	   			         prSpan.animate({bottom:0});
	   			         productUl.css({left: -n * 100 + '%'});
	   			         check = true;
	   		 });
	     	}else if(check) {//prev 버튼 클릭
              	check =false;
              	n-= 1;
              	productUl.stop().animate({left: -n * 100 + '%'},timed,function(){
													if(n <= -1){     n = proLiLen -2;    }
													prSpan.animate({bottom:0});
              	        	productUl.css({left: -n *100 + '%'});
              	        	check = true;
              					});
              				 }
miniProIndiUl.find('li').eq(n).addClass('action');
miniProIndiUl.find('li').eq(n).siblings('li').removeClass('action');
//=> 좌우 버튼 클릭시 - indicator 처리
//=> setInterval 처리시 - indicator 처리


});



//----------------------
var mvImg;
var MvSlideGo = function(){
     	mvImg = setInterval(function(){
							 miniBtnNext.trigger('click');
							 console.log('!');
	    }, timed*5 );};

   MvSlideGo();

  //miniProduct.on('mouseenter',function(){clearInterval(mvImg);});
  var ClearFn = function(){clearInterval(mvImg)};
	//miniProduct.on('mouseenter',function(){ mvSlideGo();});
	var GoFn = function(){mvSlideGo()};

	miniProduct.on({'mouseenter' : ClearFn, 'mouseleave':GoFn});

 
// 좌우 버튼 클릭시 - indicator 처리
// setInterval 처리시 - indicator 처리




})(jQuery);