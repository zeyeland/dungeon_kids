function loadNpcs(){

    dungeonKid1();
    goblinLV1();
    
}

function dungeonKid1(){
    this.name = "dungeon kid 1";
    this.grid = 3;
    this.locationY = 3*50;
    this.locationX = 2*50;
    this.friendlyImage = new Image();
    this.friendlyImage.src = "assets/npc_Sprites/halfling_new.png"
    
    canvas.onclick = function(e){
        console.log(event.clientY);
        console.log(event.clientX);
        if(event.clientY >= 150 && event.clientY <=200 && event.clientX >= 100 && event.clientX <=150 ){
            //console.log("testingonlci NPC");
            ctx2.font = "20px Arial";
            ctx2.fillText("Hello World",50,50);
        }
        
    }

    drawNPC(this);
}

function goblinLV1(){
    this.health = 100;
    this.name = "Goblin Lv1";
    this.grid = 3;
    this.locationY = 3*50;
    this.locationX = 10*50;
    this.friendlyImage = new Image();
    this.friendlyImage.src = "assets/npc_Sprites/hobgoblin_new.png"
    
    drawNPC(this);
}


function createFriendlyNpc(name,grid,locationY,locationX,src){
    this.name = name;
    this.grid = grid;
    this.locationY = locationY;
    this.locationX = locationX;
    this.friendlyImage = new Image();
    this.friendlyImage.src = src
    

    drawNPC(this);
}

function drawNPC(friendlyObject){
    ctx.drawImage(friendlyObject.friendlyImage,friendlyObject.locationX,friendlyObject.locationY,50,50);
}