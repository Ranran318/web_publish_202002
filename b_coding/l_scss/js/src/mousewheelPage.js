(function($){
  
  var win = $(window);
  var winH = win.innerHeight();
  var page = $('.page');
  $('#wrap').css({height:'auto'});
  $('.page').css({height:winH});
  


  var n = 0;
  var mvTrue = true; 

  win.on('mousewheel DOMMouseScroll', function(e){
    var evt = e.originalEvent;
    var result; 
    (evt.wheelDelta) ? result = -evt.wheelDelta : result = evt.detail*40;
    //console.log(evt);

    if(mvTrue){
      mvTrue = false;
      (result > 0) ? n += 1 : n -= 1;

      if( n >= page.length-1 ){
        n = page.length-1;
      } else if(n < 0){
        n = 0;
      }
      
      //console.log(n);
      $('html, body').animate({scrollTop: winH * n},function(){
        mvTrue = true;
      });
     

    /* //버블 현상 없애는 방법=======================
      $('#wrap').animate({top:0;},function(){
        mvTrue = true;
      });
    */ //=================================

      //setTimeout(function(){
      //  mvTrue = true;
//
      //},200);
      
      
    
      //if( n >= page.length-1){
      //  n == 0;
       }

  });
})(jQuery);