var goblin1 = new smallGoblinComponnet("Goblin1",200,200,"assets/enemy_sprites/hobgoblin_old.png");
var goblin2 = new smallGoblinComponnet("Goblin2",250,200,"assets/enemy_sprites/hobgoblin_new.png");
var goblin3 = new smallGoblinComponnet("Goblin2",300,200,"assets/enemy_sprites/hobgoblin_new.png");
var goblin4 = new smallGoblinComponnet("Goblin2",350,200,"assets/enemy_sprites/hobgoblin_new.png");
var goblinNPCList = [];
goblinNPCList.push(goblin1);
goblinNPCList.push(goblin2);
goblinNPCList.push(goblin3);
goblinNPCList.push(goblin4);

function smallGoblinComponnet(name,x,y,imageSRC,){
    this.health = 100;
    this.name = name;
    this.x = x; //starting position;
    this.spdX = 50; // player speed
    this.y = y; // starting position
    this.spdY= 50;  // player speed
    this.goblinImage = new Image(); //player img with src
    this.goblinImage.src = imageSRC;
    this.movementHistory = [];
    //objects get put into grid on creation
    objectGrid[this.y/50][this.x/50] = this;
    
    /*player looking directions for sprites*/
    this.lookLeft = true;
    this.lookRight = false;
    this.moveGoblinTimer = 0;

    this.update = function(){
        var parentThis = this;
        //check the goblins health
        if(parentThis.health <= 0){
            objectGrid[parentThis.y / 50][parentThis.x / 50] = 0
        }
        //checks proximity for goblin AI
        if( parentThis.moveGoblinTimer >= 15 && playerInScopeOfGoblin(parentThis) != false ) {
            moveGoblin(parentThis , playerInScopeOfGoblin(parentThis));
            parentThis.moveGoblinTimer=0;
        }
        else if(playerInScopeOfGoblin(parentThis) == false && parentThis.moveGoblinTimer >= 15){
                moveGoblinReverse(parentThis);
                parentThis.moveGoblinTimer=0;
        }
        //end of check proximity



        parentThis.moveGoblinTimer++; //updates the goblin search timer
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
        if(goblinObject.x == player1.x && ( player1.y <= goblinObject.y + 3*50) && ( player1.y > goblinObject.y )  ){
            //console.log("below");
            return "BELOW";
        }
        if(goblinObject.x == player1.x && ( player1.y >= goblinObject.y - 3*50) && ( player1.y < goblinObject.y )  ){
            return "ABOVE";
        }
        if(goblinObject.y == player1.y && ( player1.x <= goblinObject.x + 3*50) && ( player1.x > goblinObject.x )  ){
            return "RIGHT";
        }
        if(goblinObject.y == player1.y && ( player1.x >= goblinObject.x - 3*50) && ( player1.x < goblinObject.x )  ){
            return "LEFT";
        }
        if(goblinObject.y == player1.y &&  player1.x == goblinObject.x ){
                goblinTouch(goblinObject.movementHistory[goblinObject.movementHistory.length - 1] , goblinObject);
            return false;
        }
    return false;
}

function moveGoblin(goblinObject, direction){
    if(checkMapTileCollisions(direction,goblinObject) == false){
        switch(direction) {
            case "RIGHT":
                objectGrid[goblinObject.y / 50][goblinObject.x / 50] = 0;
                objectGrid[goblinObject.y / 50][goblinObject.x / 50 + 1] = goblinObject;
                goblinObject.x += 50;
                goblinObject.movementHistory.push(direction);
                break;
            case"LEFT":
                objectGrid[goblinObject.y / 50][goblinObject.x / 50] = 0;
                objectGrid[goblinObject.y / 50][goblinObject.x / 50 - 1] = goblinObject;
                goblinObject.x -= 50;
                goblinObject.movementHistory.push(direction);
                break;
            case"ABOVE":
                objectGrid[goblinObject.y / 50][goblinObject.x / 50] = 0;
                objectGrid[goblinObject.y / 50 - 1][goblinObject.x / 50] = goblinObject;
                goblinObject.y -= 50;
                goblinObject.movementHistory.push(direction);
                break;
            case"BELOW":
                objectGrid[goblinObject.y / 50][goblinObject.x / 50] = 0;
                objectGrid[goblinObject.y / 50 + 1][goblinObject.x / 50] = goblinObject;
                goblinObject.y += 50;
                goblinObject.movementHistory.push(direction);
                break; 
            }//end of switch   
        }//end of if
        else{
            //console.log("collision detected");
        }
}

function moveGoblinReverse(goblinObject){
    
    switch(goblinObject.movementHistory.pop( )) {
        case "RIGHT":
        if(checkMapTileCollisions("LEFT",goblinObject) == false){
            objectGrid[goblinObject.y / 50][goblinObject.x / 50] = 0;
            objectGrid[goblinObject.y / 50][goblinObject.x / 50 - 1] = goblinObject;
            goblinObject.x -= 50;
        }
            //goblinObject.movementHistory.pop()
            break;
        case"LEFT":
        if(checkMapTileCollisions("RIGHT",goblinObject) == false){
            objectGrid[goblinObject.y / 50][goblinObject.x / 50] = 0;
            objectGrid[goblinObject.y / 50][goblinObject.x / 50 + 1] = goblinObject;
            goblinObject.x += 50;
        }
            //goblinObject.movementHistory.pop()
            break;
        case"ABOVE":
        if(checkMapTileCollisions("BELOW",goblinObject) == false){
            objectGrid[goblinObject.y / 50][goblinObject.x / 50] = 0;
            objectGrid[goblinObject.y / 50 + 1][goblinObject.x / 50] = goblinObject;
            goblinObject.y += 50;
        }
            //goblinObject.movementHistory.pop()
            break;
        case"BELOW":
        if(checkMapTileCollisions("ABOVE",goblinObject) == false){
            objectGrid[goblinObject.y / 50][goblinObject.x / 50] = 0;
            objectGrid[goblinObject.y / 50 - 1][goblinObject.x / 50] = goblinObject;
            goblinObject.y -= 50;
        }
            //goblinObject.movementHistory.pop()
            break;
    }
        
}

function goblinTouch(direction, goblinObject){ //this function moves the player back when touched
    if(checkMapTileCollisions(direction, player1) == false ){
        switch(direction) {
            case "RIGHT":
                player1.x += 50;
                break;
            case"LEFT":
                player1.x -= 50;
                break;
            case"ABOVE":
                player1.y -= 50;
                break;
            case"BELOW":
                player1.y += 50;
                break; 
            }//end of switch       
    }//else if goblin touches but player has wall colleisions
    else if(checkMapTileCollisions(direction, player1) == true  ){
        switch(direction) {
            case "RIGHT":
                moveGoblin(goblinObject, "LEFT");
                break;
            case"LEFT":
                moveGoblin(goblinObject, "RIGHT");
                break;
            case"ABOVE":
                moveGoblin(goblinObject, "BELOW");
                break;
            case"BELOW":
                moveGoblin(goblinObject, "ABOVE");
                break; 
            }//end of switch 
    } player1.health -= 5; //console.log(player1.health);

}



