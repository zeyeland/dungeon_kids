//playerComponnet
function playerComponnet(){
    this.health =100;
    this.x = 450; //starting position;
    this.spdX = 50; // player speed
    this.y = 250; // starting position
    this.spdY= 50;  // player speed

    this.lookLeft = true;
    this.lookRight = false;
    this.grid = 3;

    this.playerImage = new Image(); //player img with src
    this.playerImage.src = "assets/player_Sprites/playerChill-Right.png";

    this.update = function(){
        var parentThis = this;
        checkCollisions(parentThis);
        checkHealth(parentThis);
        document.onkeydown = function(e) { //detects movement with keys strokes
            switch (e.keyCode) {
                case 65: //case for left
                if(parentThis.lookLeft == true){
                changePlayerMap("left"); // this function is apart of map js, check the player position and changes map if needed
                if (wallCollision("left") == false ){
                    parentThis.playerImage.src = "assets/player_Sprites/playerRun-Left.png";
                    parentThis.x -= parentThis.spdX;
                 }
                }
                else{
                    parentThis.playerImage.src = "assets/player_Sprites/playerChill-Left.png";
                    parentThis.lookLeft = true;
                    parentThis.lookRight = false;
                }
                break;
                case 87: //case for above
                changePlayerMap("above");
                if (wallCollision("above") == false ){
                   parentThis.y -= parentThis.spdY;
                }
                
                break;
                case 68://case for right
                if(parentThis.lookRight == true){
                changePlayerMap("right");
                if(wallCollision("right") == false ){
                    parentThis.playerImage.src = "assets/player_Sprites/playerRun-Right.png";
                    parentThis.x += parentThis.spdX;
                }
                }
                else{
                    parentThis.playerImage.src = "assets/player_Sprites/playerChill-Right.png";
                    parentThis.lookRight = true;
                    parentThis.lookLeft = false;
                }
                break;
                case 83: //case for below
                changePlayerMap("below");
                if(wallCollision("below") == false){
                    parentThis.y += parentThis.spdY
                }
                break;
            }//end of switch
        }   //end of document on keydown function 
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
           }//end of key up switch
        }
        canvas.onmousedown = function(e){ 
            // have to calculate and process coordniates becasue character sprite 
            //is not centered in its origin
            var clickX = event.clientX;
            var clickY = event.clientY;
                if(clickY < parentThis.y && clickX > parentThis.x && clickX < parentThis.x + 50 ){
                    parentThis.playerImage.src = "assets/player_Sprites/attacking/attack-Sword-Up.png";
                }
                if(clickY > parentThis.y && clickX > parentThis.x && clickX < parentThis.x + 50 ){
                    parentThis.playerImage.src = "assets/player_Sprites/attacking/attack-Sword-Down.png";
                }
                if(clickX < parentThis.x && clickY > parentThis.y && clickY < parentThis.y + 50 ){
                    parentThis.playerImage.src = "assets/player_Sprites/attacking/attack-Sword-Left.png";
                }
                if(clickX > parentThis.x && clickY > parentThis.y && clickY < parentThis.y + 50 ){
                    parentThis.playerImage.src = "assets/player_Sprites/attacking/attack-Sword-Right.png";
                }
            }//end of moue click down

        canvas.onmouseup = function(e){ //change image back to normal on mouse click up
            parentThis.playerImage.src = "assets/player_Sprites/playerChill-Left.png";
        }//end of mouseUp function
        drawPlayer(parentThis);
    }//end of update function
}//end of playerComponnet function

function drawPlayer(personObject){
    ctx.drawImage(personObject.playerImage,personObject.x,personObject.y,50,50);
}

function checkHealth(personObject){
    if(personObject.health <= 0){
        console.log("You have died");
        playerDeath(personObject);
    }
}

function playerDeath(personObject){
    personObject.grid = 3;
    personObject.x = 450;
    personObject.y = 250;
    personObject.health = 100;
}




