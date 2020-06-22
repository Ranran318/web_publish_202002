(function($){
	var mouseXYCheck = $('.mouse_xy');
	var mX = $('.m_x').find('span');
	var mY = $('.m_y').find('span');
	var mObject = $('.mouse_object');
	var winHalfWidth = $(window).outerWidth() / 2;
	var winHalfHeight = $(window).outerHeight() / 2;
	var x = 0;
	var y = 0;

	//clientX , clientY : 브라우저 페이지 기준 - 화면의 스크롤 자체를 없다라고 생각하는 것.(스크롤 X)
	//offsetX , offsetY : 이벤트 대상 객체
	//pageX, pageY      : 브라우저 페이지 기준 - 화면에 스크롤이 존재한다.(스크롤 O)
	//screenX, screenY  : 모니터 스크린 기준

	//mouseXYCheck.on('click', function(e){
	//	e.preventDefault();
	//	console.log(e.clientX, e.clientY);//쓰기 전에 기준을 정해. 안에서 영향? 밖에서 영향? 공간안에서 영향? 줄 지 정하고 시작.
	//	console.log(e.pageX, e.pageY);
	//	console.log(e.offsetX, e.offsetY);
	//	console.log(e.screenX, e.screenY);
	//	console.log('--------------------');
		
	mouseXYCheck.on('mousemove', function(e){
		e.preventDefault();
		console.log(e.clientX, e.clientY);
		console.log(e.pageX, e.pageY);
		console.log('--------------------');
		console.log(e.offsetX, e.offsetY);
		console.log(e.screenX, e.screenY);
		console.log('====================');
     x = (e.pageX - winHalfWidth / 30) + 'px';
     y = - (e.pageY - winHalfHeight / 50) + 'px';


    mObject.css({'transform':'translate('+ x +'%,'+ y +'%) rotateX('+y*5+'deg) rotateY('+x*3+ 'deg)'});
                
		mX.text(x); //span 값 
		mY.text(y); //span 값

		//mousemove{()} => animate({css}, )

		

	});

})(jQuery);