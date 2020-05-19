//slide_banner_03-2_zIndex.js

(function($){
  var productWrap = $('.productWrap');
	var product = $('.product');
	var productLi = product.children('li');
	var productBtn = $('.product_btn').children('button');

	product.parent().css({overflow: 'visible'});//넘치는 건 안 보이게 하여 꾸며라.
	
	product.css({width:'100%', position: 'relative'});
	productLi.css({width:'100%',position:'absolute',left:0, top:0});

//1. 보이고자 하는 요소는 남고, 나머지는 display:none;
//2. 순서의 배치를 역순으로 배치해서 처리하는 방법

//	productLi.eq(0).css({zIndex:10});
//productLi.eq(0).siblings('li').css({zIndex:0, display:'none'});
//=============================================

//.indicator_color 생성
var indicatorColorCode = '<div class="indicator_color hidden_wrap"><ul></ul></div>';
var indiLiCode = '<li><a href=""><span></span></a></li>';

productWrap.before(indicatorColorCode);
var indicatorColorUl = $('.indicator_color').find('ul');


var i = 0;
var n = 0;
var proNarr;

for(;i< productLi.length; i += 1){
 indicatorColorUl.append(indiLiCode);
 proNarr = productLi.eq(i).text();
 indicatorColorUl.children('li').eq(i).find('span').text(proNarr);
}

var indicatorColorStyle = '.indicator_color{\
														display: inlinde-block; width:Auto height:30px, text-align:center;\
														position:absolute; right:0; bottom: -50%; z-index:500;\
														}\
														.indicator_color ul {\
														  float:left; width:auto; height:100%; padding:0 10px; background-color:#ccc;\
														}\
														.indicatopr_color li {\
														float:left; margin-right:0.5rem; width: 1.5rem; height:1.5rem; background-color:#fa0;\
														}\
														.indicator_color li.action{ background-color:#0af;}\
														.indicator_color a{ display:block; width:100%; height:100%}';
														
$('head').append('<style>'+ indicatorColorStyle + '</style>');
//$('style').append();
//===============================================
$('.indicator_color').append('<p><span class="n_count"></span> / <span class="t_count">5</span></p');

var indicatorColorCount = '.indicator_color p {float:right; width:40px; background-color:#caf;}';
$('head').find('style').append(indicatorColorCount);
//====================================================
productLi.eq(n).css({zIndex:10});
productLi.eq(n).siblings('li').css({zIndex:0,display:'none'});

$('.n_count').text(n+1);
$('.t_count').text(productLi.length);
	
	var bool = true;
	
	var FadeFn = function(n,k){
		if( k !== n){
      $('.n_count').text(n+1);
			productLi.eq(n).css({zIndex:5, display:'block'});
			indiLi.eq(n).addclass('action');
			indiLi.eq(n).siblings().removeClass('action');
			productLi.eq(k).stop().fadeOut(function(){
				productLi.eq(n).css({zIndex:10});
				productLi.eq(n).siblings('li').css({zIndex:0});
				bool = true;			
			});
		}

	};
//인디케이터 클릭 ------------------------------

var indiLi = indicatorColorUl.children('li'); //인디케이터 ul 안에 있는 li를 선택하겠다.
indiLi.eq(n).siblings().removeClass('action');

indiLi.find('a').on('click', function(e){//선택한 li의 몇번재인가? 중요.
	e.preventDefault();
	k = n;
	n = $(this).parent().index();
	 FadeFn(n,k);
	 
});



FadeFn(n, 1);



//좌우버튼 --------------------------------------
 productBtn.on('click', function(e){
	 e.preventDefault();
	 var k = n;

	 if($(this)[0] === $('.next')[0] && bool){
		 // next  버튼 클릭
		 bool = false;		 
		 //if(n >= productLi.length-1){n = 0} else {n += 1;}
		 (n >= productLi.length -1) ?  n = 0: n += 1;
		 FadeFn(n,k); 

	 }else if($(this)[0] === $('.prev')[0] && bool){
		 //prev 버튼 클릭
		 bool = false;
		 (n <= 0) ? n = productLi.length -1 : n -= 1;	 
		 FadeFn(n,k);
		 };
		});		


})(jQuery);