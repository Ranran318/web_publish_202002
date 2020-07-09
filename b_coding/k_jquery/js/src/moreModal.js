//moreModal.js
var listView;
var colorArr = [];

(function($){
		listView = $('#listViewBox');
		var listUl = listView.find('ul');
		var moreBtn = listView.find('.more_btn');
		var listData;
		var liCode = '<li><a href="#"><span></span></a></li>';

		//console.log('before');
		var i = 0;

		var InsertLi = function(db, color){
			 var NowListLen = i + 3;
			 
			 for(; i<NowListLen; i+=1){
							 listUl.append(liCode);
							 //console.log(i);
							 listUl.find('li').eq(i).children('a').css({
								  backgroundColor:color[i]
							 });
							 listUl.find('li').eq(i).find('span').text(db[i].displayName);
			 }
		};
    

		$.ajax({
				url:'../data/people2.json',
				async:false,
				success:function(data){
								listData = data;
								// 컬러 차트 만들기 ------------------------------------------------------
								var dataLen = listData.length;
								colorArr = [];
								for(var colorI = 0; colorI < dataLen; colorI += 1){
									      //hsla(각도, 50%, 50%, 1 ) ; 색상, 채도 , 명도, 투명도
                         colorArr[colorI] = 'hsla(' + parseInt(Math.random()*360) + ', '+ '50%, 50%, 1)';
								}
								 //console.log(colorArr);
								 //---------------------------------------------------
								InsertLi(listData, colorArr);

								moreBtn.on('click', function(){

								 InsertLi(listData, colorArr);
								});
							}

		});


	

})(jQuery);