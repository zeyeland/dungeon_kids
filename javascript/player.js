//playerComponnet
function playerComponnet(){
    this.health;
    this.x = 450; //starting position;
    this.spdX = 50; // player speed
    this.y = 750; // starting position
    this.spdY= 50;  // player speed
    this.playerImage = new Image(); //player img with src
    this.playerImage.src = "assets/player_Sprites/playerChill-Right.png";
    //
    this.inventory = [];
    this.questList = [];
    ///
    this.talk2NPC = false
    //
    /*player looking directions for sprites*/
    this.lookLeft = true;
    this.lookRight = false;

    this.update = function(){
        var parentThis = this;
        checkHealth();
        document.onkeydown = function(e) { //detects movement with keys strokes
            switch (e.keyCode) {
                case 65:
                if(parentThis.lookLeft == true){
                    if(checkMapTileCollisions("left") == false){
                        parentThis.playerImage.src = "assets/player_Sprites/playerRun-Left.png";
                        parentThis.x -= parentThis.spdX;
                        //console.log("player left");
                    }
                }
                else{
                    parentThis.playerImage.src = "assets/player_Sprites/playerChill-Left.png";
                    parentThis.lookLeft = true;
                    parentThis.lookRight = false;
                }
                    break;
                case 87:
                if(checkMapTileCollisions("above") == false){
                    parentThis.y -= parentThis.spdY;
                    //console.log("player up");
                }
                    break;
                case 68:
                if(parentThis.lookRight == true){
                    if(checkMapTileCollisions("right") == false){
                        parentThis.playerImage.src = "assets/player_Sprites/playerRun-Right.png";
                        parentThis.x += parentThis.spdX;
                        //console.log("player right");
                       
                    }
                }
                else{
                    parentThis.playerImage.src = "assets/player_Sprites/playerChill-Right.png";
                    parentThis.lookRight = true;
                    parentThis.lookLeft = false;
                }
                    break;
                case 83:
                if(checkMapTileCollisions("below") == false){
                    parentThis.y += parentThis.spdY;
                    //console.log("player down");
                    
                }
                    break;
                case 69:
                    player1.talk2NPC = true;
                    break;
            }//end of switch
        };   //end of document on keydown function 
        document.onkeyup = function(e){ //detects key up after movement
             switch (e.keyCode) {
                case 65:
                    parentThis.playerImage.src = "assets/player_Sprites/playerChill-Left.png";
                    
                    break;
                case 87:
                
                
                    break;
                case 68:
                    parentThis.playerImage.src = "assets/player_Sprites/playerChill-Right.png";
                
                    break;
                case 83:
                
                
                    break;
                case 69:
                    player1.talk2NPC = false;
                break;
            }//end of key up switch
        }//end of keyup function
        canvas.onmousedown = function(e){ 
            // have to calculate and process coordniates becasue character sprite 
            //is not centered in its origin
            var clickX = event.clientX;
            var clickY = event.clientY;
                if(clickY < canvas.height/2 && clickX > canvas.width/2 && clickX < canvas.width/2 + 50 ){
                    parentThis.playerImage.src = "assets/player_Sprites/attacking/attack-Sword-Up.png"; 
                    playerAttack("UP",parentThis);
                    console.log("attack up");
                }
                if(clickY > canvas.height/2 && clickX > canvas.width/2 && clickX < canvas.width/2 + 50 ){
                    parentThis.playerImage.src = "assets/player_Sprites/attacking/attack-Sword-Down.png";
                    playerAttack("DOWN",parentThis);
                    console.log("attack down");
                }
                if(clickX < canvas.width/2 && clickY > canvas.height/2 && clickY < canvas.height/2 + 50 ){
                    parentThis.playerImage.src = "assets/player_Sprites/attacking/attack-Sword-Left.png";
                    //console.log("attack left");
                }
                if(clickX > canvas.width/2 && clickY > canvas.height/2 && clickY < canvas.height/2 + 50 ){
                    parentThis.playerImage.src = "assets/player_Sprites/attacking/attack-Sword-Right.png";
                    //console.log("attack right");
                }
        }//end of moue click down

        
        canvas.onmouseup = function(e){ //change image back to normal on mouse click up
            parentThis.playerImage.src = "assets/player_Sprites/playerChill-Left.png";
            
        }
    ////////////////////////end of movement functions      
        drawPlayer();
    }//end of update function

    this.getPosition = function(){
        console.log(this.x + " .. " + this.y);
    }
} // end of playerComponnet

function drawPlayer(){
    ctx.drawImage(player1.playerImage,canvas.width/2,canvas.height/2,50,50);
}

function checkHealth(){
    if(player1.health <= 0){
        player1.x = 450;
        player1.y = 750;
        player1.health = 100;
    }
}

function playerAttack(direction,objectFocus){
    if(direction == "UP"){
        if(objectGrid[objectFocus.y/50-1][objectFocus.x/50] == goblin1 ){
            objectGrid[objectFocus.y/50-1][objectFocus.x/50].health = objectGrid[objectFocus.y/50-1][objectFocus.x/50].health - 25;
            console.log("hit UP was a success");
            console.log(objectGrid[objectFocus.y/50-1][objectFocus.x/50].health);
        }
    }
    if(direction == "DOWN"){
        if(objectGrid[objectFocus.y/50+1][objectFocus.x/50] == goblin1 ){
            objectGrid[objectFocus.y/50+1][objectFocus.x/50].health = objectGrid[objectFocus.y/50+1][objectFocus.x/50].health - 25;
            console.log("hit DOWN was a success");
            console.log(objectGrid[objectFocus.y/50+1][objectFocus.x/50].health);
        }
    }  
 }