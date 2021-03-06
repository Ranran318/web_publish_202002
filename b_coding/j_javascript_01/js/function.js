// function.js

//function() {     }

//var Fn = function ( rel) {
//console.log( (rel / 10) + rel );
//110%
//console.log( (rel / 100 * 2.8) + rel );
//}
//Fn( 10 );
//Fn( 4000) ;
//Fn( 9200) ;
//Fn( 300) ;
//Fn( 14580) ;

/*
* 기명함수 : 함수의 이름이 존재하는 함수
* 익명함수 : 이름이 존재하지 않는 함수
* 
*  기명함수(함수 선언식) -> function FnName() {}
*  익명함수 -> function (){}
*  익명함수는 추가로 형태를 가진다. : 함수표현식, 즉시실행함수
* --------------------------------------------
*함수 표현식 : 변수명에 함수를 담는 기능 -> var MyFn = function (){}
*즉시 실행함수 : 익명함수를 재호출하지 않고, 생성하자마자 바로 실행하도록 처리
								( function (){} ) ();
-------------------------------------------------
*함수내부에는 수행결과를 확인할 수 있도록 값을 돌려주는 기능이 필요
* 값을 반환 또는 돌려주는 기능을 return이라고하며,
* return 이후에는 아무런 동작을 하지 않는다.
*/

// -------------------

/* ------익명함수
function Fn1(n){
	console.log(n *10);
}
*/

//Fn1(10); //값:100
//----------------------
console.log ( Fn1(8000)); //함수를 나중에 만들어도 호출이 가능 hoist 현상. 미리 호출하면 기능이 꼬일 수 있다.그러므로 대체로 
/*
var Fn2 = function(n){
 return n / 2;
}
*/ //이식을 쓰는게 좋다.

function Fn1(n){
	return n *10;
}
console.log (Fn1(10));
var rel1 = Fn1(5);
console.log( rel1);
//-------------------------
//console.log( '--', Fn2(5)); // 표현식의 형태는 함수 이전에 호출시 동작하지 않는다. ex.핸드폰이 나오기도 전에 걸어다닛면서 인터넷가능하면 좋겟다~ 라는 얘기 . 즉 잘못된 것 


//위에 식보다  아래 식을  대체로 쓰는게 좋다.
var Fn2 = function(n){
	return n / 2;
}

var rel2 = Fn2(50); //Fn2 를 호출함.이라는 해석.//전역함수 //Q. var rel2 쓰지 않고도 Fn2(50) 만 선언해도 되는 건가? 가능함. 근데 활용이 어찌됏는지 식을 웹으로 확인할 수 없기 때문에 var를 선언해주는게 좋다. 
console.log( rel2 );
console.log( Fn2(4000));

//--------------------------
//즉시실행함수


(function(n){
	var rel3 = n; //지역함수
	console.log(rel3);
})(555);

// ------------------

