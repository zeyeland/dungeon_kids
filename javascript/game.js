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

var gameTimer = 7500;
var gameOver = false;
function update(){

    if(gameTimer > -1 && gameOver == false){

        ctx.clearRect(0,0, 2000, 5000); // clears new area after translate is complete
        drawMapTiles();
        drawObjectTiles(); // this methods draws objects and calls updated methods
        player1.update(); // -- update function draws player - drawPlayer();
        grate1.update();
        grate2.update();
        grate3.update();
        grate4.update();
        playerStatusBoxUpdate();
        gameTimer --;
        //checkPlayerWin();
    }else if(gameTimer <= 0){
        console.log("game over");
        console.log("You lose!!!!!!!");
        gameOverFunctionL();
    }
    else if(gameOver == true){
        console.log("Congrats you win. Your score is: " + player1.score);
        gameOverFunctionW();
    }

 }

setInterval(update,40);


var missionMessage = document.getElementById('missionMessage');
var nameGadfly = document.getElementById('nameGadfly');
var imageGadfly = document.getElementById('imageGadfly');
var playerHealth = document.getElementById('playerHealth');
var playerGold = document.getElementById('playerGold');
var playerScore = document.getElementById('playerScore');
var gameTime = document.getElementById('clockdiv');

function playerStatusBoxUpdate(){
    
        //missionMessage.innerHTML = player1.questList[ player1.questList.length -1].speak;
        //nameGadfly.innerHTML = player1.questList[ player1.questList.length -1].name;
        //eeimageGadfly.src = player1.questList[ player1.questList.length -1].npcImage.src;
    
    gameTime.innerHTML  = "Countdown : " + gameTimer + " goblin seconds";
    playerScore.innerHTML = "Score : " + player1.score;
    playerHealth.innerHTML = "Health :" + player1.health;
    playerGold.innerHTML = "Gold :$" + player1.gold;
    
}

    var hasScroll1 = player1.inventoryBooks.includes(scrollMind);
    var hasScroll2 = player1.inventoryBooks.includes(scrollBody);
    var hasScroll3 = player1.inventoryBooks.includes(scrollSpirit);

function checkPlayerWin(){
      hasScroll1 = player1.inventoryBooks.includes(scrollMind);
      hasScroll2 = player1.inventoryBooks.includes(scrollBody);
      hasScroll3 = player1.inventoryBooks.includes(scrollSpirit);

    if( hasScroll1 == true && hasScroll2 == true && hasScroll3 == true){
        return true;
    }
    return false;
}









