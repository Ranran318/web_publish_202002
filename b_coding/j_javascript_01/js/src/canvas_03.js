//canvas_03.js
//var canvas = documetn.getElementsByClassName('paper')[0];
var canvas = document.querySelector('.paper');
var ctx = canvas.getContext('2d');


ctx.beginPath();//시작하겠다
//ctx.moveTo(400,400);
ctx.arc(400,400,200,0, Math.PI * 2, true); //true - 반시계방향, Math.PI -> 3.14파이//선그리겠다.
ctx.closePath();
ctx.stroke();


ctx.beginPath();
//ctx.moveTo(550, 400);
ctx.arc(400,400,250,0, Math.PI * 2, true); //true - 반시계방향
ctx.closePath();
ctx.stroke();
// ================================================ 아래는 첫번째 버전
////ctx.moveTo(550, 400);
//ctx.arc(400,400,150,0, Math.PI * 2, true); //true - 반시계방향
//ctx.stroke();


ctx.beginPath();
ctx.lineWidth = 5;
ctx.arc(400, 400, 200, Math.PI * 1 ,false); //false - 시계방향
ctx.stroke();
//ctx.closePath();
//=============================================== 아래는 첫번째 버전
//ctx.beginPath();
//ctx.lineWidth = 5;
//ctx.arc(400, 400, 200, Math.PI * 0, Math.PI * 1 ,false); //false - 시계방향
//ctx.stroke();
////ctx.closePath();


ctx.lineWidth = 20;
ctx.strokeStyle = '#fff';
ctx.shadowColor = '#f03';
ctx.shadowblur = 20;
// ============================================== 아래는 첫번째 버전
//ctx.lineWidth = 20;
//ctx.strokeStyle = '#f07';
//ctx.shadowColor = '#f03';
//ctx.shadowblur = 20;


ctx.beginPath();
ctx.arc(300,300,50,0,Math.PI * 2, true);//arc(x좌표,y좌표,반지름,시작점,그려진 정도,그리는 방향)
ctx.closePath();
ctx.stroke();
ctx.fill();
// ============================================= 아래는 첫번째 버전
//ctx.beginPath();
//ctx.arc(300,300,50,0,Math.PI * 2, true);//arc(x좌표,y좌표,반지름,시작점,그려진 정도,그리는 방향)
//ctx.closePath();
//ctx.stroke();
//ctx.fill();


ctx.beginPath();
ctx.arc(500,300,50,0,Math.PI *2 ,true);
ctx.closePath();
ctx.stroke();