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

var inputcheckList = [ts, tp, tl, ta];
var inputCk = $(input[type="checkbox"]);
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
    inputCk.attr({'checked':true});
    inputCk.removeClass('check');
  }else{
    ac.attr({'checked':false});
    ac.removeClass('check');
  }
};

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
  };
});


})(jQuery);
