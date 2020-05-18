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
var miniProduct = $('#miniproduct');
var miniBtn     = miniProduct.find('button');
var miniBtnNext = miniProduct.find('.next');
var miniBtnPrev = miniProduct.find('.prev');
var timed       = 500;
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
//-----------------------------------------

var productUl = miniProduct.find('.product');
var cloneLi = productUl.children('li').eq(-1).clone(true);
    productUl.prepend(cloneLi);

var productLi = productUl.children('li');
var proLiLen = productLi.length;
console.log(proLiLen);



// productUl.width(proLiLen * 100 + '%'); 
productUl.css({width:proLiLen * 100 + '%', marginLeft: -100 + '%',
              position: 'relative'});
productLi.width(100 / proLiLen + '%');

var n = 0;
var check = true;
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
	
/*
	var prSpan = productLi.find('span');
//	prSpan.css({bottom:-100+'%'});
//버튼 기능 합치기---

miniBtn.on('click', function(e){

		e.preventDefault();
		var thisBtn = $(this)[0];
		
//next 버튼 클릭시
		prSpan.animate({bottom: -100 + '%'});
		if(thisBtn === miniBtnNext[0] && check ) {
			check = false;
			n += 1;
			productUl.stop().animate({left: -n * 100 + '%'}, timed, function(){
				if(n >= proLiLen - 2){	n = -1;	 }
				prSpan.animate({bottom:0});
	
				productUl.css({left: -n * 100 + '%'});
				check = true;
			 });
	  	}



//prev 버튼 클릭

else if(check) {
	check =false;
	n-= 1;
	productUl.stop().animate({left: -n * 100 + '%'},timed,function(){
	        	if(n <= -1){ n = proLiLen -2; }
	        	productUl.css({left: -n *100 + '%'});
	        	check = true;
					});
				 }




});



//----------------------
var mvImg;
var mvSlideGo = function(){
     	mvImg = setInterval(function(){
               miniBtnNext.trigger('click');
	    }, timed*15 );};

   mvSlideGo();



  //miniProduct.on('mouseenter',function(){clearInterval(mvImg);});
  var ClearFn = function(){clearInterval(mvImg)};

	//miniProduct.on('mouseenter',function(){ mvSlideGo();});
	var GoFn = function(){mvSlideGo()};

	miniProduct.on({'mouseenter' : ClearFn, 'mouseleave':GoFn});

 




*/


})(jQuery);