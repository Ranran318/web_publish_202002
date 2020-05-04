// dom_dropDown.js

var domDt = document.getElementsByTagName('dt');
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