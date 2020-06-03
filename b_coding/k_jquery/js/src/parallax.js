(function($){
  
  var win = $(window);
  var winW = win.innerWidth();
  var winH = win.innerHeight();

  var introBox = $('#introBox');
  var introDiv = introBox.children('div');
  
  var divImg = $('.img');
  var imgArr = [];
  var i = 0;
  for( ; i < divImg.length ; i++){
    imgArr[i] = divImg.eq(i).offset().top;
  }
  //console.log( imgArr);


  if(winW < 640){
     introDiv.remove();
  }

  win.on('resize', function(){
    winW = win.innerWidth();
    (winW < 640) ? introBox.children('div').remove() : location.reload();
   

  });

//----------------------------
win.on('scroll', function(e){
  e.preventDefault();
  var winTop = win.scrollTop();
  var winTop2 = winTop + winH; // + @ 더 높여주는 것도 좋음. Ex) var winTop2 = winTop + winH + 20
  //console.log(winTop);
  //상단 #introBox----firewatchgame 겹치는 화면들--------------------------------------------------------------
  introDiv.eq(0).css({backgroundPositionY:winTop/16*16}); //일정한 비율로 -> 나누기
  introDiv.eq(1).css({backgroundPositionY:winTop/16*14}); //일정한 비율로 -> 나누기
  introDiv.eq(2).css({backgroundPositionY:winTop/16*13}); 
  introDiv.eq(3).css({backgroundPositionY:winTop/16*11}); 
  introDiv.eq(4).css({backgroundPositionY:winTop/16*9}); 
  introDiv.eq(5).css({backgroundPositionY:winTop/16*7}); 
  introDiv.eq(6).css({backgroundPositionY:winTop/16*5}); 
  introDiv.eq(7).css({backgroundPositionY:winTop/16*3}); 
  introDiv.eq(8).css({backgroundPositionY:winTop/16*1}); 

  //16으로만 그냥 나눴을 때 자연스럽지않고 뚝뚞 끊기듯 움직이기 때문에 다시 곱해줌으로써 
  //자연스러운 움직임을 부여해준다.
  //================================================================
  
  //중간 기능 처리 #contentBox ---------------------------------------------------
 if(winTop2 > imgArr[0] ){
   console.log('!!!!!!!!!!!!!!!!!!!!!--------------------1');
   divImg.eq(0).css({backgroundPositionY:-(imgArr[0] - winTop2)/20 + '%'});
   divImg.eq(0).children('p').css({top:-(imgArr[0] - winTop2)/5});
 }
 if(winTop2 > imgArr[1] ){
   console.log('!!!!!!!!!!!!!!!!!!!!!--------------------2');
   divImg.eq(1).css({backgroundPositionY:-(imgArr[1] - winTop2)/20 + '%'});
   divImg.eq(1).children('p').css({top:-(imgArr[1] - winTop2)/5});
 }
 if(winTop2 > imgArr[2] ){
  console.log('!!!!!!!!!!!!!!!!!!!!!---------------------3');
  divImg.eq(2).css({backgroundPositionY:(imgArr[2] - winTop2)/20 + '%'});
  divImg.eq(2).children('p').css({top:-(imgArr[2] - winTop2)/5});
}
if(winTop2 > imgArr[3]){
  console.log('!!!!!!!!!!!!!!!!!!!!!---------------------4');
  divImg.eq(3).css({backgroundPositionY:-(imgArr[3] - winTop2)/20 + '%'});
  divImg.eq(3).children('p').css({top:-(imgArr[3] - winTop2)/5});
}
});

})(jQuery);