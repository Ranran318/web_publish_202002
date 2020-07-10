//likePinterest.js

(function($){
				var cardData;
				var maxCardLength;

				$.ajax({
					      url: '../data/MOCK_DATA.json',
					      success:function(data){
					      			cardData = data;
					      			maxCardLength = cardData.length;
				      
      
			        	var cardCode = '<div class="card">\
	  	              	                  	<a href="#">\
	                  	                 			 <div class="link_area">\
	                  	                 					 1\
	                  	                 			 </div>\
	                  	                 			 <p class="text_area">\
			              														Lorem ipsum dolor sit, amet consectetur adipisicing elit.Molestias, culpa?\
			              												 </p>\
	                  	                 		</a>\
			              								 </div>';
			        	var win = $(window);
			        	var wrap = $('#wrap');
			        	var cardWrap = $('.card_wrap');
			        	var cardWidth = 250; //필요한 이유 고민해보깅
        
			        	var winW = win.outerWidth();
			        	var cardRowLength; // 브라우저에서 가로 카드 갯수
        
			        	var card; // = $('.card');
			        	var jc; // card 생성시 순번체크용
                
       //--------------------------------------------
				//불러올 카드 높이값 설정
			          var cardHeight = [];
      
				      	 for(var i=0; i<maxCardLength; i+=1){
				      		 cardHeight[i] = parseInt(Math.random() * 600) + 200;
				      	 }
				      	// console.log(cardHeight);
      
				      	var jCount;
				      	var jcOffset;
				      	var j=0;
				      	var RepeatCard = function(c){
				      				jCount = j + c || 20;
				      				for(; j<jCount; j+=1){
				      					cardWrap.append(cardCode);
				      					card = cardWrap.find('.card').eq(j);
				      					card.css({height:cardHeight[j]});
				      					card.css({left:cardWidth * (j % cardRowLength) + 'px'});
				      					
				      					if( j < cardRowLength){ 
				      						card.css({top:0});
				      						card.find('.link_area').css({backgroundColor:cardData[j].color});
				      						card.find('.link_area').text(cardData[j].id);
													card.find('.text_area').text(cardData[j].thum_content);
													
				      					}else{
				      						 jc = j - cardRowLength;
				      						 jcOffset = parseInt(cardWrap.find('.card').eq(jc).css('top'))+
				      						 cardWrap.find('.card').eq(jc).outerHeight();
				      						 
				      						card.css({top:jcOffset});
				      						card.find('.link_area').css({backgroundColor:cardData[j].color});
				      						card.find('.link_area').text(cardData[j].id);
				      						card.find('.text_area').text(cardData[j].thum_content);
				      					}
				      				}//for 
				        		//console.log(cardWidth * (j % cardRowLength));
				         }; //RepeatCard() //------------------------------------------end
			       
			//------------------------------------------------------
			        	var CardSet = function(widthSize){
			                    cardRowLength = parseInt((widthSize - 60) / cardWidth);	
			        		        wrap.css({width:cardRowLength * cardWidth + 'px'});
			        						RepeatCard();
								};
								CardSet(winW);
			        		 //console.log(cardRowLength);//하나의 행에 보이는 카드갯수 파악
			        		 //-------------------------------
			        		 
	          
			        				  
			        			//	 jCount = j- cardRowLength < 0 ? j : j- (cardRowLength * (count + 1)); 
			        			//	 var jLeft = jCount * cardWidth;
			        			//	 };
			        			  
			        		
			        				 
			        				
        
			        			//	 jc = j - cardRowLength;
        
			        				 //if(j < cardRowLength){
			        				//			 card.css({top:0, left:cardWidth * j}); 
			        				//			 
			        				 //}else if(j < cardRowLength * 2){
                       //    //-------------------------------------
			        				//		   jc = j - cardRowLength;
			        				//		   beforH = cardWrap.find('.card').eq(jc).outerHeight();
			        				//			 
			        				//			 card.css({top:beforH + 'px', left:cardWidth * jc + 'px'});
                       //    //-------------------------------------
			        				 //}else if( j < cardRowLength * 3 ){
                       //    //-------------------------------------
			        				//	      jc = j - cardRowLength;
			        				//	      var jc2 = j - cardRowLength * 2;
			        				//	      beforH = cardWrap.find('.card').eq(jc).outerHeight() +
			        				//	     					parseInt(cardWrap.find('.card').eq(jc).css('top'));
             //
                       //       //console.log(jc, beforH);
             //
		        					//				card.css({top:beforH + 'px', left:cardWidth * jc2 + 'px'});
		        					//			//-------------------------------------	
		        					//	}else if(j < cardRowLength * 4){   
		        					//			 //-------------------------------------
		        					//	       	jc = j - cardRowLength;
		        					//	       	var jc3 = j - cardRowLength * 3;
		        					//	       	beforH = cardWrap.find('.card').eq(jc).outerHeight() +
		        					//	       					 parseInt(cardWrap.find('.card').eq(jc).css('top'));
                //
		        					//	        card.css({top:beforH + 'px', left:cardWidth * jc3 + 'px'});
		        					//	
		        					//	}else if(j < cardRowLength * 5){   
		        					 //        //-------------------------------------
		        					//	      	jc = j - cardRowLength;
		        					//	      	var jc4 = j - cardRowLength * 4;
		        					//	      	beforH = cardWrap.find('.card').eq(jc).outerHeight() +
		        					//	      					 parseInt((cardWrap.find('.card').eq(jc).css('top')));
		        					//
		        					//	        card.css({top:beforH + 'px', left:cardWidth * jc4 + 'px'});
		        					//				//-------------------------------------
		        					 //
		        				  //
        //
        							//	}else{card.hide();}
        							
        							
                      
        					  //}
        					 //-------------------------------
        			
        
								
									 
        				 
                //------------------------------------------------
        				   win.on('resize', function(){
        								var nowWinW = win.outerWidth();
        								if(winW !== nowWinW){CardSet(nowWinW);}
        					 });
        					 //------------------
        					// $('#headBox').on('click', function(){
        					//	    RepeatCard(10);
        					// });
        					 $(document).on('scroll', function(){
        											var nowScroll = win.scrollTop();
        											var cardOffset = card.offset().top - win.outerHeight();
        
        											if(nowScroll >= cardOffset && jCount <= maxCardLength){
        												 RepeatCard(25);
        											} 
        					 }); 
                  
        
        					} //$.ajax({success:function(){}})
       	}); //$.ajax 끝
								 
})(jQuery);