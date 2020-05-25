//monfee.js

(function($){
	var win = $(window);
	var winH = win.height();
	
	var wrap = $('#wrap');
	wrap.height(winH);
	//=======================
	headBox.wrap = $(headBox.parent('div'));
	var headBoxH = headBox.css('height');
	var headBox = $('headBox');

	
	headBoxWrap.css({width:'100%', height:headBoxH, backgroundColor:headBoxBg,
 position:'fixed', top:0, left:0, zindex=100});
	headBox.css({maxWidth:'940px',margin:'auto',backgroundColor:'transparent'});


	//---------------------
	var bestNewsBox = $('#bestNewsBox');
	bestNewsBox.wrap('<div class="bestNewsBox_wrap"></div>');

	var bestNewsBoxwrap = $('bestNewsbOX_wrap');

	var bestNewsBoxBg = bestNewsBox.css('backgroundColor');
	bestNewsBoxwrap.css({width:'100%',backgroundColor:bestNewsBoxBg});
	bestNewsBox.css({backgroundColor:'transparent'});
	//----------------
	//var liDl = ('<li><dl></dl></li>');
	// $(lidl).prepend('dt')

	var gnbArr = [ {title : 'story', //gnbArr[0].title
	subList = [ //gnbArr[0].subList
	// //gnbArr[0].subList.linkName , gnaArr[0].subList[0].????????
					 {linkName: '몽피이야기', link : 'storyMonfee.html'},//gnbArr[0].subList
	         {linkName: '회사소개', link: 'aboutCompany.html'},
					 {linkName: '후후업체', link: 'sponCompany.html'}]},


{title : 'menu', //gnbArr[1].title
subList = [ //gnbArr[1].subList
					{linkName: '커피류', link : 'storyMonfee.html'},
					{linkName: '기타음료', link: 'aboutCompany.html'},
					{linkName: '음식 및 디저트', link: 'sponCompany.html'},
					{linkName: '선물용 상품', link: 'sponCompany.html'},
					{linkName: '기타 제품', link: 'sponCompany.html'}]},

{title : 'store', //gnbArr[2].title
subList = [ //gnbArr[2].subList
					{linkName: '신규매장', link : 'storyMonfee.html'},
					{linkName: '매장찾기', link: 'aboutCompany.html'},
					{linkName: '창업설명회', link: 'sponCompany.html'},
					{linkName: '창업스토리', link: 'sponCompany.html'}]},
	


{title : 'news', //gnbArr[3].title
subList = [ //gnbArr[3].subList
					{linkName: '이벤트', link : 'storyMonfee.html'},
					{linkName: '공지사항', link: 'aboutCompany.html'},
					{linkName: '프로모션', link: 'sponCompany.html'},
					{linkName: '미디어광고', link: 'sponCompany.html'}]}
	]

var gnbBox = $('gnbBox');

    gnbBox.append('<ul class="gnb_area clearfix"></div>');
//console.log(gnbArr.length);
var gnbArea = gnbBox.children('.gnb_area');
var i = 0;
var gnbDt, gnbTitle,gnb_sub, gubSubLength, gnbSubLink;

for (; i < gnbArr.length ; i++){
	gnbArea.append('<li><dl><dt></dt></dl></li>');
	gnbDt = 
	gnbTitle = gnbArr[i].title;
	

	gnbDt.text( gnbTitle);
	gnbArea.find('dd').eq(i).append('<ul class="gnb_sub"></ul>');
	gnbSubLength = gnbArr[i].subList.length;
	for(var j = 0; j < gnbSubLength; j++){
		gnb_sub.eq(i).append('<li><a href=""></a></li>');
		gnbSubLink = gnb_sub.eq(i).find('li').eq(j).find('a');
		gnbSubText = gnbArr[i].subList[j].linkName;
		gnbSubHref = gnbArr[i].subList[j].link;
	  gnbSubLink.text(gnbSubText)
	  gnbSubLink.attr({href:gnbSubHref});

	//면접 -> 이중구문
}

var gnbList = gnbArea.children('li');
var gnbListLength = gnbList.length;
gnbList.css({width:100 / gnbListLength + '%'});

//----------------------------

gnbArea.find('dd').hide();
gnbArea.on('mousenter',function(){
	 gnbArea.find('dd').stop().slideDown();
	 
});

headBox.on('mouseleave', function(){
	gnbArea.find('dd').stop().slideUp();
});



})(jQuery);