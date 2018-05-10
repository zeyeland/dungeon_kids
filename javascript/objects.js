var entranceDoor1 = new entranceDoor(3850,950,);
var entranceDoor2 = new entranceDoor(3550,500);
var entranceDoor3 = new entranceDoor(3700,500);
var entranceDoor4 = new entranceDoor(3900,1150);
var entranceDoor5 = new entranceDoor02(3200,1400);
var entranceDoor6 = new entranceDoor02(3050,1400);
var entranceDoor7 = new entranceDoor02(3700,1300);
var entranceDoorList = [];
entranceDoorList.push(entranceDoor1);
entranceDoorList.push(entranceDoor2);
entranceDoorList.push(entranceDoor3);
entranceDoorList.push(entranceDoor4);
entranceDoorList.push(entranceDoor5);
entranceDoorList.push(entranceDoor6);
entranceDoorList.push(entranceDoor7);

function entranceDoor(x,y){
    this.x = x;
    this.y = y;
    this.doorImage = new Image(); //player img with src
    this.doorImage.src = "assets/setting_objects/entrance.png";
    objectGrid[this.y/50][this.x/50] = this;
}

function entranceDoor02(x,y){
    this.x = x;
    this.y = y;
    this.doorImage = new Image(); //player img with src
    this.doorImage.src = "assets/setting_objects/bazaar_gone.png";
    objectGrid[this.y/50][this.x/50] = this;
}



var tree1 = new trees(800,1100);
var tree2 = new trees(1450,1000);
var tree3 = new trees(3100,1150);
var tree4 = new trees(2700,1350);
var tree5 = new trees(2050,1350);
var tree6 = new trees(2950,1550);
var tree7 = new trees(1150,1200);
var tree8 = new trees(1150,1000);
var tree9 = new trees(3550,1200);
var tree10 = new trees(3700,1200);
var tree11 = new trees(3300,1550);
var tree12 = new trees(3900,1650);
var tree13 = new trees(3350,1800);
var tree14 = new trees(2150,1350);
var tree15 = new trees(500,1000);
//
var tree16 = new trees(3700,1350);
var tree17 = new trees(3750,1350);
var tree18 = new trees(3800,1350);
//
var tree19 = new trees(3800,1600);
var tree20 = new trees(3850,1600);
var tree21 = new trees(3800,1650);
var tree22 = new trees(3900,1550);
//
var tree23 = new trees(3700,1500);
var tree24 = new trees(3350,1550);
var tree25 = new trees(3400,1550);
var tree26 = new trees(3450,1550);

var tree27 = new trees(3400,1500);
var tree28 = new trees(3450,1500);
var tree29 = new trees(3500,1500);
var tree30 = new trees(3600,1500);
var tree31 = new trees(3750,1500);
var tree32 = new trees(3800,1500);
var tree33 = new trees(3850,1500);
var tree34 = new trees(3900,1500);
var tree35 = new trees(3300,1500);

var treeList = [];
treeList.push(tree1);
treeList.push(tree2);
treeList.push(tree3);
treeList.push(tree4);
treeList.push(tree5);
treeList.push(tree6);
treeList.push(tree7);
treeList.push(tree8);
treeList.push(tree9);
treeList.push(tree10);
treeList.push(tree11);
treeList.push(tree12);
treeList.push(tree13);
treeList.push(tree14);
treeList.push(tree15);
treeList.push(tree16);
treeList.push(tree17);
treeList.push(tree18);
treeList.push(tree19);
treeList.push(tree20);
treeList.push(tree21);
treeList.push(tree22);
treeList.push(tree23);
treeList.push(tree24);
treeList.push(tree25);
treeList.push(tree26);
treeList.push(tree27);
treeList.push(tree28);
treeList.push(tree29);
treeList.push(tree30);
treeList.push(tree31);
treeList.push(tree32);
treeList.push(tree33);
treeList.push(tree34);
treeList.push(tree35);

function trees(x,y){
    this.health = 100;
    this.x = x;
    this.y = y;
    this.treeImage = new Image(); //player img with src
    this.treeImage.src = "assets/setting_objects/mangrove_3.png";
    objectGrid[this.y/50][this.x/50] = this; 

    this.update = function(){
        if(this.health <= 0){
            objectGrid[this.y/50][this.x/50] = 0; 
        }
    }
}

const key1 = new keys("Key 1",300,50,"Lock 1");
const trumpKey = new keys("Trump's Key",450,750,"Trump");
const key2 = new keys("Key 2",3850,1650,"Church");
var keyList = [];
keyList.push(key1);
keyList.push(key2);

