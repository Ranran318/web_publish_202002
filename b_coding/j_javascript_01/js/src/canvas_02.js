//canvas_02.js
//var canvas = document.getElementsByClassName('paper')[0]; //ex5
var canvas = document.querySelector('.paper');//ex6버전
var ctx = canvas.getContext('2d');




//사각형을 제외한 선을 그릴때에는 선의 시작이라는 표기를 먼저 해야함.
ctx.beginPath(); //최초의 시작 .  선을 시작하겠습니다.라는 의미 이걸 써야 할 수 있음, 펜툴로 쓰는것.


ctx.moveTo(200,200); // 시작점의 위치잡는 것
ctx.lineTo(200,400); // 시작점에서 그려지는 위치 , lineTo (x좌표,y좌표)
ctx.lineTo(600,400); // 그 다음선의 위치
//ctx.lineTo(200,200);
//ctx.closePath(); //닫힌 도형 만들기


ctx.fillStyle = "#fff";
ctx.strokeStyle = "#f00";
ctx.linewidth = 10
ctx.lineJoin = 'round'; // 모서리모양
//lindJoin = 'round' | 'bebel' | 'miter';
ctx.lineCap = 'round';
//lineCap = 'butt'| 'round' | 'square'; 


ctx.stroke(); // 선에 맞춰 그리겠다.
//ctx.fill();

ctx.moveTo(700,700);
ctx.lineTo(500, 400);
ctx.stroke();

var i = 0;
ctx.moveTo(100,100);
setInterval(function(){
	if(i < 500){
	i += 10;
	ctx.lineTo(100, 100 + i);
	ctx.stroke();
	}
},50);
