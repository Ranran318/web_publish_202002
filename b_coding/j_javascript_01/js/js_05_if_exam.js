// js_05_if_exam.js


function Mes(){
  return prompt("수업을 듣고 있는 요일을 입력하세요.-1글자");
};

//console.log( messageBox );

var messageBox = Mes();

var mLen = messageBox.length; //length : 갯수
console.log(mLen) ;

if(mLen !== 1) {
  alert('다시 입력하세요');
  Mes();

}else{
  
  switch(messageBox){
    case '월':
      console.log('충전이 되었을테니 공부하러 갑사디!');
      break;

    case '화':
    case '수':
    case '목':
      console.log('평일입니다 힘내세요.');
      break;


    case '금':
      console.log('곧 주말이니 조금만 힘내세요.');


    default:
      console.log('주말이네요~ 쉬면 좋겠죠? 과제부터하세요.');
  }

}
