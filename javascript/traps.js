var spearPlate1 = new pressurePlateSpear(2100,1300);
var spearPlate2 = new pressurePlateSpear(2300,1300);
var spearPlate3 = new pressurePlateSpear(2500,1300);
var spearPlateList = [];
spearPlateList.push(spearPlate1);
spearPlateList.push(spearPlate2);
spearPlateList.push(spearPlate3);

function pressurePlateSpear(x,y){
    this.x = x; //2100 or 42
    this.y = y; //1300 or 26
    this.plateImage = new Image(); //player img with src
    this.plateImage.src = "assets/traps/trap_spear.png";
    this.plateTimer = 0;

    objectGrid[this.y/50][this.x/50] = this;

    this.update = function(){
        var parentThis = this;
        if(parentThis.plateTimer > 50){
            var newArrow = new plateArrows(parentThis.x,parentThis.y);
            arrowsList.push(newArrow);
            parentThis.plateTimer = 0;
        }
        
        parentThis.plateTimer++;
    }
    
}


var arrowsList = [];
function plateArrows(x,y){
    this.x = x; //2100 or 42
    this.y = (y - 50); //1300 or 26 ---- 1250 or 25
    this.arrowImage = new Image(); //player img with src
    this.arrowImage.src = "assets/traps/arrow_0.png";
    this.arrowTimer = 0;
    this.steps = 0;

    objectGrid[this.y/50][this.x/50] = this;

    

    this.update = function(){
        var parentThis = this;
        
        if(parentThis.arrowTimer > 20){
            objectGrid[parentThis.y/50][parentThis.x/50] = 0;
            objectGrid[parentThis.y/50 - 1][parentThis.x/50] = parentThis;
            parentThis.y -= 50;
            parentThis.steps++;
            parentThis.arrowTimer = 0;
        }
        if(parentThis.steps > 5){
            objectGrid[parentThis.y/50][parentThis.x/50] = 0;
        }
        if(parentThis.x == player1.x && parentThis.y == player1.y){
            player1.health = 0;
        }
        
        parentThis.arrowTimer++;
    }
}



var zot1 = new zotSpawner(2200,1100,2250,1000,2150,1250);
var zot2 = new zotSpawner(2400,1200,2350,1000,2250,1250);
var zot3 = new zotSpawner(1500,750,1000,800,1000,900);
var zot4 = new zotSpawner(1600,750,1600,850,1950,600);
var zotList = [];
zotList.push(zot1);
zotList.push(zot2);
zotList.push(zot3);
zotList.push(zot4);
function zotSpawner(x,y,x2,y2,x3,y3){
    this.x = x;
    this.y = y;
    this.zotImage = new Image(); //player img with src
    this.zotImage.src = "assets/traps/zot.png";
    this.zotTimer = 0;
    objectGrid[this.y/50][this.x/50] = this;

    this.update = function(){
        parentThis = this;
        if(parentThis.x == player1.x && parentThis.y == player1.y){
            var newGoblin1 = new smallGoblinComponnet("Zot Goblin",x2,y2,"assets/enemy_sprites/hobgoblin_new.png");
            var newGoblin2 = new smallGoblinComponnet("Zot Goblin",x3,y3,"assets/enemy_sprites/hobgoblin_new.png");
            goblinNPCList.push(newGoblin1);
            goblinNPCList.push(newGoblin2);
        }
    }
}

var movingStone1 = new movingStone(3500,350);
var movingStone2 = new movingStone(2950,750);
var movingStone3 = new movingStone(2700,500);
var movingStone4 = new movingStone(2250,800);
var movingStone5 = new movingStone(2300,100);
var movingStone6 = new movingStone(1100,850);
var movingStone7 = new movingStone(200,150);
var stoneList = [];
stoneList.push(movingStone1);
stoneList.push(movingStone2);
stoneList.push(movingStone3);
stoneList.push(movingStone4);
stoneList.push(movingStone5);
stoneList.push(movingStone6);
stoneList.push(movingStone7);

function movingStone(x,y){
    this.x = x;
    this.y = y;
    this.stoneImage = new Image(); //player img with src
    this.stoneImage.src = "assets/setting_objects/movingStone.png";
    this.stoneTimer = 0;
    objectGrid[this.y/50][this.x/50] = this;

    this.update = function(){
        var parentThis = this;
        if(mapGrid[parentThis.y/50][parentThis.x/50] == 8){
            mapGrid[parentThis.y/50][parentThis.x/50] = 3;
            objectGrid[this.y/50][this.x/50] = 0;
        }
    }
}


function drawPlate(objectFocus,whitespaceX,whitespaceY){
    ctx.drawImage(objectFocus.plateImage,whitespaceX*50,whitespaceY*50,50,50);
}

function drawArrow(objectFocus,whitespaceX,whitespaceY){
    //console.log(objectFocus);
    if(objectFocus != 0){
        ctx.drawImage(objectFocus.arrowImage,whitespaceX*50,whitespaceY*50,50,50);
    }
    
}

function drawZot(objectFocus,whitespaceX,whitespaceY){
    ctx.drawImage(objectFocus.zotImage,whitespaceX*50,whitespaceY*50,50,50);
}

function drawStone(objectFocus,whitespaceX,whitespaceY){
    if(objectFocus != 0){
        ctx.drawImage(objectFocus.stoneImage,whitespaceX*50,whitespaceY*50,50,50);
    }
}
