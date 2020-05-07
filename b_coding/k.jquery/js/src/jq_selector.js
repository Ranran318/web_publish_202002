//jq_selector.js

// jquery 선택자
/**
 * js의 선택자는 매우 복잡하게 만들어져 있기에 처음 접하기엔 거리감이있어,
 * css 선ㅌ책자와 유사한 형태로 만들어져있기에 접근하기 쉬운 라이브러리
 * css 선택자에 $('')형태만 감싸주면 동일하게 선택됨
 */
/*
 $('h1').css({width:'500px', 'height': '100px','backgroundColor':'#0ff'}); //h1 선택한 것
 $('h1 a').css({'display':'block', 'width':'400px','backgroundColor':'#fa0'});
 $('h1 > a').css({'color':'#fff', 'textAlign':'center','margin':'auto'});
 $('a[href="#"]').css({'padding':"0.5rem",'textShadow':'0.2rem 0.2rem 0.2rem #000'});
*/

/** jquery 선택자
 * type 선택자 (tag를 직접 선택) : $('html, body') ex. $('h1,h2,h3,h4,h5,h6')
 * 자식선택자 
 * ---------> $('ul > li'), $('ul').children('li')
 * 자손선택자
 * ---------> $( 'ul li'), $('ul').find('li')
 * id/clas 선택자
 ----------->
 * 형제선택자
 * 인접형제------> $('dt + dd') , $('dt').next('dd')
 * 동생인 형제들------> $('dt ~ dd') , $('dt').nextAll('dd')
--------------------------------------------------------
----------css에서는 쓸 수 없는 것들이지만 js에선 쓰는
   이전형제----------> $('dd').prev('dt')
	 형에 대항하는 형제들 ------> $('dd').prevAll('dt')
	 자신을 제외한 형제모두 ------> $('dt').siblings('dd')
-----------------------------------------------------------

 
 * 부모선택자
	 바로 위의 선택자 
	 -----> $('#box').parent('div')
	 조상격 부모
	 -----> $('#box').parents()      //부모격에 해당하는 모든 -> 괄호안에 아무것도 안 쓰면 알아서 선택.
	 -----> $('#box').parentsUntil() // 부모격에서 해당하는 요소 중 하나

 * nth 선택자(css에 일부 존재)
   ---이 경우 잊어버리는게 좋음---> $('li:nth-child(3)')  , $('li:nth(2)')
   ---이 경우 잊어버리는게 좋음---> $('li:nth-of-type(3)'), $('li:nth(2)')
   ---이 경우를 더 잘씀.기억해.---> $('li').eq(2)
	 -------> $('li').odd() , $('li').even()
	 
 * 속성선택자 
	 -------> $('a[href="#"]')
	 
	 =============================================================

 * 해당위치를 파악하는 기능
	 $('li').eq(0)  : li의 요소의 순번을 직접 지정
	 $('.n').index() : .n의 순번을 확인하는 기능
 * 이벤트가 발생되는(주체가 되는) 요소
   $(this)
 */

 // $(document).ready(function(){}) - 이렇게 안 쓰고 아래 표현으로 씀

(function($){
	// 자식선택자/자손선택자
	//$("ul>li").css({"color":"#777"});
	$("ul").children("li").css({"color":"#777"});
	$("ul").children('li').find('span').css({"fontSize":"2.5rem","fontWeight":"bold"});

})(jQuery);
