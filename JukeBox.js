

function Song(name, fileName){
    this.name = name;
    this.fileName = fileName;
    

    this.getName = function() {
        return this.name;
    }

    this.getFileName = function() {
        return this.fileName;
    }
  }
var OutLastNightSong = new Song("Out Last Night", "01 Out Last Night.m4a");
var smallSong = new Song("All the Small Things", "08 All the Small Things.m4a");
var countrySong = new Song("She's Country", "06 She's Country.m4a");
var songs = [countrySong, OutLastNightSong, smallSong];
var index = 0;

document.getElementById('juke').addEventListener('click', function(){
  var audio = document.getElementsByTagName('audio')[0];
    if (audio.paused == true){
      audio.play();
  } else if (audio.paused == false){
  	audio.pause();
  }
});

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
