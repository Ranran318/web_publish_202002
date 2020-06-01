//

(function($){


var headBox = $('#headBox');
var docSlide = $('.doc_containers');
var docSlideUl = docSlide.children('ul');
var docSlideLi = docSlideUl.find('li');


  var headOffset = headBox.offset().top;

   console.log( headOffset);
  $(window).on('scroll', function(){
   
    var winScroll = $(this).scrollTop();
    if( headOffset < winScroll){ 
      $('#headBox').css({'position':'fixed', 'bottom':'auto', 'top':0});
      }
   });	
  


//수강후기 슬라이드=================================


var docSlideLiLast = docSlideLi.eq(-1).clone(true);
var prevBtn = $('.prev_btn');
var nextBtn = $('.next_btn');

docSlideUl.prepend(docSlideLiLast);

docSlideLi = docSlide.children('li');

var docSlideLiLen = docSlideLi.length();

docSlideUl.css({'width': - docSlideLiLen * 100 + "%", 
                 'position': 'relative', 'left' : 100 + "%"}); 

prevBtn.on(click, function(e){
  e.preventDault();
  

  docSlideLi.animate({})


});





/*
  //메뉴---------------------------------------
  var menuBtnDt = $('.gnbBox').find('dt');
  var menuBtndd = menuBtnDt.find('dd'); 



menuBtnDt.on('click',function(e){
  e.preventDefault();
  
 menuBtnDt;
  var NextViewdt = menuBtnDt.next('dd').css('display') === 'none';
  
    if(NextViewdt){
       menuBtnDt.find('dd').css('display':'block');
       thisDt.next('dd').slideDown();
       menuBtnDt.parent('li').find('dd').slideUp();
  	
  
        menuBtnDt.siblings('dt').removeClass('action');
        menuBtnDt.addClass('action');
 }
	

/*
 //top메뉴---------
 var topBtnBox = $('#topbtnBox');
 var topBtn = topBtnBox.children('button');

var winScrollLen = $(window).scrollTop();

 $(window).on('scroll', function(){
     
  if( winScrollLen > 892, topBtn.css({'display':'none'})){
   topBtn.css({'dispaly': 'block'})
       
  };




      });

*/





})(jQuery);