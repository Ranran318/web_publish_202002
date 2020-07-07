(function($){

  var unb = $('.unbBox');
  var unbUl = unb.children('ul');
  var unbLi = unbUl.find('li');
  var unbDl = unbLi.find('dl');
  var unbDt = unbLi.find('dt');
  var unbDd = unbLi.find('dd');

  var ViewPic = $('.pic_container');

  $(document).ready(function(){

      ViewPic.animate({'backgroundPosition':'50% 50%'}, 300);
   
    });




      // $(document).ready(function(){
 //   ViewPic.css({'backgroundPosition':'50% 50%'});        
 //   ViewPic.css({'backgroundPosition':'50%'}); 
 // });
    
   
     //소개 - 글귀 parallox , scroll 시 

 var win = $(document).scrollTop();
   

 var intBox = $('#introBox');
 var intOff = intBox.offset().top;
  
 //console.log(intOff);
 var conbtn = $('.conbtn');
 var guidebtn = $('.guidebtn');
 var intConCont = $('.intro_container01');
 var intGCont = $('.intro_container02');
 
 
 //==============================
 //컨셉(.conbtn),안내(.guidebtn) 클릭시
 conbtn.on('click', function(){
   intGCont.hide();
   intConCont.show();
});

guidebtn.on('click', function(){
   
      intConCont.hide();     
      intGCont.css('display','block');
      intGCont.show();
 
      });



// console.log(win);

     //이건 할 수 있으면 .. 사진 - 마우스 올리면 마우스 위치값에 따라 
     //사진 positionX/Y위치값 위아래 혹은 좌우로 변동



})(jQuery);