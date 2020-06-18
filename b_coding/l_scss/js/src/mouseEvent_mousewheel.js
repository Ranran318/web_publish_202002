(function($){

  var colorArr = ['#fa0','#acf','#cfa','#5df','#fac'];
  var n = 0;


  var mw = $('.mw');
  mw.css({overflow:'hidden'});

  var mwUl = mw.find('ul');
  var mwLi = mwUl.find('li');

  for(var i = 0; i < mwLi.length; i++){
    mwLi.eq(i).css({backgroundColor:colorArr[i]});
  }

  var mouseOk = true;
  mw.on('mousewheel DOMMouseScroll',function(e){
    //console.log(e.type);
    //console.log(e.originalEvent.wheelDelta);
    //console.log(e.originalEvent.detail);
    if(mouseOk){
      mouseOk = false;
    var evt = e.originalEvent;
    var mouseResult;

     if(evt.wheelDelta){
       //mouseResult = 'wheelDelta가 존재한다';
       mouseResult = - evt.wheelDelta;
      }else{
       //mouseResult = 'wheelDelta가 없다';
       mouseResult = evt.detail * 40;
      }
    }

   //  console.log(mouseResult);
     if(mouseResult < 0 && n > 0){
       n -= 1;
      }else if(mouseResult > 0 && n < colorArr.length){
        n += 1;
      }
      
    //  mw.stop().animate({backgroundColor:colorArr[n]},300,function(){
    //     mouseOk = true;  
    //  });
    //
    //console.log(mouseResult);
    //mouseOk = true;
    //setTimeout(function(){mouseOk = true;}, 100);
    
     mwUl.stop(true,false).animate({marginLeft: n*-100 + '%'},200,'easeInExpo',function(){
        mouseOk = true;
     });
     console.log(n);
    //순차로 움직이게 할 수 있는 기능있음.

  });
})(jQuery);