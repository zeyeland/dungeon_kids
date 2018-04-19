function socratesNPC(){
    this.name = "Socrates"
    this.y = 900;
    this.x = 400;
    this.npcImage = new Image()
    this.npcImage.src = "assets/gadfly_sprites/socrates.png";
    this.speak = ["Welcome, help me gather the gadfly books the goblins have stolen."];
    this.startedQuest = false;
    this.endedQuest = false;
    this.book = socratesScroll;
    this.itemPickedUp = false;
    this.questCounter = 0;
    
    this.update = function(){
        var parentThis = this;
            if(player1.talk2NPC == true && playerInScope(socrates) == true ){
                player1.talk2NPC = false;
                this.startedQuest = true;
                if(parentThis.questCounter == 0){
                    console.log(parentThis.speak[0]);
                }
            }
            if(this.startedQuest == true && this.book.itemPickedUp == false){
                //draw quest item
                objectGrid[this.book.y/50][this.book.x/50] = parentThis.book;
                player1.talk2NPC = false;
            }
            if(this.book.itemPickedUp == true){
                objectGrid[this.book.y/50][this.book.x/50] = 0;
            }
        
        
        
    }
}

function obamaNPC(){
    this.name = "Obama"
    this.y = 900;
    this.x = 350;
    this.npcImage = new Image()
    this.npcImage.src = "assets/gadfly_sprites/obama.png";
    this.speak = ["Hello its me barock obama"];
    this.startedQuest = false;
    this.endedQuest = false;
    this.book = obamaBook;
    this.itemPickedUp = false;
    this.questCounter = 0;

    this.update = function(){
        var parentThis = this;
        if(player1.talk2NPC == true && playerInScope(obama) == true && player1.inventory.includes(socratesScroll) ){
            this.startedQuest = true;
            if(parentThis.questCounter == 0){
                console.log(parentThis.speak[0]);
            }
        }
        if(this.startedQuest == true && this.book.itemPickedUp == false){
            //draw quest item
            objectGrid[this.book.y/50][this.book.x/50] = parentThis.book;
            player1.talk2NPC = false;
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
    this.book = trumpBook;
    this.itemPickedUp = false;
    this.questCounter = 0;

    this.update = function(){
        var parentThis = this;
        if(player1.talk2NPC == true && playerInScope(trump) == true && player1.inventory.includes(socratesScroll) ){
            this.startedQuest = true;
            if(parentThis.questCounter == 0){
                console.log(parentThis.speak[0]);
            }
        }
        if(this.startedQuest == true && this.book.itemPickedUp == false){
            //draw quest item
            objectGrid[this.book.y/50][this.book.x/50] = parentThis.book;
            player1.talk2NPC = false;
        }
        if(this.book.itemPickedUp == true){
            objectGrid[this.book.y/50][this.book.x/50] = 0;
        }
    }
}

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

    this.update = function(){
        var parentThis = this;
        if(player1.talk2NPC == true && playerInScope(songs) == true ){
            this.startedQuest = true;
            if(parentThis.questCounter == 0){
                console.log(parentThis.speak[0]);
            }
        }
        if(this.startedQuest == true && this.book.itemPickedUp == false){
            //draw quest item
            objectGrid[this.book.y/50][this.book.x/50] = parentThis.book;
            player1.talk2NPC = false;
        }
        if(this.book.itemPickedUp == true){
            objectGrid[this.book.y/50][this.book.x/50] = 0;
        }
    }
}

function drawNPC(focusObject,whiteSpaceX,whiteSpaceY){
    ctx.drawImage(focusObject.npcImage,whiteSpaceX*50,whiteSpaceY*50,50,50);
}

function playerInScope(NpcObject){
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

