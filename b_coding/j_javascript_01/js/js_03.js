// js_03.js

//  const, let, var

var a,b,c;

  a= 10;
  b= '10';

  // console.log(a, b);
  // console.log(b);

  //console.log( typeof(a) );
  //console.log( typeof(b) );

  //c = a + 10; // 10 + 10
  //console.log( c );

//c = 'x' + 'i';
//console.log( c );

//c = 10 + 'i';
//console.log( c );

//c = 1 + '1000'; // 11000
//console.log( c );
//console.log( typeof(c) );
//console.log(c, typeof(c));

//=(변수) 대입하다 , ==(비교): 같다.

c = a + b;
console.log( c );

c= parseInt(c) + 10; // parseInt() -> ()안의 내용을 숫자(정수)화 처리
console.log( c );

c = c + 10;
console.log( c );

c = 'a' + c;
console.log( c ); // a1030

c = parseInt(c); // a1030
console.log(c);

c = 1 + 'a' + c; 
console.log(c); // 1a1030

c= parseInt(c); // 1
console.log(c);

  // 숫자 + 숫자 = 숫자
  // 문자 + 숫자 = 문자로 변환이 되면서 나열
  // 문자 + 문자 = 나열
  // parseInt() = 앞에서부터 순서대로 정수로 변환,  
  //              중간에 문자가 오면 이전 숫자까지만 처리
  //              첫글자각 문자이면 NaN(숫자가 아님) 도출.
  // 문자의 연산은 나열을 듯하는 +만 사용, 나머지 / * - % 연산은 x
//------------------------------------------------

//+(더하기), -(뺄셈), *(곱셈), /(나눗셈) ,%(나머지값)

var d, e, f, g;
d = 10 + 100;
console.log(d); //  110

d = 10 - 5; 
console.log(d); // 5

d = 10 * 2;
console.log(20);

//d = 10 / 3;
//console.log(parseInt(d));

d = 10 / 3;
console.log(Math.round(d));

// Math.abs()     -> 절대값
// Math.round()   -> 반올림
// Math.ceil()    -> 버림
// Math.PI()      -> 원주율
// Math.random()  -> 0~1
//  Math.sign()   -> 값이 양수/음수 구분
//  Math.max([a,b,c,d,e...])  ->  []내부 값중 가장 큰수
//  Math.min([a,b,c,d,e...])  ->  []내부 값중 가장 작은수

//parseInt()   -> 강제로 정수화(소수점을 가질 수 없다. 버림)
//parsefloot() -> 강제로 숫자화(소수점을 가질 수 있다.)

//------------------------------------------------------------

d = 10 % 3; // 10을 3으로 나눈상태에서 정수로 나누고 남은 나머지 값
console.log( d );

// 홀수/짝수
// 요일

/*e = ? / 2;
if(e == 1 ){
  console.log('홀수값');
} else {
  console.log('짝수값');
}*/

e = 4 % 2;
(e == 1) ? console.log('홀수값') : console.log('짝수값');

// a == b -> a 와 b가 서로 비교해서 참(true)/거짓(false)를 도출
// (조건비교) ? 조건이 참인 경우 : 조건이 거짓인 경우 ;


/*e = 10;
//console.log( e );

e = e + 5;
//console.log( e ); // 15

e = e + 20;
//console.log( e ); // 35

e += 10; // 자기 자신에게 10을 추가로 더한다.
//console.log( e );

e += 300;
//console.log( e );

e -= 100;
//console.log( e ); //  245

e *= 10;
//console.log( e );

e /= 100;
//console.log( e ); // 24.5

e =  Math.round(e);
//console.log( e );

/*console.log( Math.round( e ));*/

//e % = 4;
//console.log( e );

f = 7;
console.log(f);

f= f + 1;
console.log(f);

f += 1;
console.log(f);

f++;
console.log(f);

f++;
console.log(f);

++f;
console.log(f); //12



console.log(++f); //13
console.log(++f); //14
console.log(++f); //15
console.log(++f); //16
console.log(++f); //17
console.log(f);   //17

console.log('-------------------');

console.log(f++); //17
console.log(f++); //18
console.log(f++); //19
console.log(f++); //20
console.log(f++); //21
console.log(f);   //22

console.log(--f);
console.log(--f);
console.log(--f);
console.log(--f);
console.log(f);
console.log(f--);
console.log(f--);
console.log(f--);
console.log(f--);
console.log(f);

// 증감연산자 : ++, -- 처리하여 1씩 증가/감소 하게 되는 연산자
//파이썬은 증감 ㄴㄴ 
// --------------------------기초 연산자