var socrates = new socratesNPC();
var obama = new obamaNPC();
var trump = new trumpNPC();
var kathleenCleaver = new cleaverNPC();
var oprah = new oprahNPC();
var airmenRedTail = new redTailNPC();
var hueyNewton = new hueyNewtonNPC();
var harrietTubman = new tubmanNPC();
var pastor = new pasterNPC();
var marianAnderson = new andersonNPC();
var marcusGarvey = new garveyNPC();
var joelRogers = new rogersNPC();
var statueThe = new statueNPC();



var gadflyNPCList = [];
gadflyNPCList.push(socrates);
gadflyNPCList.push(obama);
gadflyNPCList.push(trump);
gadflyNPCList.push(kathleenCleaver);
gadflyNPCList.push(oprah);
gadflyNPCList.push(airmenRedTail);
gadflyNPCList.push(hueyNewton);
gadflyNPCList.push(harrietTubman);
gadflyNPCList.push(pastor);
gadflyNPCList.push(marianAnderson);
gadflyNPCList.push(marcusGarvey);
gadflyNPCList.push(joelRogers);
gadflyNPCList.push(statueThe);

function socratesNPC(){
    this.name = "Socrates"
    this.y = 750;
    this.x = 100;
    this.npcImage = new Image()
    this.npcImage.src = "assets/gadfly_sprites/socrates.png";
    this.speak = ["Welcome, quick find a empty scroll and bring it to me. There should be a blank scroll located north from here.",
                  "Thanks, help me gather the scrolls of gadfly, the goblins have stolen our gadfly history.",
                  "Great work, only 2 more scrolls to collect.",
                  "1 more scroll lad.",
                  "Great work, you have collect all the scrolls of gadfly and saved the dungeon kids realm from goblins."];
    this.startedQuest = false;
    this.endedQuest = false;
    this.book = socratesScroll;
    this.itemPickedUp = false;
    this.questCounter = 0;
    this.endgame = false;
    this.endgameCount =0;

    objectGrid[this.y/50][this.x/50] = this;
    
    this.update = function(){
        var parentThis = this;
            // if the player E clicks the NPC
            if(player1.talk2NPC == true && playerInScopeOfGadfly(socrates) == true ){
                player1.talk2NPC = false;
                this.startedQuest = true;

                if(parentThis.endedQuest == false){
                    missionMessage.innerHTML = parentThis.speak[parentThis.questCounter];
                    nameGadfly.innerHTML = parentThis.name;
                    imageGadfly.src = parentThis.npcImage.src;
                }

                var prepareGameOver = checkPlayerWin();
                if (prepareGameOver == true){
                    parentThis.endgame = true;
                }
                //check to see if player has scrolls collected


            }// 
            if(this.startedQuest == true && this.book.itemPickedUp == false){
                //draw quest item
                objectGrid[this.book.y/50][this.book.x/50] = parentThis.book;
                
            }
            //if(this.book.itemPickedUp == true){
            //    objectGrid[this.book.y/50][this.book.x/50] = 0;
                //parentThis.questCounter++;
            //}
            if(parentThis.endgame == true){
                parentThis.endgameCount++
            }
            if(parentThis.endgameCount > 50){
                gameOver = true;
            }

            
        
        
    }
}

function obamaNPC(){
    this.name = "Obama"
    this.y = 50;
    this.x = 50;
    this.npcImage = new Image()
    this.npcImage.src = "assets/gadfly_sprites/obama.png";
    this.speak = ["Change will not come if we wait for soem other person or some other time. We are the ones we've been waiting for. We are the change that we seek. Its been tough since the Goblins have invaded but I promise that, I myself, my daughters, Michelle, the dog, and Bow are all safe. If you could retrive my biography near the trees, that would be of big help.",
                  "Thank you, the future rewards those who press on."  ];
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
            if(parentThis.endedQuest == false){

                missionMessage.innerHTML = parentThis.speak[parentThis.questCounter];
                nameGadfly.innerHTML = parentThis.name;
                imageGadfly.src = parentThis.npcImage.src;
            }
        }
        if(this.startedQuest == true && this.book.itemPickedUp == false){
            //draw quest item
            objectGrid[parentThis.book.y/50][parentThis.book.x/50] = parentThis.book;
            
        }
        
    }
}

