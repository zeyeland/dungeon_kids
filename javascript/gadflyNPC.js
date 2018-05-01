var socrates = new socratesNPC();
var obama = new obamaNPC();
var trump = new trumpNPC();
var songs = new songsNPC();
var oprah = new oprahNPC();
var airmenRedTail = new redTailNPC();
var hueyNewton = new hueyNewtonNPC();

var gadflyNPCList = [];
gadflyNPCList.push(socrates);
gadflyNPCList.push(obama);
gadflyNPCList.push(trump);
gadflyNPCList.push(songs);
gadflyNPCList.push(oprah);
gadflyNPCList.push(airmenRedTail);
gadflyNPCList.push(hueyNewton);

function socratesNPC(){
    this.name = "Socrates"
    this.y = 750;
    this.x = 100;
    this.npcImage = new Image()
    this.npcImage.src = "assets/gadfly_sprites/socrates.png";
    this.speak = ["Welcome, help me gather the gadfly books the goblins have stolen."];
    this.startedQuest = false;
    this.endedQuest = false;
    this.book = socratesScroll;
    this.itemPickedUp = false;
    this.questCounter = 0;

    objectGrid[this.y/50][this.x/50] = this;
    
    this.update = function(){
        var parentThis = this;
            if(player1.talk2NPC == true && playerInScopeOfGadfly(socrates) == true ){
                player1.talk2NPC = false;
                this.startedQuest = true;
                if(parentThis.questCounter == 0){
                    console.log(parentThis.speak[0]);
                    player1.questList.push(parentThis);
                }

            }
            if(this.startedQuest == true && this.book.itemPickedUp == false){
                //draw quest item
                objectGrid[this.book.y/50][this.book.x/50] = parentThis.book;
                
            }
            if(this.book.itemPickedUp == true){
                objectGrid[this.book.y/50][this.book.x/50] = 0;
            }
        
        
        
    }
}

function obamaNPC(){
    this.name = "Obama"
    this.y = 50;
    this.x = 50;
    this.npcImage = new Image()
    this.npcImage.src = "assets/gadfly_sprites/obama.png";
    this.speak = ["Hello its me barock obama"];
    this.startedQuest = false;
    this.endedQuest = false;
    this.book = obamaBook;
    this.itemPickedUp = false;
    this.questCounter = 0;

    objectGrid[this.y/50][this.x/50] = this;

    this.update = function(){
        var parentThis = this;
        if(player1.talk2NPC == true && playerInScopeOfGadfly(obama) == true /*&& player1.inventory.includes(socratesScroll)*/ ){
            this.startedQuest = true;
            if(parentThis.questCounter == 0){
                console.log(parentThis.speak[0]);
                player1.questList.push(parentThis);
            }
        }
        if(this.startedQuest == true && this.book.itemPickedUp == false){
            //draw quest item
            objectGrid[parentThis.book.y/50][parentThis.book.x/50] = parentThis.book;
            
        }
        if(this.book.itemPickedUp == true){
            objectGrid[this.book.y/50][this.book.x/50] = 0;
        }
    }
}

function trumpNPC(){
    this.name = "Trump"
    this.y = 900;
    this.x = 300;
    this.npcImage = new Image()
    this.npcImage.src = "assets/gadfly_sprites/trump.png";
    this.speak = ["Lets get to it"];
    this.startedQuest = false;
    this.endedQuest = false;
    this.key = trumpKey;
    this.itemPickedUp = false;
    this.questCounter = 0;

    objectGrid[this.y/50][this.x/50] = this;

    this.update = function(){
        var parentThis = this;
        if(player1.talk2NPC == true && playerInScopeOfGadfly(trump)  ){
            this.startedQuest = true;
            if(parentThis.questCounter == 0){
                console.log(parentThis.speak[0]);
                    player1.questList.push(parentThis);
            }
        }
        if(this.startedQuest == true && this.key.itemPickedUp == false){
            //draw quest item
            keyList.push(this.key);
            objectGrid[this.key.y/50][this.key.x/50] = parentThis.key;
           
        }
        if(this.key.itemPickedUp == true){
            objectGrid[this.key.y/50][this.key.x/50] = 0;
        }
    }
}

