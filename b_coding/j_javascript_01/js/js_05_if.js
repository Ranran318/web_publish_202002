// js_05_if.js

//삼항 연산자
//(비교) ? 참수행 : 거짓수행 ;
var num = 10;
var moreN = 2;
//var moreN = 20; (num 이 더 작은 수)
/*
(num < moreN) ? 
              console.log('변수 num이 더 작은 수') : 
              console.log('num이 더 큰 수') ;
*/

// 단수 분기
// if(비교) { 참 수행 } else { 거짓 수행 }
// if(비교) { 참 수행] else if (앞의 차이외의) 상황에서  다시 비교 재비교의 참수행)}

/*
if( num < moreN ) {
  console.log( 'num이 더 작은 수'); 
} else {
  console.log('num이 더 큰 수');
}
*/
/*
var t = typeof(moreN); // number //typeof() //''따옴표를 통해 숫자인지 문자인지 확인하는 태그

if( t === 'number'){
   console.log('moreN은 숫자');
  }else if(t === 'string'){
    console.log('moreN은 문자');
  }else {
  console.log('moreN은 숫자가 아님');
}
*/


// 다수 분기 - switch(){case:; break;}
// switch(조건){ case 조건부합1: 기능수행; case 조건부합2: 기능수행; case 조건부합3: 기능수행; default:수행; }

var par = parseInt(moreN); 
swicth( par );{
  case 1:
      console.log('1이다');
      break;
  case 2:
      console.log('2이다');
      break;
  case 3:
      console.log('3이다');
      break;
  default:
      console.log('조건에 맞지 않은 상황이다');
}