(function($){
  
  var mobileArea = $('#mobileArea') ;
  var contry = [
    '대한민국 +82',
    '가나 +233',
    '가봉 +241',
    '가가이아나 +592',
    '감비아 +220',
    '과테말라 +502',
    '괌 +1671',
    '그레나다 +1473',
    '그리스 +30',
    '기니 +224'
  ];
  
  
  var contryText = '<option></option>';
  var valueResult;

  //console.log(contry[0].split('+')[1]);
   var koreaSelect = contry.indexOf('대한민국 +82'); 

  for(var i = 0; i < contry.length; i++){
    mobileArea.append(contryText);
    mobileArea.find('option').eq(i).text(contry[i]);
    valueResult = contry[i].split('+')[1];
    mobileArea.find('option').eq(i).attr({value : valueResult});
  }
  mobileArea.find('option').eq(koreaSelect).attr({selected:'selected'});
//=======================================================
 // var date = new Date();
//console.log(date); //console 값 : thu jun 4 2020 gmt 0900 대한민국 표준시
  // new Date() => 시간 등을 뽑아내서 
  //split 쪼개는 것
  

  var userId = $('#userId');
  //userId.on('keyup', function(e){ //눌르고 떼는 순간마다 값을 파악
  userId.on('blur', function(e){ //눌르고 떼는 순간마다 값을 파악
    e.preventDefault();
  //  var val = $(this).val();//값을 뜻하는 value의 val을 써준다.
  //  console.log(val);
  var RexExp = /^([A-Za-z0-9]|[-_$*&!@]){5,20}$/; // ^ 시작 $ 끝 . 하나하나 갯수는 중괄호
  var rel = $(this).val();
  var ck = /^([a-z0-9]|[-_])|([a-z0-9]|[*-_]){5,20}$/i;
  //영문(대/소),숫자, 특수(-_) 글자 5~20글자로 허용하겠다.
  //시작에서 모든 시작하는 것이든 , 특수문자는 -하이푼만 허용하겠다.
  //var ck = /^([a-z0-9]|[-_])*/([a-z0-9]|[-_]){5,20}$/i;
  //시작, 소문자 a부터 z 까지 (i)가 구분해줌. 양쪽 같은 상황. 5글자부터 20글자까지 $ 파악해라. 
  //5글자부터 20글자까지 허용하겠다. ^ :  시작이라는 뜻. 모든 기준으로 봐라. *을 넣으면 주석이 되기때문에 ^이걸로. 
    var relTest = ck.test(rel);//test함수는 해당함수 검사한다.
    var dl = $(this).parents('dl');
    var conT = $(this).parents('dd').eq(0).next('.confirm_text');
  
    // console.log(rel);

    if(rel == ""){
      dl.addClass('error');
      dl.removeClass('success')
      conT.text('id는 반드시 입력해야합니다.');
    }else if (!relTest){
      dl.addClass('error');
      dl.removeClass('success')
      conT.text('5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.');
      }else{
        conT.addClass('success');
        dl.removeClass('error');
        conT.test('좋은 id입니다. 사용하셔도 좋습니다.');
      }
    // 비밀번호 ----------------ㅓ--------------------------
    var pwResult;
    var userPw = $('#userPw');
    userPw.on('blur', function(e){
      e.preventDefault();
  
    var rel = $(this).val();
    pwResult = rel;
    var ck = /^([a-z0-9]|[*!@#$^=-_]){10,20}$/i; // (){}[] + \/ 이건 제한.
    var relTest = ck.test(rel);
    //console.log(relTest);
    var dl = $(this).parents('dl');
    var conDt = $(this).parents('dd').eq(0).next('.confirm_text');
    
    if(!rel){
        dl.addClass('error').removeClass('success');
        conDt.text('비밀번호는 10~20글자 사이의 영문/숫자/특수문자(*!@#$^=-_)를 입력하세요.');
      }else{
        dl.addClass('success').removeClass('error');
        conDt.text('비밀번호는 10~20글자 사이의 영문/숫자/특수문자(*!@#$^=-_)를 입력하세요.');
      
    
    }
    });

    var userPw2 = $('#userPw2');
    userPw2.on('blur', function(e){
      e.preventDefault();
      var rel = $(this).val();
      var dl = $(this).parents('dl');
      var conDt = $(this).parents('dd').eq(0).next('.confirm_text');

      if(rel !== pwResult){
        dl.addClass('error').removeClass('success');
        conDt.text('비밀번호 내용이 동일하지 않습니다. 올바르게 작성해 주세요.');
      
      }else{
        dl.addClass('success').removeClass('error');
        conDt.text('비밀번호가 확인되었습니다.');
      }
    });


var pwIcon = userPw.parents('dl').find('i');
pwIcon.css({cursor:'pointer'});
pwIcon.on('mouseenter', function(){
  $(this).removeClass('fa-lock');
  $(this).addClass('fa-eye');
});

pwIcon.on('mouseleave', function(){
  $(this).removeClass('fa-eye');
  $(this).addClass('fa-lock');
});

pwIcon.on('mousedown', function(e){
 e.preventDefault();
 //마우스 왼버튼 확인
 if(e.button == 0){
   userPw.attr({type:'text'});
 }
 
});


pwIcon.on('mouseup', function(e){
  e.preventDefault();
  userPw.attr({type:'password'});
});

//    var showPw = $('.showPw');
//    var showPwI = showPw.find('i');
//
//    showPwI.on('click',function(e){
//      e.preventDefault();
//      attr([type=""])
//    });




   //var date = new Date();
   //console.log(date);
   //var YY = date.getFullYear();
   //var mm = date.getMonth()+1 ;
   //var dd = date.getDate();
   //var fulDay = date.get(0).getDate();
   //console.log( dd)
   
   //var arr = [];

   //var obj = new Object{};
   
   var obj = {};
   obj.one = 'apple';
   obj.two = 'grape';
   //console.log(obj);
   //var arr = new Array();
   var arr = [];
   arr[0] = '001';
   arr[1] = 'remote';
   arr[2] = 'mouse';
  //console.log(arr);

  //var exp = new RexExp('정규표현식',['Flag']);
  //var exp = new RexExp('^abc');
  var exp = /^abc/;
  //console.log(exp);

    
  var myRe = /d(b+)d/g; //문자열 내에서 기능을 파악하는 것이 뭐쥬? g?
  var myArray = myRe.exec("cdbbdbsbz");
  console.log(myArray);

  //$('#mobileNumber').on('blur',function(){
    //var ck = /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/g
    //var thisNum = $(this).val(ck);
    //$(this).var();
    //console.log(thisNum);

    $('#mobileNumber').on('blur', function(){
      //var ck = /^\d{3}\d{3,4}-\d{4}$/;//숫자 세자리, 중간 번호 세자리 네자리,뒤에 네자리 핸드폰 번호.
      var ck = /^01.{1}\d{3,4}-\d{4}$/;//숫자 세자리, 중간 번호 세자리 네자리,뒤에 네자리 핸드폰 번호.
      var thisNum = ck.test($(this).val());
      console.log ( thisNum );

      $('#mobileCerti').css({display:'block',position:'absolute',width:'100%',height:'100%',top:0, left:0});
      
      
      $('#mobileCerti').attr({'placeholder':'전송된 인증번호를 입력하세요.'});


      });

  
  
  
});



  
})(jQuery);