////change songs
function songsNPC(){
    this.name = "Song"
    this.y = 900;
    this.x = 250;
    this.npcImage = new Image()
    this.npcImage.src = "assets/gadfly_sprites/songs.png";
    this.speak = ["Your a superstar"];
    this.startedQuest = false;
    this.endedQuest = false;
    this.book = songsBook;
    this.itemPickedUp = false;
    this.questCounter = 0;

    objectGrid[this.y/50][this.x/50] = this;

    this.update = function(){
        var parentThis = this;
        if(player1.talk2NPC == true && playerInScopeOfGadfly(songs) == true ){
            this.startedQuest = true;
            if(parentThis.questCounter == 0){
                console.log(parentThis.speak[0]);
                    player1.questList.push(parentThis);
            }
        }
        if(this.startedQuest == true && this.book.itemPickedUp == false){
            //draw quest item
            objectGrid[this.book.y/50][this.book.x/50] = parentThis.book;
            
        }
        if(this.book.itemPickedUp == true){
            objectGrid[this.book.y/50][this.book.x/50] = 0;
        }
    }
}

function oprahNPC(){
    this.name = "Oprah"
    this.y = 1350;
    this.x = 2100;
    this.npcImage = new Image()
    this.npcImage.src = "assets/gadfly_sprites/oprah.png";
    this.speak = ["you get a book, you get a book, everyone gets books"];
    this.startedQuest = false;
    this.endedQuest = false;
    this.book = oprahBook;
    this.itemPickedUp = false;
    this.questCounter = 0;

    objectGrid[this.y/50][this.x/50] = this;

    this.update = function(){
        var parentThis = this;
        if(player1.talk2NPC == true && playerInScopeOfGadfly(oprah) == true ){
            this.startedQuest = true;
            if(parentThis.questCounter == 0){
                console.log(parentThis.speak[0]);
                player1.questList.push(parentThis);
            }
        }
        if(this.startedQuest == true && this.book.itemPickedUp == false){
            //draw quest item
            objectGrid[this.book.y/50][this.book.x/50] = parentThis.book;
            
        }
        if(this.book.itemPickedUp == true){
            objectGrid[this.book.y/50][this.book.x/50] = 0;
        }
    }  
}

function redTailNPC(){
    this.name = "Tuskegee Airmen"
    this.y = 350;
    this.x = 1950;
    this.npcImage = new Image()
    this.npcImage.src = "assets/gadfly_sprites/prince.png";
    this.speak = ["Tuskegee Airmen"];
    this.startedQuest = false;
    this.endedQuest = false;
    this.book = redTailBook;
    this.itemPickedUp = false;
    this.questCounter = 0;

    objectGrid[this.y/50][this.x/50] = this;

    this.update = function(){
        var parentThis = this;
        if(player1.talk2NPC == true && playerInScopeOfGadfly(airmenRedTail) == true ){
            this.startedQuest = true;
            if(parentThis.questCounter == 0){
                console.log(parentThis.speak[0]);
                player1.questList.push(parentThis);
            }
        }
        if(this.startedQuest == true && this.book.itemPickedUp == false){
            //draw quest item
            objectGrid[this.book.y/50][this.book.x/50] = parentThis.book;
            
        }
        if(this.book.itemPickedUp == true){
            objectGrid[this.book.y/50][this.book.x/50] = 0;
        }
    }  
}

function hueyNewtonNPC(){
    this.name = "Huey Newton"
    this.y = 1850;
    this.x = 350;
    this.npcImage = new Image()
    this.npcImage.src = "assets/gadfly_sprites/hueyNewton.png";
    this.speak = ["i was a political activist"];
    this.startedQuest = false;
    this.endedQuest = false;
    this.book = hueyNewtonBook;
    this.itemPickedUp = false;
    this.questCounter = 0;

    objectGrid[this.y/50][this.x/50] = this;

    this.update = function(){
        var parentThis = this;
        if(player1.talk2NPC == true && playerInScopeOfGadfly(hueyNewton) == true ){
            console.log("hellow to the test of heuy newtonw");
            this.startedQuest = true;
            if(parentThis.questCounter == 0){
                console.log(parentThis.speak[0]);
                player1.questList.push(parentThis);
            }
        }
        if(this.startedQuest == true && this.book.itemPickedUp == false){
            //draw quest item
            objectGrid[this.book.y/50][this.book.x/50] = parentThis.book;
            
        }
        if(this.book.itemPickedUp == true){
            objectGrid[this.book.y/50][this.book.x/50] = 0;
        }
    }  
}

function drawNPC(focusObject,whiteSpaceX,whiteSpaceY){
    ctx.drawImage(focusObject.npcImage,whiteSpaceX*50,whiteSpaceY*50,50,50);
}

function playerInScopeOfGadfly(NpcObject){
   if(NpcObject.x == player1.x && ( NpcObject.y-50 == player1.y   ||  NpcObject.y+50 == player1.y  )  ){
       //console.log("player is in scoop");
       return true;
   }
   if(NpcObject.y == player1.y && ( NpcObject.x-50 == player1.x   ||  NpcObject.x+50 == player1.x  )  ){
    //console.log("player is in scoop");
    return true;
    }
    return false;

}

