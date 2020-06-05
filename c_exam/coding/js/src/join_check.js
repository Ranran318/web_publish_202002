(function($){
  
  var ac = $('#allCheck');
  var ts = $('#termsService').nextAll('.terms').eq(0);
  var tp = $('#termsPrivacy').nextAll('.terms').eq(0);
  var tl = $('#termsLocation').nextAll('.terms').eq(0);
  var ta = $('#termsAlert').nextAll('.terms').eq(0);
  
  var tsTerms = ts.nextAll('.terms').eq(0);
  var tpTerms = tp.nextAll('.terms').eq(0);
  var tlTerms = tl.nextAll('.terms').eq(0);
  var taTerms = ta.nextAll('.terms').eq(0);
  
  
  /* 편한 것.
  var termsService;
$.ajax({
  url:'./terms/termsService.html',
  dataType: 'html',
  async:false,
  success:function(data){
    termsService = data;
    
    return termsService;
  }
});
ts.append(termsService);

*/
/* 외부파일 불러오는 방법 -간편성 */
ts.load('../terms/termsService.html');
tp.load('../terms/termsPrivacy.txt');
tl.load('../terms/termsLocation.txt');
ta.load('../terms/termsAlert.txt');
//-------------====================================

var inputCk = $('input[type="checkbox"]');
var inputcheckList = [ts, tp, tl, ta];

ac.on('click',function(e){
  var acAttr = ac.is('.checked');


  if(acAttr){
    //ac.attr({'checked':'checked'});
    ac.attr({'checked':true});
    ac.addClass('check');
    ts.attr({'checked':true});
    tp.attr({'checked':true});
    tl.attr({'checked':true});
    ta.attr({'checked':true});
    
    inputCk.addClass('check');
    inputCk.attr({'checked':true});
    
  }else{
    //ac.attr({'checked':'checked'});
   // ac.attr({'checked':false});
   // ac.removeClass('check');
   // ts.attr({'checked':false});
   // tp.attr({'checked':false});
   // tl.attr({'checked':false});
   // ta.attr({'checked':false});
   inputCk.removeClass('check');
   inputCk.attr({'checked':false});
 // console.log(acAttr);
};
});
//===========================================
var allState;
var AllCk = function(state){
  if(state === true){
    ac.attr({'checked':true});
    ac.removeClass('check');
  }else{
    ac.attr({'checked':false});
    ac.removeClass('check');
  }
};

//=====================================
//각각의 요소 클릭-------------------------------
var EachCk = function(){
     
  var nowState;
  for(var i = 0; i < inputcheckList.length; i++){
    var hasCheck = inputCheckList[i].hasClass('check') == false;
    if(hasCheck){nowState = false; break;} else {}
  }
}
var ar = [1,2,3,4,5,6,7,8,9];
//$.each()

//$('input[type="checkbox"]').not('#allCheck').on('click');


//ar.forEach(function(d){
//  console.log(d);
//});
//
//for (var i=0 ; ㅑ < ar.length; i++){
//  console.log(ar[i]);
//}

//일일이 설정해줘야하는 거 for /알아서 각각 처리 forEach (오로지 배열요소만 선택한다.)

ac.on('click',function(){
  $('input[type="checkbox"]').on('click', function(){
   // console.log($(this));
    var nowCk = $(this).is(':checked');
  console.log(nowCk);

  AllCk(nowCk);

    if(nowCk === false){
      $(this).attr({'checked':false});
      $(this).removeAttr('check');

      
    }else{
      ac.attr({'checked':true});
      ac.removeClass('check');

      for(var i=0; i< inputcheckList.length; i++){
        if(inputcheckList[i] == false){
          ac.attr({'checked': false});
          ac.removeClass('check');
          break;
        }else{
          ac.attr({'checked':true});
          ac.addClass('check');
              }
          }
        } 
});
});
//$.each() : 선택자 여러개를 각가 수행하게 만들기위한 jQuery

})(jQuery);