// Display at least one song on the page when the page loads
// Give the user the ability to play that song, without using the "built-in" play button. This could be through a different button, through clicking or mousing over an image on the page, or any other device of your choosing.
// Give the user the ability to stop that song without using the "built-in" stop button. Once again, this could be through a different button, through clicking or mousing over an image on the page, or any other device of your choosing.
// The whole Jukebox should be backed by an object called Jukebox with methods to play, stop, and load songs.

function Song(name, fileName){
    this.name = name;
    this.fileName = fileName;
    
    this.getName = function(){
        return this.name;
    }

    this.getFileName = function() {
        return this.fileName;
    }
  }

function Jukebox(){
  this.audio = document.getElementsByTagName('audio')[0];
  this.songs = [];
  this.songIndex = 0;
  
  // Play current song

  this.play = function(){
   this.audio.play();
   this.setInfo();
  }

  // Pause the current song

  this.pause = function(){
    this.pause();
  };

  this.addSong = function(song){
    this.songs.push(song);
  }

  this.setInfo = function(){
    document.getElementsByTagName('h1')[0].innerText = this.songs[this.songIndex].name;
  }

  this.loadSong = function(song){
    var songObject = new Song("All the Small Things", song);
    this.audio.src = song;
    this.setInfo();
    this.play();
    this.addSong(songObject);
  }
}

// Playlist of songs that the user can choose to play

var juke = new Jukebox();
var OutLastNightSong = new Song("Out Last Night", "01 Out Last Night.m4a");
var smallSong = new Song("All the Small Things", "08 All the Small Things.m4a");
var countrySong = new Song("She's Country", "06 She's Country.m4a");
var songs = [countrySong, OutLastNightSong, smallSong];
var index = 0;

juke.addSong(OutLastNightSong);
juke.addSong(smallSong);
juke.addSong(countrySong);

document.getElementById('play').addEventListener('click', function(){
    if (juke.audio.paused){
      juke.audio.play();
  }else {
      juke.audio.pause();
  }
  
// gives the user the ability to go to next song or previous song. N for next, P for previous

document.addEventListener("keydown", keypress, false);

 function keypress(e) {
  var keyCode = e.keyCode;
  if(keyCode == 78) { 
    if(index+1 > 2){
     
    }else{
    index = index + 1;
    }

  document.getElementsByTagName('audio')[0].src = songs[index].fileName;
  document.getElementsByTagName('h1')[0].innerText = songs[index].name;
  }

  if(keyCode == 80) { 
    if(index > 0){
      index = index - 1;
    }
    
  document.getElementsByTagName('audio')[0].src = songs[index].fileName;
  document.getElementsByTagName('h1')[0].innerText = songs[index].name;
  }
} 
});

// Give the user the ability to load at least one different song 
// into the Jukebox besides the one that is loaded when the page initially renders

var file = document.getElementById("file");
file.addEventListener('change', function(){
  juke.loadSong(this.value.replace('C:\\fakepath\\', ''));
});