var goblin1 = new smallGoblinComponnet("Goblin1",900,50,"assets/enemy_sprites/hobgoblin_old.png");
var goblin2 = new smallGoblinComponnet("Goblin2",1100,150,"assets/enemy_sprites/hobgoblin_new.png");
var goblin3 = new smallGoblinComponnet("Goblin3",900,450,"assets/enemy_sprites/hobgoblin_new.png");
var goblin4 = new smallGoblinComponnet("Goblin4",1000,450,"assets/enemy_sprites/hobgoblin_new.png");
var goblin6 = new smallGoblinComponnet("Goblin6",1500,200,"assets/enemy_sprites/hobgoblin_new.png");
var goblin7 = new smallGoblinComponnet("Goblin7",1300,250,"assets/enemy_sprites/hobgoblin_new.png");

var goblin5 = new smallGoblinComponnet("Goblin5",1800,200,"assets/enemy_sprites/hobgoblin_old.png");
var goblin8 = new smallGoblinComponnet("Goblin8",2000,150,"assets/enemy_sprites/hobgoblin_old.png");
var goblin9 = new smallGoblinComponnet("Goblin9",1800,100,"assets/enemy_sprites/hobgoblin_old.png");


var goblin10 = new smallGoblinComponnet("Goblin10",2600,50,"assets/enemy_sprites/hobgoblin_old.png");
var goblin11 = new smallGoblinComponnet("Goblin11",2200,500,"assets/enemy_sprites/hobgoblin_new.png");
var goblin12 = new smallGoblinComponnet("Goblin12",3800,100,"assets/enemy_sprites/hobgoblin_old.png");

var goblin13 = new smallGoblinComponnet("Goblin13",3300,600,"assets/enemy_sprites/hobgoblin_old.png");
var goblin14 = new smallGoblinComponnet("Goblin14",3300,750,"assets/enemy_sprites/hobgoblin_old.png");
var goblin15 = new smallGoblinComponnet("Goblin15",3300,900,"assets/enemy_sprites/hobgoblin_old.png");

var goblin16 = new smallGoblinComponnet("Goblin16",3600,900,"assets/enemy_sprites/hobgoblin_new.png");
var goblin17 = new smallGoblinComponnet("Goblin17",3600,750,"assets/enemy_sprites/hobgoblin_new.png");
var goblin18 = new smallGoblinComponnet("Goblin18",3600,600,"assets/enemy_sprites/hobgoblin_new.png");

var goblin19 = new smallGoblinComponnet("Goblin19",3900,900,"assets/enemy_sprites/hobgoblin_old.png");
var goblin20 = new smallGoblinComponnet("Goblin20",3900,750,"assets/enemy_sprites/hobgoblin_new.png");
var goblin21 = new smallGoblinComponnet("Goblin21",3900,600,"assets/enemy_sprites/hobgoblin_new.png");



var goblinNPCList = [];
goblinNPCList.push(goblin1);
goblinNPCList.push(goblin2);
goblinNPCList.push(goblin3);
goblinNPCList.push(goblin4);
goblinNPCList.push(goblin5);
goblinNPCList.push(goblin6);
goblinNPCList.push(goblin7);
goblinNPCList.push(goblin8);
goblinNPCList.push(goblin9);
goblinNPCList.push(goblin10);
goblinNPCList.push(goblin11);
goblinNPCList.push(goblin12);
goblinNPCList.push(goblin13);
goblinNPCList.push(goblin14);
goblinNPCList.push(goblin15);
goblinNPCList.push(goblin16);
goblinNPCList.push(goblin17);
goblinNPCList.push(goblin18);
goblinNPCList.push(goblin19);
goblinNPCList.push(goblin20);
goblinNPCList.push(goblin21);


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
            objectGrid[parentThis.y / 50][parentThis.x / 50] = 0;
            var goldDrop = new goldDropGoblin(parentThis.x, parentThis.y);
            goldList.push(goldDrop);
            objectGrid[parentThis.y / 50][parentThis.x / 50] = goldDrop;
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

function drawGoblin(focusObject,whitespaceX,whitespaceY){
    ctx.drawImage(focusObject.goblinImage,whitespaceX*(canvas.width/20),whitespaceY*(canvas.height/10),canvas.width/20,canvas.height/10);
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
    if(checkMapTileCollisions(direction,goblinObject) == false && checkDoorCollisionsGoblin(direction,goblinObject) == false
        && checkTreeCollisionsGoblin(direction,goblinObject) == false)
    {
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
    } player1.health -= 10; //console.log(player1.health);

}



