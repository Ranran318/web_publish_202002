//canvas_06.js

//날짜 계산하기 

//var myDate = Date().split('');
//console.log(myDate());
var weekArr = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'];
var date    = new Date();               // 오늘 날짜를 파악하는 기능
var today   = date.toDateString();      // 연,월, 일 ,요일(현재날짜 전체)
var year    = date.getFullYear();       // 현재 연도
var month   = date.getMonth() + 1;      // 월 (0은 1월)
var weekDay = weekArr[date.getDay()];   // 요일
var day = date.getDate();               // 날짜
var lastDay = new Date(year, month, 0).getDate();      // 마지막일 파악하기....(수정요청)

var time    = date.toLocaleTimeString();  //현재시간 전체
var hours   = date.getHours();            //현재 시
var minutes = date.getMinutes();          // 현재 분
var seconds = date.getSeconds();          // 현재 초
var milliSeconds = date.getMilliseconds();// 현재 1/1000초

//console.log(lastDay);

var yy = document.querySelector('.yy');
var mm = document.querySelector('.mm');
var dd = document.querySelector('.dd');
var wd = document.querySelector('.week_day');
var ti = document.querySelector('.time');

yy.innerHTML = year;    //=== $('.yy').html(year);
mm.innerHTML = month;   // $('.mm).html(month);
dd.innerHTML = day;     // $('.dd).html(day);
wd.innerHTML = weekDay; // $('.wd).html(weeday);

//setInterval(function(){
//	 var myTime = new Date().toLocaleTimeString();
//	 ti.innerHTML = myTime;  // $('.time').html(time);
//},100);
//ti.innerHTML = time;    // $('.ti).html(month);

var TimeCheck = function(){
							var myTime = new Date().toLocaleTimeString();
							ti.innerHTML = myTime;
							requestAnimationFrame(TimeCheck); //  1초에 60번 반응한다. 스스로 알아서 움직이는 기능
};


TimeCheck();

//------------------------------------------------------
var canvas = document.querySelector('.paper');
var canvasImg = document.querySelector('.canvas_to_img');
var ctx = canvas.getContext('2d');

var Deg = function(d){ 
			var Pi = d /360 * 2 + 1.5;
			//pi 가 원주율, deg각도 재는 것. 거기서 시작이 3시방향이기때문에 1.5 더해줘야 12시방향에서 시작함.시계방향 명령 - true,false
			var myResult = Math.PI * Pi;
			return myResult;
			//return Mydeg;
};

var RenderTime = function(){
	      // 시간파악기능 --------------------------
				 var now = new Date();
				 var today = now.toDateString();
				 var nowTime = now.toLocaleTimeString();
				 var h = now.getHours();
				 var m = now.getMinutes();
				 var s = now.getSeconds();
     
				 // ------------------------------------------
				 var centerX = canvas.width/2;
				 var centerY = canvas.height/2;

				 
				 ctx.fillStyle = '#171717';	
				// var gr = ctx. createRadialGradient(centerX, centerY, 0, centerX, centerY, 300); 
				 //(centerX, centerY, 0, centerX, centerY, 300);=> centerX, centerY, 0 까지 시작 지점/ centerX, centerY 까지 끝지점.
				 //             gr.addColorStop(0, "rgba(0,100,255,0.5)");
				              //gr.addColorStop(0.5, "rgba(255, 250, 255, 0.5)");
				              //gr.addColorStop(0.7, "rgba(255, 250, 255, 0.5)");
				   //           gr.addColorStop(1, "#171717");
				// ctx.fillStyle = gr;


				 ctx.fillRect(0, 0, canvas.width, canvas.height);
        

				 ctx.strokeStyle = "#0cf";
				 ctx.lineWidth = 30;
				 ctx.lineCap = 'round';
				 //ctx.shadowBlur = 10;
				// ctx.shadowColor = "#0cf";
				 
				 // Hours
				 ctx.beginPath();
				 ctx.lineWidth = 40;
				 ctx.moveTo(centerX, centerY);
				 ctx.strokeStyle = "#0af";
				 ctx.arc(centerX, centerY, 150, Deg(h * 30), Deg(h * 30));
				 ctx.stroke();

				 //Minutes
				 ctx.beginPath();
				 ctx.lineWidth = 30;
				 ctx.strokeStyle = "#fa0";
				 ctx.moveTo(centerX, centerY);
				 ctx.arc(centerX, centerY, 250, Deg(m * 6), Deg(m * 6));
				 ctx.stroke();

				 // Seconds
				 ctx.beginPath();
				 ctx.lineWidth = 5;
				 ctx.moveTo(centerX, centerY);
				 ctx.strokeStyle = "#f0a";
				 ctx.arc(centerX, centerY, 300, Deg(s * 6), Deg(s * 6));
				 ctx.stroke();

				 //console.log(Deg(s*6));

				 //font세팅
				
				 ///today
				 ctx.font = "bold 30px Arial";
				 ctx.fillStyle = "#fff"; // 문자의 색상원하면.
				 ctx.textAlign = 'center';
				 ctx.fillText(today, centerX, centerY+100); // 채울 글자들

				 ///nowTime 
				 ctx.font = "normal 25px Arial";
				 ctx.fillText(nowTime, centerX, centerY+140); // 채울 글자들 

				  
				  //이미지를 강제로 
				 var imgData = canvas.toDataURL(); // png .....이미지를 강제로 
				 //var imgData = canvas.toDataURL('image/jpeg'); //jpg .......이미지를 강제로 
				 
		         canvasImg.src = imgData;
		         canvasImg.alt = nowTime;
		 		 
				 requestAnimationFrame(RenderTime);//일정시간마다 돌리기 위해서.
				};
		
		//setInterval(function(){
		//	RenderTime();
//
		//},40);

		canvas.style = "display:none";
		 RenderTime();
		