//browser_resize.js


(function($){



	//디바이스 환경 변수로 세팅===================================================================

  var deviceName = ["mobile","tablet", "laptop", "pcfull"];
	var deviceWidth = [ 
		{ 'size' : 640  , 'title' : deviceName[0]},
		{ 'size' : 1280 , 'title' : deviceName[1]},
		{ 'size' : 1600 , 'title' : deviceName[2]},
		{ 'size' : 2560 , 'title' : deviceName[3]}
	]; 
	//=======================================================================
	
	
	// 상황에 따른 기능 처리==================================================
	var m1 = $('.motion_01');
	var m2 = $('.motion_02'); 

	var MotionM1 = function(myC){
		var myColor; 
		( myC == undefined) ? myColor = '#078' : myColor = myC;
		// var myColor  = myC | '#078';


		//if(myC == undefined){
		//	mycolor = '#78';
		//}else{mycolor = myC;}
   // (myC == undefind) ? myColor = '#0783 : myColor = myC;

   var i = 0;

	 m1.on('mouseenter', function(){
		 i++;
		 var sel = $(this);
		 sel.stop().animate({'backgroundColor':myColor});
		 sel.prepend('<p>'+i+'.내용이 추가로 담아졌습니다.</p>');
	 });	
	
	console.log(myColor);
	};


// ------------------------------------------------------------------
//브라우저의 크기 파악 및 기능을
// beforeDevice / afterDevic 명칭에 담아 이후에도 동작가능하도록 처리 --
	var win = $(window);
	var ww = win.outerWidth(true); //window에 padding넣기 
  var beforeDevice, afterDevice;

  	//afterDevice = DeviceAction(nw); beforeDevice = DeviceAction(ww); var nw = win.outerWidth(true); var ww = win.outerWidth(true); ===============
	var DeviceAction = function(widthSize){
		var nowDevice;
		if( widthSize < deviceWidth[0].size){
			nowDevice = deviceWidth[0].title;

		}else if(widthSize < deviceWidth[1].size ){
			nowDevice = deviceWidth[1].title;

		}else if(widthSize < deviceWidth[2].size){//laptop으로 사이즈 바뀌면 
			nowDevice = deviceWidth[2].title; // 점검받겠다.

		}else{
			nowDevice = deviceWidth[3].title;}
			
			return nowDevice;
			//		if(ww > deviceWidth[1].size){
				//			MotionM1();
				//		}
				
				//console.log(DeviceAction(ww));
	};
 //DeviceAction(ww);
 beforeDevice = DeviceAction(ww);
 //console.log('1.' + beforeDevice + '---');
//-----------------------------------------
var ActiveStyle = function(widthSize /*, i*/){
//	console.log(deviceName[i],  )

	if( widthSize <= deviceWidth[0].size){
          MotionM1('#aaa'/*, i*/);
	}else if(widthSize <= deviceWidth [1].size ){
		      MotionM1('#fa0'/*, i*/);
	}else if (widthSize <= deviceWidth [2].size){//laptop으로 사이즈 바뀌면 
		      MotionM1('#0af'/*, i*/);
		//	nowDevice = deviceWidth[2].title; // 점검받겠다.
	}else{  MotionM1('#afa'/*, i*/);
		//		nowDevice = deviceWidth[3].title;}
//		console.log(DeviceAction(ww));
	}
};

//var i = devicenName.indexOf(beforeDevice);
//ActiveStyle(deviceWidth[i].size,i);
//위에 컬러 변하게 하는 과정에 명령 => 첫번재 상자에  해당 번째 해당 색깔로 변하게
//Active Slye();
//브라우저의 사이즈 변경시 위 기능들 수행내용-----------------------------------------
	win.on('resize', function(){
	    	var nw = win.outerWidth(true);
	    	afterDevice = DeviceAction(nw);
	    	if(beforeDevice !== afterDevice){
	    		//디바이스 상황에 따른 변경내용을 수행하는 내용.
	    		var i = deviceName.indexOf(afterDevice);
	    		console.log(i);
	    		//$('.motion_01').append('<p>추가 텍스트 입력</p>'); // 없던게 추가.
	    	 ActiveStyle(deviceWidth[i].size);	
	    		beforeDevice = afterDevice; // 지금의 변경된 환경으로 수정한다.
	    	 console.log('changed : ' + beforeDevice );
		}
  //
		//DeviceAction(nw);//이 nw 위의 \function()로 들어감.Deidc매개변수
		//console.log(beforeDevice + ':' + afterDevice);

		//m1.on('mouseenter',function(){
       
		//});
	});
//디바이스 환경 바뀌는 시점에서 새로고침하는게 각 버튼이나 기능들의 오류를 줄일 수 있음. 새로고침은 오류를 줄이기 위함.

//점검하는 동시에 미리 바뀌는 것과 


})(jQuery);