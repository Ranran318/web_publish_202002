(function($){

  var unb = $('.unbBox');
  var unbUl = unb.children('ul');
  var unbLi = unbUl.find('li');
  var unbDl = unbLi.find('dl');
  var unbDt = unbLi.find('dt');
  var unbDd = unbLi.find('dd');

  var ViewPic = $('.pic_container');

  



      // $(document).ready(function(){
 //   ViewPic.css({'backgroundPosition':'50% 50%'});        
 //   ViewPic.css({'backgroundPosition':'50%'}); 
 // });
    
   
     //소개 - scroll 시, 사진 제외 글귀는 위에서 아래로 
     //스르륵 나타나고 /사진과 어울려서 parallox되기. 

 
   

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
      intGCont.css({'display':'block'});
      intGCont.show();
 
      });
//-----top버튼

//========================
//famsite-----------------

var famBox = $('.famsnsBox');
var fgnbBox = $('.footgnbBox');
var famDl = fgnbBox.children('dl');
var famDt = famDl.children('dt');
var famDd = famDl.children('dd');












})(jQuery);