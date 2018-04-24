
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var missionMessage = document.getElementById('missionMessage');
var nameGadfly = document.getElementById('nameGadfly');
var imageGadfly = document.getElementById('imageGadfly');

var player1 = new playerComponnet()

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
    goblin1.update();
    playerStatusBoxUpdate();
 }

setInterval(update,40);

function playerStatusBoxUpdate(){
    if( player1.questList.length != 0 ){
        missionMessage.innerHTML = player1.questList[ player1.questList.length -1].speak;
        nameGadfly.innerHTML = player1.questList[ player1.questList.length -1].name;
        imageGadfly.src = player1.questList[ player1.questList.length -1].npcImage.src;
    }
    
}






