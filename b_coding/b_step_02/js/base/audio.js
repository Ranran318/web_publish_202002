(function($){

var audio = $('.media_music');
var audioSrc = audio.find('source');
var play = $('.play');
var pause = $('.pause');
var next = $('.next');

var playList = [];

playList[0]='Lucky_Dragons_-_20_-_Mercy';
playList[1]='Mahjongg_-_04_-_Tell_The_Police_The_Truth';
playList[2]='New_Bomb_Turks_-_09_-_So_Long_Silver_Lining';
playList[3]='Pierced_Arrows_-_01_-_Guns_of_Thunder';
playList[4]='Psychedelic_Horseshit_-_05_-_New_Wave_Hippies';
playList[5]='Kinski_-_03_-_Shelley_Winters_Overdrive';



var  url = '../../media/audio/';
var playTitle = function(i){
	audio.attr({src: url + playList[i] + '.mp3'});
	//audio.empty();
	//audio.append('<source>');
	//audioSrc = audio.find('source');
	//audioSrc.eq(0).attr({src: playList[2] + '.mp3', type:'audio/mp3'});
	//audioSrc.eq(1).attr({src: playList[2] + '.ogg', type:'audio/ogg'})
};

var n = 0;
playTitle(n);

play.on('click', function(e){
	e.preventDefault();
	//audio.get(0).play();
  audio[0].play();
	//console.log( audio.get(0))

});




pause.on('click', function(e){
	e.preventDefault();
	
	audio.get(0).pause();
});

next.on('click', function(e){
	 e.preventDefault();
	 if(n >= playList.length){ n = 0; }else{ n+=1; }
	 console.log(n);
	 audio[0].pause();
	 playTitle(n);
	 audio[0].play();

});


})(jQuery);