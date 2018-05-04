//Create the canvas
//var canvas = document.getElementById('canvasMain');
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

var mWidth = document.querySelector('main').offsetWidth;
var mHeight = document.querySelector('main').offsetHeight;

//Modify canvas
canvas.width = mWidth;
canvas.height = mHeight;
document.querySelector('main').appendChild(canvas);

//console.log(canvas.width/20 );
//console.log(canvas.height/10 );

var player1 = new playerComponnet()

//drawMapTiles();

function update(){
    ctx.clearRect(0,0, 2000, 5000); // clears new area after translate is complete
    drawMapTiles();
    drawObjectTiles(); // this methods draws objects and calls updated methods
    player1.update(); // -- update function draws player - drawPlayer();
    /*socrates.update();
    obama.update();
    trump.update();
    songs.update();
    oprah.update();
    prince.update();
    hueyNewton.update();*/
    //goblin1.update();
    grate1.update();
    grate2.update();
    grate3.update();
    grate4.update();
    playerStatusBoxUpdate();
 }

setInterval(update,40);


var missionMessage = document.getElementById('missionMessage');
var nameGadfly = document.getElementById('nameGadfly');
var imageGadfly = document.getElementById('imageGadfly');
var playerHealth = document.getElementById('playerHealth');
var playerGold = document.getElementById('playerGold');

function playerStatusBoxUpdate(){
    if( player1.questList.length != 0 ){
        missionMessage.innerHTML = player1.questList[ player1.questList.length -1].speak;
        nameGadfly.innerHTML = player1.questList[ player1.questList.length -1].name;
        imageGadfly.src = player1.questList[ player1.questList.length -1].npcImage.src;
    }

    playerHealth.innerHTML = "Health :" + player1.health;
    playerGold.innerHTML = "Gold :$" + player1.gold;
    
}







