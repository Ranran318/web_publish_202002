//browser_resize.js

(function($){

	var m1 = $('.motion_01');
	var m2 = $('.motion_02'); 

	var MotionM1 = function(){
	 m1.on('mouseenter', function(){
		 $(this).animate({'backgroundColor':'#078'});
		 $(this).append('<p>내용이 추가로 담아졌습니다.</p>');
	 });	
	};

	var deviceWidth = [
		{ 'size' : 640  , 'title' : "mobile"},
		{ 'size' : 1280 , 'title' : "tablet"},
		{ 'size' : 1600 , 'title' : "laptop"},
		{ 'size' : 2560 , 'title' : "pcfull" }
	];


	var win = $(window);
	var ww = win.outerWidth(true); //window에 padding넣기 
  var beforeDevice, afterDevice;

	var DeviceAction = function(widthSize){
		var nowDevice;
		if( widthSize < deviceWidth[0].size){
			nowDevice = deviceWidth[0].title;

		}else if(widthSize < deviceWidth [1].size ){
			nowDevice = deviceWidth[1].title;

		}else if (widthSize < deviceWidth [2].size){//laptop으로 사이즈 바뀌면 
			nowDevice = deviceWidth[2].title; // 점검받겠다.

		}else{
			nowDevice = deviceWidth[3].title;}

			console.log(DeviceAction(ww));


//		if(ww > deviceWidth[1].size){
//			MotionM1();
//		}

 return nowDevice;
	};

 //DeviceAction(ww);
 beforeDevice = DeviceAction(ww);
 //console.log('1.' + beforeDevice + '---');
//-----------------------------------------
var ActiveStyle = function(){
	if(){
		
		if( widthSize < deviceWidth[0].size){
			nowDevice = deviceWidth[0].title;

		}else if(widthSize < deviceWidth [1].size ){
			nowDevice = deviceWidth[1].title;

		}else if (widthSize < deviceWidth [2].size){//laptop으로 사이즈 바뀌면 
			nowDevice = deviceWidth[2].title; // 점검받겠다.

		}else{
			nowDevice = deviceWidth[3].title;}

			console.log(DeviceAction(ww));


	}
};





//-----------------------------------------
	win.on('resize', function(){
		var nw = win.outerWidth(true);
		afterDevice = DeviceAction(nw);
		if(beforeDevice !== afterDevice){
			//디바이스 상황에 따른 변경내용을 수행하는 내용.
			$('.motion_01').append('<p>추가 텍스트 입력</p>'); // 없던게 추가.
			
			beforeDevice = afterDevice; // 지금의 변경된 환경으로 수정한다.
		}

		//DeviceAction(nw);//이 nw 위의 \funtion()로 들어감.Deidc매개변수
		//console.log(beforeDevice + ':' + afterDevice);

		//m1.on('mouseenter',function(){
       
		//});
	});
//디바이스 환경 바뀌는 시점에서 새로고침하는게 각 버튼이나 기능들의 오류를 줄일 수 있음. 새로고침은 오류를 줄이기 위함.

//점검하는 동시에 미리 바뀌는 것과 


})(jQuery);