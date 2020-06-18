//slide_banner_04-my

(function(){
	 //클릭했을 때 01 fadeout 02는 fadein 하나를 기준으로 두고(position:fixed, absolute) 
		//서로 앞뒤로 바뀜- z-index attr 
		
		



var miniProduct        = $('#miniProduct');
var miniBtn            = miniProduct.find('button');
var miniBtnNext        = miniProduct.find('.next');
var miniBtnPrev        = miniProduct.find('.prev');
var timed              = 500;

var productUl = miniProduct.find('.product');
var cloneLi = productUl.children('li').eq(-1).clone(true); //li 하나 복제. 이어붙이는 애 하나 생성
    productUl.prepend(cloneLi);

var productLi = productUl.children('li');
var proLiLen = productLi.length; //li 의 갯수
var productLidiff = productUl.siblings('li')


miniBtnnext.on('click',function(){
	e.preventDefault();
	 
	var 
	PL = productLi.eq()
	productLi.css({'position' : 'fixed', 'z-index' : PL * 100 })
		proLiLen = productLi.length;
		
	for( ; PL < 4 ; PL+=1){productLi.stop().fadeIn()}
	   productLidiff.stop().fadeout()

});
//===============================================
/*
var n = 0;
var check = true;

var miniProIndiBtnArea = miniProduct.find('.indicator');
miniProIndiBtnArea.after('<div class="indi_color hidden_wrap"><ul></ul></div>');
var miniProIndiUl = $('.indi_color').children('ul');
var i = 0;

}


var miniProIndiLi = miniProIndiUl.find('li').children('a');
miniProIndiUl.find('li').eq(0).addClass('action');

miniProIndiLi.on('click', function(e){
                  e.preventDefault();
                  var thisParent = $(this).parent();
                      n = thisParent.index();
                  
                  
                  thisParent.addClass('action');
									thisParent.siblings().removeClass('action');
									
									productUl.stop().animate({left: -n * 100 + '%'},timed);
									
});
*/;

var mvImg;
var MvSlideGo = function(){
     	mvImg = setInterval(function(){
							 miniBtnNext.trigger('click');
							 //console.log('!');
	    }, timed*5 );};

   MvSlideGo();

  //miniProduct.on('mouseenter',function(){clearInterval(mvImg);});
  var ClearFn = function(){clearInterval(mvImg)};
	//miniProduct.on('mouseenter',function(){ mvSlideGo();});
	var GoFn = function(){MvSlideGo()};

	miniProduct.on({'mouseenter' : ClearFn, 'mouseleave':GoFn});




})(jQuery);
function newFunction() {
	;
}

