// dom_dropDown.js


var domDropDown = document.getElementsByClassName('drop_menu')[0];
var domDt = document.getElementsByTagName('dt');
var domDd = document.getElementsByTagName('dd');
//console.log(domDt);

console.log(domDt.length);



//domDt[0].setAttribute('tabindex','0');
//domDt[1].setAttribute('tabindex','0');
//domDt[2].setAttribute('tabindex','0');
//domDt[3].setAttribute('tabindex','0');

var i = 0;
for(; i < domDt.length ; i++){
	domDt[i].setAttribute('tabindex','0');
}




domDropDown.addEventListener('mouseenter', function(){
	domDd[0].style.display = 'block';
	domDd[1].style.display = 'block';
	domDd[2].style.display = 'block';
	domDd[3].style.display = 'block';
})


domDropDown.addEventListener('click', function(){
	//domDd[0].style.display = 'click';
	//domDd[1].style.display = 'click';
	//domDd[2].style.display = 'click';
	//domDd[3].style.display = 'click';
})

domDropDown.addEventListener('mouseleave', function(){
	domDd[0].style.display = 'none';
	domDd[1].style.display = 'none';
	domDd[2].style.display = 'none';
	domDd[3].style.display = 'none';
})

domDt[0].addEventListener('focus',function(){
	domDt[0].style.display = 'block';
})

domDt[0].addEventListener('focus', function(){
	domDd[0].style.display = 'block';
})