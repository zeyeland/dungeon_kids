var socratesScroll = new bookObj("Gadfly Scroll","Socrates",50,350,"assets/questItems/blank_paper.png");

var obamaBook = new bookObj("Book of Change","Obama",1600,3900,"assets/questItems/red_old.png");

//var trumpBook = new bookObj("Book of Donald","Trump",50,250,"assets/questItems/gold.png");

var cleaverBook = new bookObj("Book of Kathleen Cleaver","Kathleen Cleaver",1650,3200,"assets/questItems/magenta_old.png");

var oprahBook = new bookObj("Book of Influence","Oprah",1000,200,"assets/questItems/light_blue_old.png");

var redTailBook = new bookObj("Book of Worth","Prince",400,2600,"assets/questItems/glittering.png");

var hueyNewtonBook = new bookObj("Book of Scholarship","Huey Newton",1250,450,"assets/questItems/plaid_old.png");

var tubmanBook = new bookObj("Book of Harriet Tubman","Harriet Tubman",600,3100,"assets/questItems/bookmark_new.png");

var pastorBook = new bookObj("Book of Pastor","The Pastor",1900,1200,"assets/questItems/thick_old.png");

var andersonBook = new bookObj("Book of Marian Anderson","Marian Anderson",1500,550,"assets/questItems/gold.png");

var garveyBook = new bookObj("Book of Marcus Garvey","Marcus Garvey",900,2050,"assets/questItems/buckle_old.png");

var rogersBook = new bookObj("Book of Joel Rogers","Joel Rogers",200,150,"assets/questItems/copper.png");

var bookList = [];
bookList.push(socratesScroll);
bookList.push(obamaBook);
//bookList.push(trumpBook);
bookList.push(cleaverBook);
bookList.push(oprahBook);
bookList.push(redTailBook);
bookList.push(hueyNewtonBook);
bookList.push(tubmanBook);
bookList.push(pastorBook);
bookList.push(andersonBook);
bookList.push(garveyBook);
bookList.push(rogersBook);

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
            player1.score += 20;
        }
    }

}
////f
function drawBook(objectFocus,whitespaceX,whitespaceY){
    ctx.drawImage(objectFocus.bookImage,whitespaceX*(canvas.width/20),whitespaceY*(canvas.height/10),canvas.width/20,canvas.height/10);
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
    if(ownerOfBook == "Kathleen Cleaver"){
        return kathleenCleaver;
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
    if(ownerOfBook == "Harriet Tubman"){
        return harrietTubman;
    }
    if(ownerOfBook == "The Pastor"){
        return pastor;
    }
    if(ownerOfBook == "Marian Anderson"){
        return marianAnderson;
    }
    if(ownerOfBook == "Marcus Garvey"){
        return marcusGarvey;
    }
    if(ownerOfBook == "Joel Rogers"){
        return joelRogers;
    }
}

