//jq_selector.js

// jquery 선택자
/**
 * js의 선택자는 매우 복잡하게 만들어져 있기에 처음 접하기엔 거리감이있어,
 * css 선ㅌ책자와 유사한 형태로 만들어져있기에 접근하기 쉬운 라이브러리
 * css 선택자에 $('')형태만 감싸주면 동일하게 선택됨
 */

 $('h1').css({width:'500px', 'height': '100px','backgroundColor':'#0ff'}); //h1 선택한 것
 $('h1 a').css({'display':'block', 'width':'400px','backgroundColor':'#fa0'});
 $('h1 > a').css({'color':'#fff', 'textAlign':'center','margin':'auto'});
 $('a[href="#"]').css({'padding':"0.5rem",'textShadow':'0.2rem 0.2rem 0.2rem #000'});