function trumpNPC(){
    this.name = "Trump"
    this.y = 200;
    this.x = 350;
    this.npcImage = new Image()
    this.npcImage.src = "assets/gadfly_sprites/trump.png";
    this.speak = ["I cant find my way off this bloody island, perhabs I need more money. Bring me 24 gold coins and I will give you a special key.", 
                  "The key is near socrates.",
                  " "];
    this.startedQuest = false;
    this.endedQuest = false;
    this.key = trumpKey;
    this.itemPickedUp = false;
    this.questCounter = 0;
    this.part1 = true;

    objectGrid[this.y/50][this.x/50] = this;

    this.update = function(){
        var parentThis = this;
        if(player1.talk2NPC == true && playerInScopeOfGadfly(trump)  ){
            this.startedQuest = true;
            if(parentThis.endedQuest == false){
                missionMessage.innerHTML = parentThis.speak[parentThis.questCounter];
                nameGadfly.innerHTML = parentThis.name;
                imageGadfly.src = parentThis.npcImage.src;
            }
        }
        if(player1.talk2NPC == true && playerInScopeOfGadfly(trump) && this.part1 ==true  && this.key.itemPickedUp == false && player1.gold >= 24){
            //draw quest item
            this.part1 = false;
            keyList.push(this.key);
            objectGrid[this.key.y/50][this.key.x/50] = parentThis.key;
            player1.gold -= 24;
            parentThis.questCounter ++; 
           
        }
        
    }
}

////change songs
function cleaverNPC(){
    this.name = "Kathleen Cleaver"
    this.y = 1750;
    this.x = 3350;
    this.npcImage = new Image()
    this.npcImage.src = "assets/gadfly_sprites/kathleenCleaver.png";
    this.speak = ["Your a superstar"];
    this.startedQuest = false;
    this.endedQuest = false;
    this.book = cleaverBook;
    this.itemPickedUp = false;
    this.questCounter = 0;

    objectGrid[this.y/50][this.x/50] = this;

    this.update = function(){
        var parentThis = this;
        if(player1.talk2NPC == true && playerInScopeOfGadfly(kathleenCleaver) == true ){
            this.startedQuest = true;
            if(parentThis.endedQuest == false){
                missionMessage.innerHTML = parentThis.speak[parentThis.questCounter];
                nameGadfly.innerHTML = parentThis.name;
                imageGadfly.src = parentThis.npcImage.src;
            }
        }
        if(this.startedQuest == true && this.book.itemPickedUp == false){
            //draw quest item
            objectGrid[this.book.y/50][this.book.x/50] = parentThis.book;
            
        }
        
    }
}

function oprahNPC(){
    this.name = "Oprah"
    this.y = 1350;
    this.x = 2100;
    this.npcImage = new Image()
    this.npcImage.src = "assets/gadfly_sprites/oprah.png";
    this.speak = ["The thing you fear most has no power. Your fear of it is what has the power. Facing the truth really will set you free. Could you please retrive my book for me. It is located behind a locked door. If you can convince trump, prehaps he will give you a key.",
                 "Great work!! Always remember that it doesn't matter where you come from. The ability to triumph begins with you -always."];
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
            if(parentThis.endedQuest == false){
                missionMessage.innerHTML = parentThis.speak[parentThis.questCounter];
                nameGadfly.innerHTML = parentThis.name;
                imageGadfly.src = parentThis.npcImage.src;
            }
        }
        if(this.startedQuest == true && this.book.itemPickedUp == false){
            //draw quest item
            objectGrid[this.book.y/50][this.book.x/50] = parentThis.book;
            
        }
        
    }  
}

function redTailNPC(){
    this.name = "Tuskegee Airmen"
    this.y = 350;
    this.x = 1950;
    this.npcImage = new Image()
    this.npcImage.src = "assets/gadfly_sprites/redTail.png";
    this.speak = ["The four elements: earth, air, water, and fire. Of these, I call your attention to two: air and fire. Though it is privilege to live in the air, you will die by fire. Give my regards to Der Fuhrer.",
                  "We weren't assigned. We were requested. Straighten up...fly right."];
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
            if(parentThis.endedQuest == false){
                missionMessage.innerHTML = parentThis.speak[parentThis.questCounter];
                nameGadfly.innerHTML = parentThis.name;
                imageGadfly.src = parentThis.npcImage.src;
            }
        }
        if(this.startedQuest == true && this.book.itemPickedUp == false){
            //draw quest item
            objectGrid[this.book.y/50][this.book.x/50] = parentThis.book;
            
        }
        
    }  
}

