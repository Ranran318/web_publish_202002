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
 }).done(function(data){
	 //console.log(data);
	 var i=0;
	 var person;
	 var firstView = 20;
	 var myView = 5;
	 var maxN = data.length;

	 var LoadData = function(n){
		 var k = n || myView;
		 //var k = n || myView;
		 //와 같은 식 => if(n>0){k=n}else{k = myView}
		 var j = i + k;
		 // for 문 start================================
	       for(; i<j; i++){
    
	    	 content.append(sampleCode);
	    	 person = $('.person');
	    	 person.eq(i).find('span.num').text(i + 1);
	    	 person.eq(i).find('.peopleName').text(data[i].name);
	    	 person.eq(i).find('.email').text(data[i].email);
	    		}
	    		//=========================================
	    		if(i >= maxN){moreBtn.hide()}//more버튼이 사라지게 해서 더 볼 수 없게. 제한.
	     }; //LoadData(n);

    // for문 end========================================
   LoadData(firstView);
 
  moreBtn.on('click', function(e){
		 e.preventDefault();
		 (i >= maxN ) ? moreBtn.hide() : LoadData();
          LoadData();
	});
 });


})(jQuery);