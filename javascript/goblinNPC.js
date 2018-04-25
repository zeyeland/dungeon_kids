var goblin1 = new smallGoblinComponnet();
var goblinNPCList = [];
goblinNPCList.push(goblin1);

function smallGoblinComponnet(){
    this.health = 100;
    this.x = 550; //starting position;
    this.spdX = 50; // player speed
    this.y = 350; // starting position
    this.spdY= 50;  // player speed
    this.goblinImage = new Image(); //player img with src
    this.goblinImage.src = "assets/enemy_sprites/hobgoblin_old.png";
    this.movementHistory = [];
    //objects get put into grid on creation
    objectGrid[this.y/50][this.x/50] = this;
    
    /*player looking directions for sprites*/
    this.lookLeft = true;
    this.lookRight = false;
    this.xTimer = 0;

    this.update = function(){
        var parentThis = this;
        if(parentThis.health <= 0){
            objectGrid[parentThis.y / 50][parentThis.x / 50] = 0
        }
       
        if(playerInScopeOfGoblin(parentThis) != false && parentThis.xTimer >= 15) {
            console.log(playerInScopeOfGoblin(parentThis));
            moveGoblin(parentThis , playerInScopeOfGoblin(parentThis));
            parentThis.xTimer=0;
        }
        parentThis.xTimer++;
    }//end of update function

}// end of player commpnnet

function drawGoblin(focusObject,whiteSpaceX,whiteSpaceY){
    ctx.drawImage(focusObject.goblinImage,whiteSpaceX*50,whiteSpaceY*50,50,50);
}

function isGoblin(){
    if( goblinNPCList.includes(objectGrid[rowCount][columnCount]) && objectGrid[rowCount][columnCount].itemPickedUp == false){
        drawBook(objectGrid[rowCount][columnCount],whiteSpaceX,whiteSpaceY);
      }
}

function playerInScopeOfGoblin(goblinObject){
    //goblin can look 3 spaces from their location *hints 3 * 50
        if(goblinObject.x == player1.x && ( player1.y <= goblinObject.y + 3*50) && ( player1.y >= goblinObject.y )  ){
            return "BELOW";
        }
        if(goblinObject.x == player1.x && ( player1.y >= goblinObject.y - 3*50) && ( player1.y <= goblinObject.y )  ){
            return "ABOVE";
        }
        if(goblinObject.y == player1.y && ( player1.x <= goblinObject.x + 3*50) && ( player1.x >= goblinObject.x )  ){
            return "RIGHT";
        }
        if(goblinObject.y == player1.y && ( player1.x >= goblinObject.x - 3*50) && ( player1.x <= goblinObject.x )  ){
            return "LEFT";
        }
    return false;
}

function moveGoblin(goblinObject, direction, timer1){

    if(direction == "LEFT"){

            objectGrid[goblinObject.y / 50][goblinObject.x / 50] = 0;
            objectGrid[goblinObject.y / 50][goblinObject.x / 50 - 1] = goblinObject;
            goblinObject.x -= 50;   
    }

    if(direction == "RIGHT"){

        objectGrid[goblinObject.y / 50][goblinObject.x / 50] = 0;
        objectGrid[goblinObject.y / 50][goblinObject.x / 50 + 1] = goblinObject;
        goblinObject.x += 50;
    }

    
}



