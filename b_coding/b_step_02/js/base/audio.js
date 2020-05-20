(function($){

var audio = $('.media_music');
var play = $('.play');
var pause = $('.pause');

play.on('click', function(e){
	e.preventDefault();

	//audio.get(0).play();
audio[0].play();
	//console.log( audio.get(0))
//
});


pause.on('click', function(e){
	e.preventDefault();
	
	audio.get(0).pause();
});


})(jQuery);