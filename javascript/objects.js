var entranceDoor1 = new entranceDoor(3850,950,);
var entranceDoor2 = new entranceDoor(3550,500);
var entranceDoor3 = new entranceDoor(3700,500);
var entranceDoorList = [];
entranceDoorList.push(entranceDoor1);
entranceDoorList.push(entranceDoor2);
entranceDoorList.push(entranceDoor3);

function entranceDoor(x,y){
    this.x = x;
    this.y = y;
    this.doorImage = new Image(); //player img with src
    this.doorImage.src = "assets/setting_objects/entrance.png";
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
var tree10 = new trees(3750,1250);
var tree11 = new trees(3300,1550);
var tree12 = new trees(3900,1650);
var tree13 = new trees(3350,1800);
var tree14 = new trees(2150,1350);

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

function trees(x,y){
    this.x = x;
    this.y = y;
    this.treeImage = new Image(); //player img with src
    this.treeImage.src = "assets/setting_objects/mangrove_3.png";
    objectGrid[this.y/50][this.x/50] = this; 
}

const key1 = new keys("Key 1",300,50,"Lock 1");
const trumpKey = new keys("Trump's Key",450,750,"Trump");
var keyList = [];
keyList.push(key1);

function keys(name,x,y, keyOnwer){
    this.name = name;
    this.x = x;
    this.y = y;
    this.keyImage = new Image(); //player img with src
    this.keyImage.src = "assets/items/key.png";
    this.keyOnwner = keyOnwer;
    this.itemPickedUp = false;

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
        }
       
    }

}

var trumpKeyDoor = new keyDoors(200,1200,trumpKey);
var keyDoor1 = new keyDoors(50,950, key1);
var keyDoorList = [];
keyDoorList.push(trumpKeyDoor);
keyDoorList.push(keyDoor1);

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
    ctx.drawImage(objectFocus.doorImage,whitespaceX*50,whitespaceY*50,50,50);
}

function drawTree(objectFocus,whitespaceX,whitespaceY){
    if(objectFocus != 0)
    ctx.drawImage(objectFocus.treeImage,whitespaceX*50,whitespaceY*50,50,50);
}

function drawKey(objectFocus,whitespaceX,whitespaceY){
    if(objectFocus != 0)
    ctx.drawImage(objectFocus.keyImage,whitespaceX*50,whitespaceY*50,50,50);
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