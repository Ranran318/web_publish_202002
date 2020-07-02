(function($){
   
   var slideBanner = $('.slidebanner');
   var btn         = $('.btn').find('button');
   var slideUl     = slideBanner.children('ul');
   var slideLi     = slideUl.find('li');

   //------------------------------------------------
   // Li 순서 변경, .active 삭제 및 재설정

   slideLi.removeClass('active');
  slideLi.eq(-1).prependTo(slideUl);
  slideLi     = slideUl.find('li');
  slideLi.eq(1).addClass('active');

  // ----------------------------------------------------
  // 버튼 클릭시 내용 변경1

  var hasActive , q;
  var btnTrue = true;

  btn.on('click',function(e){
      e.preventDault();
      var nBtn = $(this)[0] === $('.next')[0];
      
 // 정면에 보이는 배너순서 찾기(.active 찾기)
      for(var i=0; i<slideLi.length; i++){
         hasActive = slideLi.eq(i).hasClass('active')
          if(hasActive){
             q = i;
             break;
          }
      }

      if(nBtn && btnTrue){
        //다음버튼 중복기능방지 
        btnTure = false;
         //next버튼 클릭시      
          slideLi.eq(-1).css({
            transform:'ranslate3D(100%,0,0) scale(0.8) rotateY(-45deg)',
         
            transition:'all 800ms linear'
          });

          slideLi.eq(q).css({
            transform:'translate3D(-100%,0,0) scale(0.8) rotateY(45deg)', 
            zIndex:-1,
            transition:'all 500ms linear'
          });

          slideLi.eq(q+1).css({
            transform:'translate3D(0, 0, 0) scale(1) rotateY(-45deg)',
            zIndex:100,
            transition:'all 800ms linear'
          });


          setTimeout(function(){
            slideLi.removeClass('active');
            slideLi.eq(0).appendTo(slideUl);
            slideLi     = slideUL.find('li');
            slideLi.eq(1).addClass('active');
            btnTrue = true;
          },500);

      
         //slideLi   = slideUl.find('li');
        


      }
      else if(btnTrue){
         // prev 버튼 클릭시
         //다음버튼 중복기능방지 
        btnTure = false;
        //next버튼 클릭시      
         slideLi.eq(0).css({
           transform:'ranslate3D(100%,0,0) scale(1) rotateY(0)',
           zIndex:100,
           transition:'all 500ms linear'
         });

         slideLi.eq(q).css({
           transform:'translate3D(100%,0,0) scale(0.8) rotateY(-45deg)', 
           zIndex:-1,
           transition:'all 500ms linear'
         });

         slideLi.eq(-1).css({
           transform:'translate3D(-100%, 0, 0) scale(0.8) rotateY(45deg)',
           zIndex:-1,
           transition:'all 500ms linear'
         });


         setTimeout(function(){
           slideLi.removeClass('active');
           slideLi.eq(-1).prependTo(slideUl);
           slideLi = slideUL.find('li');
           slideLi.eq(1).addClass('active');
           btnTrue = true;
         },500);
      
  }
 });


   



})(jQuery);