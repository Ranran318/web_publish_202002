//canvas_01.js

(function($){
		 //var canvas = $('.paper');
     //var canvas = document.getElementsByClassName('paper')[0];
     var canvas = document.querySelector('.paper');
		 //if (canvas.getContext){ console.log('canvas 지원 브라우저 ');}
     var ctx = canvas.getContext('2d');  //캔버스를 3d로 만들거니 2d로 만들거니하는 getContext();
		
		 //ctx.fillRect(x, y, width, height); -> 면을 채우는 사각형
		 //ctx.clearRect(x, y, width, height); -> 채워진 사각형 구멍을 뚫어주는 형태
		 //ctx.strokeRect(x, y, width, height); -> 선형태의 사각형;
		 ctx.fillStyle = "#ff0";
		 ctx.strokesyale="#fff";
		 ctx.lineWidth = 10;
     ctx.fillRect(100, 100, 600, 600); 
     ctx.clearRect(150, 150, 400, 400);
     //ctx.fillRect(170, 170, 300, 300);
		 //ctx.clearRect(172, 172, 296, 296);
		 ctx.strokeRect(170,1770,300,300);

			ctx.fillStyle = "#fff";
			ctx.fillRect(200,200,100,100);

		})(jQuery);