function keys(name,x,y, keyOnwer){
    this.name = name;
    this.x = x;
    this.y = y;
    this.keyImage = new Image(); //player img with src
    this.keyImage.src = "assets/items/key.png";
    this.keyOnwner = keyOnwer;
    this.itemPickedUp = false;
    this.notes = "Used to open some door."

    objectGrid[this.y/50][this.x/50] = this; 

    this.update = function(){
        var parentThis = this;
        if(this.itemPickedUp == true){
            objectGrid[this.y/50][this.x/50] = 0; 
        }
        if(player1.x == this.x && player1.y == this.y && this.itemPickedUp == false){
            this.itemPickedUp = true;
            player1.inventoryKeys.push(this);
            console.log(this.name + " added to player innetory");
            if(getKeyOwner(parentThis.keyOnwner) != null){
                var theKeyOwner = getKeyOwner(parentThis.keyOnwner);
            theKeyOwner.questCounter++;
            }     
            missionMessage.innerHTML = parentThis.notes;
            nameGadfly.innerHTML = parentThis.name;
            imageGadfly.src = parentThis.keyImage.src;      
        }
       
    }

}

var trumpKeyDoor = new keyDoors(200,1200,trumpKey);
var keyDoor1 = new keyDoors(50,950, key1);
var keyDoor2 = new keyDoors(3150,1700, key2);
var keyDoorList = [];
keyDoorList.push(trumpKeyDoor);
keyDoorList.push(keyDoor1);
keyDoorList.push(keyDoor2);

function keyDoors(x,y,key){
    this.x = x;
    this.y = y;
    this.key = key;
    this.doorImage = new Image(); //player img with src
    this.doorImage.src = "assets/setting_objects/closed_door.png";
    this.locked = true;
    objectGrid[this.y/50][this.x/50] = this;

    this.update = function(){
        if ( player1.inventoryKeys.includes(this.key) == true && playerInScopeOfDoor(this) == true ){
            this.locked = false;
            this.doorImage.src = "assets/setting_objects/open_door.png";
        }
    }
}

function drawDoor(objectFocus,whitespaceX,whitespaceY){
    ctx.drawImage(objectFocus.doorImage,whitespaceX*(canvas.width/20),whitespaceY*(canvas.height/10),canvas.width/20,canvas.height/10);
}

function drawTree(objectFocus,whitespaceX,whitespaceY){
    if(objectFocus != 0)
    ctx.drawImage(objectFocus.treeImage,whitespaceX*(canvas.width/20),whitespaceY*(canvas.height/10),canvas.width/20,canvas.height/10);
}

function drawKey(objectFocus,whitespaceX,whitespaceY){
    if(objectFocus != 0)
    ctx.drawImage(objectFocus.keyImage,whitespaceX*(canvas.width/20),whitespaceY*(canvas.height/10),canvas.width/20,canvas.height/10);
}

function getKeyOwner(ownerOfKey){
    if(ownerOfKey == "Socrates"){
        return socrates;
    }
    if(ownerOfKey == "Obama"){
        return obama;
    }
    if(ownerOfKey == "Trump"){
        return trump;
    }
    if(ownerOfKey == "Songs"){
        return songs;
    }
    if(ownerOfKey == "Oprah"){
        return oprah;
    }
    if(ownerOfKey == "Prince"){
        return prince;
    }
    if(ownerOfKey == "Huey Newton"){
        return hueyNewton;
    }
    return null;
}

function playerInScopeOfDoor(doorObject){
    if(doorObject.x == player1.x && ( doorObject.y-50 == player1.y   ||  doorObject.y+50 == player1.y  )  ){
        //console.log("player is in scoop");
        return true;
    }
    if(doorObject.y == player1.y && ( doorObject.x-50 == player1.x   ||  doorObject.x+50 == player1.x  )  ){
     //console.log("player is in scoop");
     return true;
     }
     return false;
 
}

grate1Array = ["DOWN","DOWN"];
var grate1 = new waterGrates(650,1300,grate1Array);

grate2Array = ["RIGHT","RIGHT","RIGHT","RIGHT","RIGHT","RIGHT","RIGHT"
,"RIGHT","RIGHT","RIGHT","RIGHT","RIGHT","RIGHT","RIGHT","RIGHT"
,"RIGHT","DOWN"];
var grate2 = new waterGrates(400,1750,grate2Array);

grate3Array = ["LEFT","LEFT","LEFT","LEFT","LEFT","LEFT","LEFT","LEFT","LEFT","LEFT","LEFT","LEFT"];
var grate3 = new waterGrates(2100,1500,grate3Array);

