var spearPlate1 = new pressurePlateSpear(2100,1300);
var spearPlate2 = new pressurePlateSpear(2300,1300);
var spearPlate3 = new pressurePlateSpear(2500,1300);
var spearPlateList = [];
spearPlateList.push(spearPlate1);
spearPlateList.push(spearPlate2);
spearPlateList.push(spearPlate3);
var arrowsList = [];


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

function plateArrows(x,y){
    this.x = x; //2100 or 42
    this.y = (y - 50); //1300 or 26 ---- 1250 or 25
    this.arrowImage = new Image(); //player img with src
    this.arrowImage.src = "assets/traps/zot.png";
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
        
        parentThis.arrowTimer++;
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

