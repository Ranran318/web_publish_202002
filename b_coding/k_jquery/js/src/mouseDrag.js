//  mouseDrag.js
(function($){
	// 첫번째 기능
	var part_01 = $('.part_01');
	var beforePosX;
	var afterPosX;
	var part_01Wrap = part_01.find('.slide_wrap');
	var p01Width = part_01Wrap.outerWidth();
	var p01minWidth = part_01Wrap.find('div').eq(0).outerWidth();
	var p01Left = parseInt(part_01Wrap.css('marginLeft'));
	var mvResult = p01Left;


	part_01Wrap.css({marginLeft: p01Left});


	var TouchDrag = function(){
		p01Left = part_01Wrap.css('marginLeft');
		var result = beforePosX - afterPosX;
		if(result < -20){
			mvResult = mvResult + p01minWidth;
			if(mvResult <= 0){
				part_01Wrap.animate({marginLeft: mvResult });
			}else{
				mvResult = 0;
			}
		}else if(result > 20){
			mvResult = mvResult - p01minWidth;
			if(mvResult < -(p01Width-p01minWidth) ){
				mvResult =  -(p01Width-p01minWidth);
			}else{
				part_01Wrap.animate({marginLeft: mvResult });
			}
		}
		console.log(mvResult);
	}
	// touchstart: 터치를 시작하는 지점
	part_01.on('touchstart mousedown', function(e){
		// console.log(e);
		var eType = e.type;
		var posX;		
		if(eType == 'touchstart'){	posX = e.touches[0].pageX;	}
		else if(eType == 'mousedown'){	posX = e.originalEvent.pageX;	}
		beforePosX = posX;
		// console.log('start: ', posX);
	});
	// -----------------------------------------------------	
	// touchend:터치를 띄는 시점
	part_01.on('touchend mouseup', function(e){
		var eType = e.type;
		(function(){
			var posX;
			if(eType == 'touchend'){ posX = e.changedTouches[0].pageX;	}
			else if(eType == 'mouseup'){	posX = e.originalEvent.pageX;	}
			return afterPosX = posX;
		})()
		// console.log( beforePosX, afterPosX );
		TouchDrag();
	});
// --------------------------------------------------------------------

// 터치 이동시 처리 ====================================================
var touchOn = false;
var part_02 = $('.part_02');
var part_02Wrap = part_02.find('.slide_wrap');
var p02Width = part_02Wrap.outerWidth();
var part02MinWidth = part_02Wrap.children('div').eq(0).outerWidth();

part_02.css({cursor:'move'});

// 최초위치(marginLeft) - 터치첫지점 - 터치이동지점 * -1
var startPosX;
var touchOn = false;


part_02.on('touchstart mousedown', function(e){
	var start;
	var part_02Left;
  var eType = e.type;

   // e.which 기능으로 마우스 왼버튼, 오른버튼, 가운데버튼 등 다양한 옵션설정을 추가로 해야한다.

 if(eType == 'touchstart'){
	 start = e.touches[0].pageX;
 }else if(eType == 'mousedown' && e.which == 1){
	 //mousemove는 ...
		start= e.originalEvent.pageX;
		touchOn = true;
	
 }

 // console.log(nowMoveX);
 part_02Left = parseInt(part_02Wrap.css('marginLeft'));
 startPosX = part_02Left - start;
//  console.log(startPosX)
});




//마우스를 띄었을 때 조건 ----
part_02.on('touchmove mousemove', function(e){
		var nowPosX;
		var nowMoveX;
		var eType = e.type;

		if(eType == 'touchmove'){
			       nowPosX = e.changedTouches[0].pageX;
		}else if(eType == 'mousemove' && touchOn == true){
		  	nowPosX = e.originalEvent.pageX;
		}
		nowMoveX = parseInt(startPosX - nowPosX * -1);
		
		if(nowMoveX > 0 ){
			 nowMoveX = 0;

		}else if(nowMoveX <= -(p02Width - part02MinWidth)){
                  nowMoveX = p02Width - part02MinWidth;
		}else{
			    part_02Wrap.css({marginLeft:nowMoveX + 'px'});
		}
});

part_02.on('touchend mouseup', function(e){
				e.preventDefault();
				touchOn = false;
				doubleClick = true;
});

//==========================================
//part_03

var part_03 = $('.part_03');
var p03Wrap = part_03.children('.slide_wrap');
var p03List = p03Wrap.children('div');

var p03MarginLeft = [];
var i = 0;
for(; i < p03List.length; i++){
	p03MarginLeft[i] = p03List.eq(i).offset().left - p03List.eq(0).offset().left;}


var startPoint; // 클릭시 위치값 (pageX) 최초의 계산값
var movePoint; // 마우스 이동시(pageX) 계산 결과값

p03Wrap.css({position:'relative'});
var l = 0;
var p03True = true;// touchstart 전에 수행되는 값인데. 마우스 수행에 따라 중복 처리 현상을 막기 위한 것.
var p03moveOn = false; // 중복 막기위해.마우스 움직일 때 위치값을 파악하는 것이 아닌, 마우스를 누르고 이쓴 상황에서 움직일 때
                       //드래그 처리하기 위함.

part_03.on('touchstart mousedown', function(e){
	     if(p03True){
	          p03True = false;
			      var eType = e.type;
			      //marginLeft값
			      var posX;
		       if(eType == 'touchstart'){
							posX = e.touches[0].pageX;
					 }else if(eType == 'mousedown'){
								p03moveOn = true;
								posX = e.originalEvent.pageX;
					 }
					 startPoint = posX;
					}
				});

part_03.on('touchmove mousemove', function(e){//mousemove드래그
			 var eType = e.type;
			 var posX;
			//  console.log(e.touches[0].pageX)
			//  console.log(e.changedTouches[0].pageX)
			 
		
			 if(eType == 'touchmove'){
				// posX = e.changedTouches[0].pageX;
				posX = e.changedTouches[0].pageX;

			 }else if(eType == 'mousemove' && p03moveOn == true){
				 posX = e.originalEvent.pageX;
			 }

			 movePoint = startPoint - posX;
			 //console.log(movePoint);
			 p03Wrap.css({left:-movePoint + 'px'});
			
});


//var myMl = parseInt(p03Wrap.css('marginLeft'));// 내가 보여줘야하는 이미지 => marginLeft값


part_03.on('touchend mouseup',function(e){
			if(movePoint > 150 && l < p03List.length -1 ){ // 최대값갯수
				 l += 1; // 배열의 번째 값
			}else if(movePoint < -150 && l > 0){//최소값갯수
				 l -= 1;
			}else{
				 l = l;
			}		 
			p03moveOn = false; 
			p03Wrap.animate({left:0, marginLeft:-p03MarginLeft[l]}, 300, function(){
					 p03True = true;
			
			});
			

		} );

})(jQuery); 