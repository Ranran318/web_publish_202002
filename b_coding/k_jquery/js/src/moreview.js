(function($){
			var content = $('.content');
			var moreBtn = $('.more').find('button');
			
			var sampleCode = '<div class="person">\
			                  <span class="num"></span>\
			                  <div class="img"><img src="../img/flower.png" alt="꽃"></div>\
                         <dl>\
		                        <dt>name</dt><dd class="peopleName">xido lee</dd>\
		                        <dt>email</dt><dd class="email"> xidowdb@gmail.com</dd>\
                        </dl>\
		                    </div>';
		 
	// content.append(sampleCode);
 $.ajax({
	 url:"../data/people.json",
	 //async:false,
 }).done(function(data){//변수 이름 data 대신 jsonResult 등의 변수도 써도 됨.
	 //console.log(data);
	 var i=0;
	 var person;
	 var firstView = 20;
	 var myView = 10;
	 var maxN = 30;//data.length;이 내용을 쓰면 10000개 써져있는 데이터 그대로 다 나타날 때까지..

	 var LoadData = function(n){
		     var k = n || myView;
		 //var k = n || myView;
		 //와 같은 식 => if(n>0){k=n}else{k = myView}
		     var j = i + k;
		 // for 문 start================================
	       for(; i<j; i++){
    
	    	     content.append(sampleCode);
	    	     //content.append(sampleCode);
				     
				     person = $('.person').eq(i);
				     person.find('span.num').text(i + 1);
	    	     person.find('.peopleName').text(data[i].name);
	    	     person.find('.email').text(data[i].email);
	    	     //person.eq(i).find('span.num').text(i + 1);
	    	     //person.eq(i).find('.peopleName').text(data[i].name);
	    	     //person.eq(i).find('.email').text(data[i].email);
	    		}
	    		//=========================================
	    		if(i >= maxN){moreBtn.hide()}//more버튼이 사라지게 해서 더 볼 수 없게. 제한.
	     }; //LoadData(n);

    // for문 end========================================
         LoadData(firstView);
       
        moreBtn.on('click', function(e){
      		 e.preventDefault();
      		     LoadData();
      		 //(i >= 50 ) ? moreBtn.hide() : LoadData();
              
      	});
 });


})(jQuery);