grate4Array = ["DOWN","DOWN","DOWN","DOWN","DOWN","DOWN","DOWN","RIGHT","DOWN","RIGHT","RIGHT","RIGHT"
,"RIGHT","RIGHT","RIGHT","RIGHT","RIGHT","RIGHT","UP","UP","UP","UP"];
var grate4 = new waterGrates(350,1300,grate4Array);

var gratesList = [];
gratesList.push(grate1);
gratesList.push(grate2);
gratesList.push(grate3);
gratesList.push(grate4);

function waterGrates(x,y,grateArray){
    this.x = x;
    this.y = y;
    this.grateImage = new Image(); 
    this.grateImage.src = "assets/setting_objects/grate.png";
    objectGrid[this.y/50][this.x/50] = this;
    this.grateArray = grateArray;
    //this.movementHistory = [];
    this.count = 0;
    this.moveGrateTimer = 0;
    this.moveGrateReverseBoolean = false;

    this.update = function(){
        //console.log(this.moveGrateTimer);
        if(this.moveGrateTimer >= 15 && this.count < this.grateArray.length && this.moveGrateReverseBoolean == false){
            //console.log("direction");
            moveGrate(this,this.grateArray[this.count]);
            this.moveGrateTimer = 0;
            this.count++;
        }
        if(this.count >= this.grateArray.length && this.moveGrateReverseBoolean == false){
            this.moveGrateReverseBoolean = true;
            this.count--;
        }
        if(this.moveGrateTimer >= 15 && this.count >= 0 && this.moveGrateReverseBoolean == true){
            moveGrateReverse(this,this.grateArray[this.count]);
            this.moveGrateTimer = 0;
            this.count--;
        }
        if(this.count < 0 && this.moveGrateReverseBoolean == true){
            this.count=0;
            this.moveGrateReverseBoolean = false;
        }

        if(player1.moveWithGrate == this){
            player1.x = this.x;
            player1.y = this.y;
        }

        this.moveGrateTimer++;
    }
}

function drawGrate(objectFocus,whitespaceX,whitespaceY){
    if(objectFocus != 0)
    ctx.drawImage(objectFocus.grateImage,whitespaceX*(canvas.width/20),whitespaceY*(canvas.height/10),canvas.width/20,canvas.height/10);
}

function moveGrate(grateObject, direction){
    //console.log(direction);
        switch(direction) {
            case "RIGHT":
                objectGrid[grateObject.y / 50][grateObject.x / 50] = 0;
                objectGrid[grateObject.y / 50][grateObject.x / 50 + 1] = grateObject;
                grateObject.x += 50;
                //grateObject.movementHistory.push(direction);
                break;
            case"LEFT":
                objectGrid[grateObject.y / 50][grateObject.x / 50] = 0;
                objectGrid[grateObject.y / 50][grateObject.x / 50 - 1] = grateObject;
                grateObject.x -= 50;
                //grateObject.movementHistory.push(direction);
                break;
            case"UP":
                objectGrid[grateObject.y / 50][grateObject.x / 50] = 0;
                objectGrid[grateObject.y / 50 - 1][grateObject.x / 50] = grateObject;
                grateObject.y -= 50;
                //grateObject.movementHistory.push(direction);
                break;
            case"DOWN":
                objectGrid[grateObject.y / 50][grateObject.x / 50] = 0;
                objectGrid[grateObject.y / 50 + 1][grateObject.x / 50] = grateObject;
                grateObject.y += 50;
                //grateObject.movementHistory.push(direction);
                break; 
            }//end of switch   
}

function moveGrateReverse(grateObject, direction){
   // console.log(direction); // do the oppiste for each direction
        switch(direction) {
            case "RIGHT":
                objectGrid[grateObject.y / 50][grateObject.x / 50] = 0;
                objectGrid[grateObject.y / 50][grateObject.x / 50 - 1] = grateObject;
                grateObject.x -= 50;
                //grateObject.movementHistory.push(direction);
                break;
            case"LEFT":
                objectGrid[grateObject.y / 50][grateObject.x / 50] = 0;
                objectGrid[grateObject.y / 50][grateObject.x / 50 + 1] = grateObject;
                grateObject.x += 50;
                //grateObject.movementHistory.push(direction);
                break;
            case"UP":
                objectGrid[grateObject.y / 50][grateObject.x / 50] = 0;
                objectGrid[grateObject.y / 50 + 1][grateObject.x / 50] = grateObject;
                grateObject.y += 50;
                //grateObject.movementHistory.push(direction);
                break;
            case"DOWN":
                objectGrid[grateObject.y / 50][grateObject.x / 50] = 0;
                objectGrid[grateObject.y / 50 - 1][grateObject.x / 50] = grateObject;
                grateObject.y -= 50;
                //grateObject.movementHistory.push(direction);
                break; 
            }//end of switch   
}//end of if


    