
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var player1 = new playerComponnet()
var socrates = new socratesNPC();
var obama = new obamaNPC();
var trump = new trumpNPC();
var songs = new songsNPC();

//drawMapTiles();

function update(){
    ctx.clearRect(0,0, 2000, 5000); // clears new area after translate is complete
    drawMapTiles();
    drawObjectTiles();
    player1.update(); // -- update function draws player - drawPlayer();
    socrates.update();
    obama.update();
    trump.update();
    songs.update();
 }

setInterval(update,40);








