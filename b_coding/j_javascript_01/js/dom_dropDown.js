// dom_dropDown.js


var domDropDown = document.getElementsByClassName('drop_menu')[0];
var domDt = document.getElementsByTagName('dt');
var domDd = document.getElementsByTagName('dd');
//console.log(domDt);

//console.log(domDt.length);



//domDt[0].setAttribute('tabindex','0');
//domDt[1].setAttribute('tabindex','0');
//domDt[2].setAttribute('tabindex','0');
//domDt[3].setAttribute('tabindex','0');

var i = 0;
for(; i < domDt.length ; i++){
	domDt[i].setAttribute('tabindex','0');
}

var DomDdFn = function(action){
	var j=0;
	for(; j < domDd.length; j++){
		domDd[j].style.display = action;
	}
};

//DomDdFn=('block');

domDropDown.addEventListener('click', function(){DomDdFn('block');
	//domDd[0].style.display = 'block';
	//domDd[1].style.display = 'block';
	//domDd[2].style.display = 'block';
	//domDd[3].style.display = 'block';
	//var j=0;
	//for(; j< domDd.length; j++){
	//	domDd[j].style.display = 'block';
	// }
});


domDropDown.addEventListener('mouseleave', function(){DomDdFn('none');

//	domDd[0].style.display = 'none';
//	domDd[1].style.display = 'none';
//	domDd[2].style.display = 'none';
//	domDd[3].style.display = 'none';

//	varj=0;
//	for(; j<domDd.length; j++){
//		domDd[j].style.display = 'none';
//	}
});

//domDt[0].addEventListener('focus',function(){
//	domDt[0].style.display = 'none';
//})

domDt[0].addEventListener('focus', function(){
    DomDdFn('block');
});