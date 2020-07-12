## 포토샵으로 웹페이지 분리하기

1. 각 영역별 내용을 가이드선으로 잡아준다
   - shift키를 이용하여 소수점 없는 위치로 잡아주어야한다.
2. 해당영역을 영역툴을이용하여 별도의 레이어로 잡고, 레이어의 이름을 할당한다.
   - 이미지가 존재하는 레이어를 선택하여 **`CTRL J`**키를 눌러 복제
   - 잘못잡은 영역을 해제하려면 **`CTRL D`** 
   - 레이어의 글씨를 더블클릭하여 글씨 수정
3. 레이어 선택 후 오른버튼 클릭하여 **`SMART OBJECT`** 처리하고 레이어 썸네일 더블클릭
   - 레이어에서 직접 작업보다 별도의 레이어를 통해 작업하여 전체를  파악하기 쉽게 처리하기위한 방안
4. 각 **`SMART OBJECT`** 에서 필요한 내용마다 가이드선 + 영역을 이용하여 레이어 복제
   - 필요시 기능/형태별 그룹처리( **`CTRL G`** ) 및 그룹레이어 이름 변경
5. 배경이미지 다시 재정비
   - 단색의 배경인경우 해당 색상을 전경색으로 선택하여, 빈레이어를 생성하여 칠( **`ALT DEL`** )
   - 이미지의 경우 해당영역의 틀을 제작하여 사용할 이미지의 아래에 놓고, 위/아래로 겹쳐 놓은상태에서
     위의 이미지를 **`ALT CTRL G`** 키를 이용하여 클리핑마스크 처리하여 일부를 지우기보다는 가리게처리
     - 저작권부분 고려하여 무료이미지 사용(http://unsplash.com)
     - 필요에 따라서는 해당 레이어를 반투명하게 처리 (레이어패널 상단 opacity를 이용하여 수정)
     - 이미지의 크기를 변경하려면 상단의 메뉴에서 `Edit > free transform`기능을 이용(`CTRL T`)하여,
       크기를 변경가능하다-가로/세로의 비율을 정비율로 사용할것
   - 배경박스/아이콘 제작할 경우
     - 박스의 경우는 툴에 존재하는 사각,라운드사각,원형의 shape툴을 이용하여 제작
       - 조건: `shape`, `fill`, `stroke`을 확인하여 그릴것
     - 아이콘의 경우는 포토샵에서 제작하기 보다 illustrator파일을 이용하여 
       포토샵으로 붙여넣고(smart object)사용하면, 추가보정이 손쉽다.
     - 박스의 형태에서 일부분이 round처리가 되어있다면, `assistor ps`프로그램의 도움을 얻으면 쉽게 수정가능하다.
       - 단, window만 가능하며, mac에서는 직접 포토샵/일러스트레이터를 통해 수정해야 한다.