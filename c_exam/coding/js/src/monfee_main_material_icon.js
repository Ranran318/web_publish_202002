(function($){

 var materialBtnArea =$('.material_btn');
 var materialBtn = materialBtnArea.children('button');

 var materialArea = $('.material_area');
 var materialUl = materialArea.find('ul');
 var materialLi = materialUl.find('li');

var mvLength = 1; //차후에 계산 편하게 하기위함.

 //materialLi.eq(-1).prepenTo(materialUl);
 var matLiLast = materialLi.eq((mvLength * -1)-1).nextAll('li');
 materialUl.prepend(matLiLast);
 materialLi = materialUl.find('li');
 materialUl.css({width:250 + '%'});

 /*
 var matFirst_01 = parseInt(materialLi.eq(0).css('width'));
 var matFirst_02 = parseInt(materialLi.eq(0).css('marginLeft'));
 var matFirst_03 = parseInt(materialLi.eq(0).css('paddingLeft'));
 var matFirst_04 = parseInt(materialLi.eq(0).css('paddingRight'));

 var matFirstSize = matFirst_01 + matFirst_02 + matFirst_03 + matFirst_04;
*/
//위와 아래 식은 같은 것.
var matFirstSize = materialLi.eq(1).outerWidth(true) * mvLength;//두개씩 넘길 때
materialUl.css({materialLeft: -matFirstSize + 'px'});
materialUl.css({position: 'relative'});

/*
var n = 0;

materialUl.css({width:250+'%'});
materialBtn.on('click',function(e){
	e.preventDefault();
	var thisIt = $(this)[0];
	var nextBtn = materialBtnArea.children('.next')[0];
  var btnView = function(){

	if(n <= 0){
		materialBtnArea.children('.prev').hide();
		materialBtnArea.children('.next').show();
	}else if(n >= 5){//보여지는 게 5개라서.
		materialBtnArea.children('.prev').hide();
		materialBtnArea.children('.next').show();
	}else{
		materialBtn.show();
	}
};


materialBtn.on('click',function(e){
	e.preventDefault();
	var thisIt = $(this)[0];
	var nextBtn = materialBtnArea.children('.next')[0];

	if(thisIt === nextBtn){
		materialBtn.hide(); n+=1;
		n+=1;
		materialUl.animate({left: -n * matFirstSize + 'px'},function(){
			btnView();

		});
	}else{
		materialBtn.hide(); n-=1;
		n -= 1;
		materialUl.animate({left: -n * matFirstSize + 'px'},function(){
			btnView();
		});


	     };
			});
		});

*/
// 보여주기위한 것이라 주석처리. 

// v2 클릭시 양끝 마지막요소를 반대편끝으로 붙여서 무한으로 이동하게 만들기
//materialUl.css({left: -matFirstSize + 'px'});

var thisOk = true;
materialBtn.on('click',function(e){
	e.preventDefault();
	var thisIt = $(this)[0];
	var nextBtn = materialBtnArea.children('.next')[0];
	if(thisIt === nextBtn && thisOk){
		 thisOk = false;
		 materialUl.animate({left: -matFirstSize + 'px'}, function(){
			 materialLi.eq(mvLength).prevAll('li').appendTo(materialUl);
			 materialUl.css({left:0});
			 materialLi = materialUl.find('li');
			 thisOk = true;
		 });

	}else if(thisOk){
		thisOk = false;
		materialUl.animate({left: matFirstSize + 'px'},function(){
			materialLi.eq((mvLength * -1) -1).nextAll().prependTo(materialUl);
			materialUl.css({left:0});
			materialLi = materialUl.find('li');
			thisOk = true;
		});

	}
});
//-------------------------------------------------------
})(jQuery);