function hueyNewtonNPC(){
    this.name = "Huey Newton"
    this.y = 1850;
    this.x = 350;
    this.npcImage = new Image()
    this.npcImage.src = "assets/gadfly_sprites/hueyNewton.png";
    this.speak = ["The first book I ever really read was Plato's Republic, and then I had to go over that five times or something. I've dropped my book in the water. Im sure it has washed up near the shore.",
                  "There's no reason for the establishment to fear me. But it has every right to fear the people collectively - I am on with the people."];
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
            if(parentThis.endedQuest == false){
                missionMessage.innerHTML = parentThis.speak[parentThis.questCounter];
                nameGadfly.innerHTML = parentThis.name;
                imageGadfly.src = parentThis.npcImage.src;
            }
        }
        if(this.startedQuest == true && this.book.itemPickedUp == false){
            //draw quest item
            objectGrid[this.book.y/50][this.book.x/50] = parentThis.book;
            
        }
       
    }  
}

function tubmanNPC(){
    this.name = "Harriet Tubman"
    this.y = 1250;
    this.x = 1000;
    this.npcImage = new Image()
    this.npcImage.src = "assets/gadfly_sprites/harrietTubman.png";
    this.speak = ["I looked at my hands to see if i was the same person. There was such a glory over everything. The sun came up like gold through the tress, and i felt like I was in heaven. A good book to read would be nice right now. Too bad I dropped my favorite book in the Goblin's den.",
                 "I was the conductor of the Underground Railroad for eight years, and I can say what most conductors can't say; I never ran my train off the track and I never lost a passenger."];
    this.startedQuest = false;
    this.endedQuest = false;
    this.book = tubmanBook;
    this.itemPickedUp = false;
    this.questCounter = 0;

    objectGrid[this.y/50][this.x/50] = this;

    this.update = function(){
        var parentThis = this;
        if(player1.talk2NPC == true && playerInScopeOfGadfly(harrietTubman) == true ){
            this.startedQuest = true;
            if(parentThis.endedQuest == false){
                missionMessage.innerHTML = parentThis.speak[parentThis.questCounter];
                nameGadfly.innerHTML = parentThis.name;
                imageGadfly.src = parentThis.npcImage.src;
            }
        }
        if(this.startedQuest == true && this.book.itemPickedUp == false){
            //draw quest item
            objectGrid[this.book.y/50][this.book.x/50] = parentThis.book;
            
        }
    
    }
}

function pasterNPC(){
    this.name = "The Pastor"
    this.x = 3150;
    this.y = 1550;
    this.npcImage = new Image()
    this.npcImage.src = "assets/gadfly_sprites/pastor.png";
    this.speak = ["Your a superstar"];
    this.startedQuest = false;
    this.endedQuest = false;
    this.book = pastorBook;
    this.itemPickedUp = false;
    this.questCounter = 0;

    objectGrid[this.y/50][this.x/50] = this;

    this.update = function(){
        var parentThis = this;
        if(player1.talk2NPC == true && playerInScopeOfGadfly(pastor) == true ){
            this.startedQuest = true;
            if(parentThis.endedQuest == false){
                missionMessage.innerHTML = parentThis.speak[parentThis.questCounter];
                nameGadfly.innerHTML = parentThis.name;
                imageGadfly.src = parentThis.npcImage.src;
            }
        }
        if(this.startedQuest == true && this.book.itemPickedUp == false){
            //draw quest item
            objectGrid[this.book.y/50][this.book.x/50] = parentThis.book;
            
        }
        
    }
}

function andersonNPC(){
    this.name = "Marian Anderson"
    this.y = 1500;
    this.x = 2950;
    this.npcImage = new Image()
    this.npcImage.src = "assets/gadfly_sprites/marianAnderson.png";
    this.speak = ["Its me Marian Anderson"];
    this.startedQuest = false;
    this.endedQuest = false;
    this.book = andersonBook;
    this.itemPickedUp = false;
    this.questCounter = 0;

    objectGrid[this.y/50][this.x/50] = this;

    this.update = function(){
        var parentThis = this;
        if(player1.talk2NPC == true && playerInScopeOfGadfly(marianAnderson) == true ){
            this.startedQuest = true;
            if(parentThis.endedQuest == false){
                missionMessage.innerHTML = parentThis.speak[parentThis.questCounter];
                nameGadfly.innerHTML = parentThis.name;
                imageGadfly.src = parentThis.npcImage.src;
            }
        }
        if(this.startedQuest == true && this.book.itemPickedUp == false){
            //draw quest item
            objectGrid[this.book.y/50][this.book.x/50] = parentThis.book;
            
        }
        
    }
}

