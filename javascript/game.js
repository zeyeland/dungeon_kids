
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var playerBoxh3 = document.getElementById('playerBoxh3');
var playerImage = document.getElementById('myImage');

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
    playerStatusBoxUpdate();
 }

setInterval(update,40);

function playerStatusBoxUpdate(){
    if( player1.questList.length != 0 ){
        playerBoxh3.innerHTML = player1.questList[ player1.questList.length -1].speak;
        playerImage.src = player1.questList[ player1.questList.length -1].npcImage.src;
    }
    
}






