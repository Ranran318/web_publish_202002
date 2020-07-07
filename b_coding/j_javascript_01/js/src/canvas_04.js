//canvas_04.js

var canvas = document.querySelector('.paper');
var ctx = canvas.getContext('2d');
//캔버스를 위한 무조건 적인 세팅. (function(){})(jQuery); 같은.
ctx.fillStyle = "#579";

var MoveCircle = function(posX, poY){

	ctx.clearRect(0,0, canvas.width, canvas.height);
//	ctx.fillStyle = 'hsla('+ Math.random()*360 +', 100%, 50%, 0.7');
	ctx.beginPath();
	ctx.arc(posX, poY, 80, 0, Math.PI * 2, false);
	ctx.closePath();
	ctx.fill();//면을 채우는 효과
};
	
	
	


var i = 0
var j = 400;
var setmove;
var MoveAni = function(){
     setmove = setInterval(function(){
              	i += 20;
              	if(i > 200){
              		 j += 10;
              		 if(j > 600){
              			  j = 600;			 
              		 }
              	}
              	MoveCircle(i,j);
								//console.log(i);
      if(i > 700){
				clearInterval(setmove);
			}          
    },100);
};

//MoveAni();

var k = 0;
var reqAni;
function Move(){
	 k += 1;
	 console.log(k);
	 reqAni = requestAnimationFrame(Move);
	 
	 if(k >= 500){
		      cancelAnimationFrame(reqAni);
	 }
	}

Move();


//
//var MoveAni2 = function(){
//	setmove = function(){
//		i += 20;
//		if(i > 200){
//			 j += 10;
//			 if(j > 600){
//					j = 600;			 
//			 }
//		}
//		MoveCircle(i,j);
//		console.log(i);
//		// 아래거랑 같은 것. => window.requestAnimationFrame();
//		requestAnimationFrame();
//	};
//}
//
//MoveAni2();