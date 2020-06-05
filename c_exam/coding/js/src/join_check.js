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

ac.on('click',function(e){
  e.preventDafault();
  var acAttr = ac.is(':checked') == 'checked';
  
  console.log(acAttr);
});


})(jQuery);
