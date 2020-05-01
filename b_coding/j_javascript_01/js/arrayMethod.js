/*
* 여러줄 주석
* 내용은 계속 주석
*/

// 한줄 주석

//const, let, var

//var nameText = '12345';
//document.write(nameText);
//alert();
//console.log()

/*
if(1 === '1'){}else{}
1 === '1' ? : ;
*/
/*
var a = [1,2,3,'a','5']
var o = {
	'a': 'apple', 
	'b' : 'banana'
};

*/

/*var ar = new Array*/

//var array_01 = ['html', 'css', 'javascript'];
//console.log(array_01[3]);

/*
* array 메소드

- 변수.length                -> 갯수파악, 뒤에 ()를 안 붙임.
- 변수.push(['요소'])        -> 배열상의 뒤에 첨부 
- 변수.pop()                 -> 배열상의 마지막 요소를 제거
- 변수.unshift(['요소'])     -> 배열상의 첫 요소에 첨부
- 변수.shift()               -> 배열상의 첫 요소를 제거
- 변수.indexOf(['value'])    -> 요소의 값이 몇번째 위치했는지 파악(0이 첫번째)
- 변수.splice(순서위치, 갯수) -> 순서위치에서부터 갯수만큼 제거
- 변수.slice(순서위치, 순서위치)               -> 별도의 변수에 사본을 만드는 것
                                      -> 별도의 변수에 사본을 만드는 것.
																변수를 새로 만들어서 내용을 수정하면 같이 변경되므로,
																이전내용을 가질 수 있도록 복사.

- 변수.concat([배열])         -> 배열요소 합치기(모아서 전체보기개념)
- 변수.sort()                 -> 배열요소내의 이름을 순차정렬(오름차순개념)
- 변수.reverse()              -> 배열요소를 순서 뒤집기(내림차순개념)

*/


var array_01 = ['html','css','javascript'];

array_01.push('sass');
array_01.push('ejs');
array_01.push('typescript');

//console.log(array_01.length);
//console.log(array_01[3]);

//console.log(array_01.length);

array_01.pop();
//console.log(array_01);

array_01.unshift('bash');
array_01.unshift('editor');
//console.log(array_01);

array_01.shift();
array_01.shift();

//console.log(array_01);

var i = array_01.indexOf('scss');
//console.log(i);// 1

array_01.splice(i, 2);
console.log('array_01:',array_01);


var ar_02 = array_01; //.slice();
console.log( 'ar_:', ar_02);

array_01.push('elm'); 
//console.log(array_01);
//console.log(ar_02);

//var a =['1,2,3,4'];
//var b = a;
//console.log(a, b);

//a.pop();
//a.pop();
/* =============== slice ============== */
//var c = a.slice();

//a.pop();
//a.unshift('123');
//console.log(a, b, c);


var a = [1,2,3,4,5,6,7,8,9,10]
var b = a.slice(5,-2);
console.log(b);

// =====================================
var program1 = ['photoshop','illustrator'];
var program2 = ['html','css', 'javascript'];
var myEdu = program1.concat(program2);
console.log(myEdu);

//CF

var program3 = ['scss','nodejs','express','gulp'];
var program4 = ['vue', 'react', 'svelte'];

myEdu = program1.concat(program2).concat(program3).concat(program4) ;
console.log(myEdu);

myEdu.sort();
console.log(myEdu);

myEdu.reverse();
console.log(myEdu);

// ======== dom ============== //
var bodyEl = document.getElementsByTagName('body')[0];
var createP = document.createElement('p');
bodyEl.appendChild(createP);
var p1 = document.getElementsByTagName('p')[0];
p1.setAttribute('class','par');
var ClassNamePar = document.getElementsByClassName('par')[0];

ClassNamePar.textContent = 'myEdu';

var t = '웹 언어를 잘 파악해서 익혀 보세요.';
console.log(t);
var tArr = t.split('');
//var tArr = t.split('-');
//console.log(tArr);

var arrToStr = myEdu.join(' + ');
console.log(myEdu);
console.log(arrToStr);