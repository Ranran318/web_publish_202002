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
  
  /* 외부파일 불러오는 방법 -간편성 */
tsTerms.load('../terms/termsService.html');
tpTerms.load('../terms/termsPrivacy.txt');
tlTerms.load('../terms/termsLocation.txt');
taTerms.load('../terms/termsAlert.txt');


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

//-------====================================
var inputCk = $('input[type="checkbox"]');
var inputCheckList = [ts, tp, tl, ta];

//전체  동의 체크 사항 ----------------------------------
ac.on('click',function(e){
  var acAttr = ac.is(':checked');
  AllCk(acAttr);

  if(acAttr){
    //ac.attr({'checked':'checked'});
    inputCk.addClass('check');
    inputCk.attr({'checked':true});
  }else{
    
    inputCk.removeClass('check');
    inputCk.attr({'checked':false});
  }
});
//----------------------------------------

var allState;
var AllCk = function(state){
  if(state === true){
    
    ac.attr({'checked':true});
    ac.addClass('check');
  }else{
    
    ac.attr({'checked':false});
    ac.removeClass('check');
  }
};


//--------------------------------
    //ac.attr({'checked':'checked'});
   // ac.attr({'checked':false});
   // ac.removeClass('check');
   // ts.attr({'checked':false});
   // tp.attr({'checked':false});
   // tl.attr({'checked':false});
   // ta.attr({'checked':false});
 
 // console.log(acAttr);

//각각의 상태 파악 --------------------------------
var EachCk = function(){
   var nowState;
   for(var i=0; i< inputCheckList.length; i++){
              var hasCheck = inputCheckList[i].hasClass('check') == false;
              if(hasCheck){ nowState = false; break;}else {nowState = true;}
   }
   return nowState;
};

//=====================================
//각각의 요소 클릭-------------------------------

// $.each() : 선택자 여러개를 각각 수행하게 만들기위한 jQuery 반복수행구문(for 와 유사)
// $('input[type="checkbox"]').not('#allCheck).on('click' ...)

$.each(inputCheckList, function(data){
  $(this).on('click', function(e){
         var thisIt = $(this);
         var nowCk = thisIt.is(':checked');

         // 선택요소에 대해 체크상태 파악
         if (nowCk === false){
           thisIt.attr({'checked':false});
           thisIt.removeClass('check');
         }else{
           thisIt.attr({'checked':false});
           thisIt.addClass('check');

           allState = false;
         }
    //각각 상태 파악,
    allCk = EachCk();
    //하나라도 false 처리되면 false 를 반환하여, 전체 해제
    //true를 반환시 전체체크
    AllCk(allCk);
  });
});




//var ar = [1,2,3,4,5,6,7,8,9];
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


//-----------------
//확인버튼 클릭시 체크사항
$('[type="submit"]').on('click', function(e){
  e.preventDefault();


});

})(jQuery);