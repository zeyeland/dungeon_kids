var socratesScroll = new bookObj("Gadfly Scroll","Socrates",50,350,"assets/questItems/blank_paper.png");

var obamaBook = new bookObj("Book of Barock","Obama",50,300,"assets/questItems/red_old.png");

var trumpBook = new bookObj("Book of Donald","Trump",50,250,"assets/questItems/gold.png");

var songsBook = new bookObj("Book of Songs","Songs",50,200,"assets/questItems/magenta_old.png");

function bookObj(bookName, bookOwner, booky, bookx, bookSrc){
    this.name = bookName
    this.y = booky;
    this.x = bookx;
    this.bookImage = new Image();
    this.bookImage.src = bookSrc;
    this.itemPickedUp = false;
    this.bookOwner = bookOwner;

    this.update = function(){
        if(player1.x == this.x && player1.y == this.y && this.itemPickedUp == false){
            this.itemPickedUp = true;
            player1.inventory.push(this);
            console.log(this.name + " added to player innetory");
            var theBookOwner = getBookOwner(this.bookOwner);
            theBookOwner.questCounter++;
        }
    }

}

function drawBook(objectFocus,whitespaceX,whitespaceY){
    ctx.drawImage(objectFocus.bookImage,whitespaceX*50,whitespaceY*50,50,50);
}

function getBookOwner(ownerOfBook){
    if(ownerOfBook == "Socrates"){
        return socrates;
    }
    if(ownerOfBook == "Obama"){
        return obama;
    }
    if(ownerOfBook == "Trump"){
        return trump;
    }
    if(ownerOfBook == "Songs"){
        return songs;
    }
}