var goblin1 = new goblinComponnet();
var goblinNPCList = [];
goblinNPCList.push(goblin1);

function goblinComponnet(){
    this.health = 100;
    this.x = 50; //starting position;
    this.spdX = 50; // player speed
    this.y = 50; // starting position
    this.spdY= 50;  // player speed
    this.goblinImage = new Image(); //player img with src
    this.goblinImage.src = "assets/gadfly_sprites/trump.png";

    //objects get put into grid on creation
    objectGrid[this.y/50][this.x/50] = this;
    
    /*player looking directions for sprites*/
    this.lookLeft = true;
    this.lookRight = false;

    this.update = function(){
        var parentThis = this;
        if(parentThis.health <= 0){
            objectGrid[parentThis.y / 50][parentThis.x / 50] = 0
        }  
    }//end of update function

}// end of player commpnnet

function drawGoblin(focusObject,whiteSpaceX,whiteSpaceY){
    ctx.drawImage(focusObject.goblinImage,whiteSpaceX*50,whiteSpaceY*50,50,50);
}

function isGoblin(){
    if( bookList.includes(objectGrid[rowCount][columnCount]) && objectGrid[rowCount][columnCount].itemPickedUp == false){
        drawBook(objectGrid[rowCount][columnCount],whiteSpaceX,whiteSpaceY);
      }
}



