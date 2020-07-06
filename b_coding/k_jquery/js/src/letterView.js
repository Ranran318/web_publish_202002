(function($){
  //글씨와 커서 움직임
  var inputText1 = $('.text_01');
  var text1Con = inputText1.text();
  
  //태그자체를 지우는게 아니라 내용을 비우는 것이라 empty() 써줌.
  // .empty() : 선택한 요소의 내용을 지운다. 내용만 지울 뿐 태그는 남아있다.
  // 태그를 포함한 요소 전체를 제거할 때는 .remove()를 사용한다.
  inputText1.empty();
  var t1Arr = text1Con.split('');
  var endBox = '<span class="end_box"></span>';
  // 첫번째 기능
  
  (function(){
    //console.log(text1Con);
    //console.log(t1Arr);
   var i = 0;
   var textGo;
   var StartText = function(){
                textGo = setInterval(function(){
                 //글자 하나씩 나타나게 만들기
                 if(i < t1Arr.length){
                  inputText1.append(t1Arr[i]);
                }else if(i == t1Arr.length){
                  //마지막에 커서형태 삽입 
                  inputText1.append(endBox);

                }else if(i > t1Arr.length){
                  //내용 모두 작성시 종료
                  //clearInterval(textGo);

                  //커서가 깜빡거리게 만들기
                  inputText1.find('.end_box').remove();
                  i = t1Arr.length-1;
                  //console.log(i)
               }
               i += 1;
              },300);
            };
            StartText();
       })();

      //-----------------------------------


      //두번째 기능
      var inputText2 = $('.text_02');
      var text2Con = inputText2.text();
      var t2Arr = text2Con.split('');
      //console.log(t2Arr);
      inputText2.empty();

    (function(){
          
      var i = 0;
      var j = 0;
      setInterval(function(){
        if(i < t2Arr.length){
                  inputText2.append(t2Arr[i]);
        }else if( i == t2Arr.length){
                  inputText2.append(endBox);    
        }else if(i >= t2Arr.length){
                  inputText2.find('.end_box').remove();
                  i = t2Arr.length -1;

                 j += 1;
                 //console.log(j);
                 if(j >= 5){
                         i = -3;
                         j = 0;
                         inputText2.empty();
                    //3은 조금 더 반복한다는 얘기라고 보면 된다.
                    //console.log(i);
                  }
                }
                i += 1;
      },300);
       
      })();
       //람다형식


       //세번째 기능

      inputText2.after('<p class="input_text text_03"></p>');
      var inputText3 = $('.text_03');
      var t3Text = "세번째 기능을 만들기!";
      var t3Arr = t3Text.split('');
      //console.log(t3Arr);

      (function(){//즉시실행함수 << 바로 실행하라
        var i = 0;
        var j = true;
                setInterval(function(){
                           if(i < t3Arr.length && j == true){
                             inputText3.append(t3Arr[i]);
                             i += 1;
                             if(i >= t3Arr.length){
                               //i=0;
                               j = false;
                             }
                             }else if(j == false && i > 0){
                              i -= 1;
                              var samt = inputText3.text().slice(0,-1);
                              inputText3.text(samt);
                              //console.log(i)
                             }else{
                              j = true;
                            }
                           
                },300);
       })();

})(jQuery);