function garveyNPC(){
    this.name = "Marcus Garvey"
    this.y = 900;
    this.x = 1850;
    this.npcImage = new Image()
    this.npcImage.src = "assets/gadfly_sprites/marcusGarvey.png";
    this.speak = ["A people without the knowledge of their past history, origin and culture is like a tree without roots. Would you please retrieve my book from the other side of this brick wall?",
                  "ethiopia shall once more arise from the ashes of material ruin to the heights of temporal glory."];
    this.startedQuest = false;
    this.endedQuest = false;
    this.book = garveyBook;
    this.itemPickedUp = false;
    this.questCounter = 0;

    objectGrid[this.y/50][this.x/50] = this;

    this.update = function(){
        var parentThis = this;
        if(player1.talk2NPC == true && playerInScopeOfGadfly(marcusGarvey) == true ){
            this.startedQuest = true;
            if(parentThis.endedQuest == false){
                missionMessage.innerHTML = parentThis.speak[parentThis.questCounter];
                nameGadfly.innerHTML = parentThis.name;
                imageGadfly.src = parentThis.npcImage.src;
            }
        }
        if(this.startedQuest == true && this.book.itemPickedUp == false){
            //draw quest item
            objectGrid[this.book.y/50][this.book.x/50] = parentThis.book;
            
        }
        
    }
}

function rogersNPC(){
    this.name = "Joel Rogers"
    this.y = 600;
    this.x = 850;
    this.npcImage = new Image()
    this.npcImage.src = "assets/gadfly_sprites/joelRogers.png";
    this.speak = ["The significance of African history is shown, though not overtly, in the very effort to deny anything worthy of the name of history to Africa and the African peoples. Retrieve my book and soak in the knowledge for oneself.",
                  "History was then written or rewritten to show or imply that Europeans were the only creators of what could be called a civilization. In order to accomplish this, the Europeans had to forget, or pretend to forget, all they previously knew about Africa."];
    this.startedQuest = false;
    this.endedQuest = false;
    this.book = rogersBook;
    this.itemPickedUp = false;
    this.questCounter = 0;

    objectGrid[this.y/50][this.x/50] = this;

    this.update = function(){
        var parentThis = this;
        if(player1.talk2NPC == true && playerInScopeOfGadfly(joelRogers) == true ){
            this.startedQuest = true;
            if(parentThis.endedQuest == false){
                missionMessage.innerHTML = parentThis.speak[parentThis.questCounter];
                nameGadfly.innerHTML = parentThis.name;
                imageGadfly.src = parentThis.npcImage.src;
            }
        }
        if(this.startedQuest == true && this.book.itemPickedUp == false){
            //draw quest item
            objectGrid[this.book.y/50][this.book.x/50] = parentThis.book;
            
        }
        
    }
}


function drawNPC(focusObject,whitespaceX,whitespaceY){
    ctx.drawImage(focusObject.npcImage,whitespaceX*(canvas.width/20),whitespaceY*(canvas.height/10),canvas.width/20,canvas.height/10);
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


function statueNPC(){
    this.name = "Higher One"
    this.x = 3750;
    this.y = 1200;
    this.npcImage = new Image()
    this.npcImage.src = "assets/game_objects/altar.png";
    this.speak = ["Prayer is Power"];
    this.startedQuest = false;
    this.endedQuest = false;
    
   // this.itemPickedUp = false;
    this.questCounter = 0;
    

    objectGrid[this.y/50][this.x/50] = this;

    this.update = function(){
        var parentThis = this;
        if(player1.talk2NPC == true && playerInScopeOfGadfly(statueThe) == true ){
            this.startedQuest = true;
            if(parentThis.endedQuest == false){
                missionMessage.innerHTML = parentThis.speak[parentThis.questCounter];
                nameGadfly.innerHTML = parentThis.name;
                imageGadfly.src = parentThis.npcImage.src;

                 goblin22.health = 0;
                 goblin23.health = 0;
                 goblin24.health = 0;
                 goblin25.health = 0;
                 goblin26.health = 0;
                 goblin27.health = 0; 
                 goblin28.health = 0;
                 goblin29.health = 0;
                 goblin30.health = 0;
                 goblin31.health = 0;
                 goblin32.health = 0;
                 goblin33.health = 0;
                 goblin34.health = 0;
            }
        }
        
    }
}
