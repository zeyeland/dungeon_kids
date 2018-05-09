
var scrollMind //=  new scrollObj("MIND",1850,3850,"assets/questItems/scroll-grey.png");
var scrollBody //= new scrollObj("BODY",50,3900,"assets/questItems/scroll-grey.png");
var scrollSpirit //= new scrollObj("SPIRIT",1250,3600,"assets/questItems/scroll-grey.png");

function scrollObj(bookName, booky, bookx, bookSrc, notes){
    this.name = bookName
    this.y = booky;
    this.x = bookx;
    this.bookImage = new Image();
    this.bookImage.src = bookSrc;
    this.itemPickedUp = false;
    this.bookOwner = socrates;
    this.notes = notes;

    objectGrid[this.y/50][this.x/50] = this;

    this.update = function(){
       var parentThis = this;
        if(player1.x == this.x && player1.y == this.y && this.itemPickedUp == false){
            this.itemPickedUp = true;
            player1.inventoryBooks.push(this);
            console.log(this.name + " added to player innetory");
            var theBookOwner = socrates;
            theBookOwner.questCounter++;
            player1.score += 30;

            missionMessage.innerHTML = parentThis.notes;
            nameGadfly.innerHTML = parentThis.name;
            imageGadfly.src = parentThis.bookImage.src;
        }
    }

}

//bookList.push(scrollMind);
//bookList.push(scrollBody);
//bookList.push(scrollSpirit);