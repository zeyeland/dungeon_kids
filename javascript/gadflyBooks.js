var socratesScroll = new bookObj("Gadfly Scroll","Socrates",50,350,"assets/questItems/blank_paper.png");

var obamaBook = new bookObj("Book of Change","Obama",1600,3900,"assets/questItems/red_old.png");

var trumpBook = new bookObj("Book of Donald","Trump",50,250,"assets/questItems/gold.png");

var songsBook = new bookObj("Book of Songs","Songs",50,200,"assets/questItems/magenta_old.png");

var oprahBook = new bookObj("Book of Influence","Oprah",1000,200,"assets/questItems/light_blue_old.png");

var redTailBook = new bookObj("Book of Worth","Prince",400,2600,"assets/questItems/glittering.png");

var hueyNewtonBook = new bookObj("Book of Scholarship","Huey Newton",1250,450,"assets/questItems/plaid_old.png");

var bookList = [];
bookList.push(socratesScroll);
bookList.push(obamaBook);
bookList.push(trumpBook);
bookList.push(songsBook);
bookList.push(oprahBook);
bookList.push(redTailBook);
bookList.push(hueyNewtonBook);

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
            player1.inventoryBooks.push(this);
            console.log(this.name + " added to player innetory");
            var theBookOwner = getBookOwner(this.bookOwner);
            theBookOwner.questCounter++;
        }
    }

}
////f
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
    if(ownerOfBook == "Oprah"){
        return oprah;
    }
    if(ownerOfBook == "Prince"){
        return prince;
    }
    if(ownerOfBook == "Huey Newton"){
        return hueyNewton;
    }
}

