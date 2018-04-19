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
        //console.log( player1.inventory);
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