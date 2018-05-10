var socratesScroll = new bookObjScroll("Gadfly Scroll","Socrates",50,350,"assets/questItems/blank_paper.png","You've collect the scroll container. Collect all three scrolls of gadfly (Mind, Body and Spirit) then return to Socrates to stop the goblins.");

var obamaBook = new bookObj("Book of Change","Obama",1600,3900,"assets/questItems/red_old.png","The first African American to assume the presidency (44th). Barack Obama was named the 2009 Nobel Peace Prize.");

//var trumpBook = new bookObj("Book of Donald","Trump",50,250,"assets/questItems/gold.png");

var cleaverBook = new bookObj("Book of Kathleen Cleaver","Kathleen Cleaver",1650,3200,"assets/questItems/magenta_old.png");

var oprahBook = new bookObj("Book of Influence","Oprah",1000,200,"assets/questItems/light_blue_old.png","Oprah Winfrey is well known for beign a philanthropist. She often donates much of her own money to many charities. There are Emmy Awards, NAACP Image Awards and People's Choice Awards prouldy displayed on her mantel.");

var redTailBook = new bookObj("Book of Honor","Tuskegee Airmen",400,2600,"assets/questItems/glittering.png","The Tuskegee Airmen is the popular name of a group of military pilots who fought in WW2. They were collectively awared a Congressional Gold Medal. In all 992 pilots completed 1578 combat missions, 179 bomber escorts and awared over 700 stars and medals combined.");

var hueyNewtonBook = new bookObj("Book of Scholarship","Huey Newton",1250,450,"assets/questItems/plaid_old.png","As a student Newton became involved in politics. As a memeber of the AAA, Huey played a role in getting the first African-American history course adopted as part of college's curriculum. Newton helped led the Black Panther Party (influenced by Malcolm X) which achieved national and international reown through their deep involment in the Black Power movement and with politics.");

var tubmanBook = new bookObj("Book of Cleaverness","Harriet Tubman",600,3100,"assets/questItems/bookmark_new.png", "The Underground Railroad was a network of secret routes and safe houses used by enslaved people in efforts to escape slave states . Harriet was one of the people who helped establish the Underground Railroad. Even though she was free she went back to go and free other slaves. She was an abolitionist who was selfless in what she did because she risked being tortured and even killed to help other people, an amazing act of freeing over 300 slaves.");

var pastorBook = new bookObj("Book of Pastor","The Pastor",1900,1200,"assets/questItems/thick_old.png");

var andersonBook = new bookObj("Book of Marian Anderson","Marian Anderson",1500,550,"assets/questItems/gold.png");

var garveyBook = new bookObj("Book of Movement","Marcus Garvey",900,2050,"assets/questItems/buckle_old.png","Marcus Garvey was a proponent of the Black Nationalism and Pan-Africanism movements, inspiring the Nation of Islam and the Rastafarian movement. Garvey also worked with Booker T. Washington, head of the Tuskegee institute and a AA leader.");

var rogersBook = new bookObj("Book of Joel Rogers","Joel Rogers",50,350,"assets/questItems/copper.png","Ethiopians, that is, Negroes, gave the world the first idea of right and wrong and thus laid the basis of religion and all true culture and civilization. Rogers devoted several pages of Sex and Race to the Black presence in early Japan. In the process, he cites the studies of a number of accomplished scholars and anthropologists, raising the question, Were the first Japanese Negroes?");

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

function bookObj(bookName, bookOwner, booky, bookx, bookSrc, notes){
    this.name = bookName
    this.y = booky;
    this.x = bookx;
    this.bookImage = new Image();
    this.bookImage.src = bookSrc;
    this.itemPickedUp = false;
    this.bookOwner = bookOwner;
    this.notes = notes;

    this.update = function(){
        parentThis = this;
        if(player1.x == this.x && player1.y == this.y && this.itemPickedUp == false){
            this.itemPickedUp = true;
            objectGrid[parentThis.y/50][parentThis.x/50] = 0;
            player1.inventoryBooks.push(this);
            console.log(this.name + " added to player innetory");
            var theBookOwner = getBookOwner(this.bookOwner);
            theBookOwner.questCounter++;
            player1.score += 20;

                    missionMessage.innerHTML = parentThis.notes;
                    nameGadfly.innerHTML = parentThis.name;
                    imageGadfly.src = parentThis.bookImage.src;
        }
    }
}

function bookObjScroll(bookName, bookOwner, booky, bookx, bookSrc, notes){
    this.name = bookName
    this.y = booky;
    this.x = bookx;
    this.bookImage = new Image();
    this.bookImage.src = bookSrc;
    this.itemPickedUp = false;
    this.bookOwner = bookOwner;
    this.notes = notes;

    this.update = function(){
        var parentThis = this;
        if(player1.x == this.x && player1.y == this.y && this.itemPickedUp == false){
            this.itemPickedUp = true;
            objectGrid[parentThis.y/50][parentThis.x/50] = 0;
            player1.inventoryBooks.push(this);
            console.log(this.name + " added to player innetory");
            var theBookOwner = getBookOwner(this.bookOwner);
            theBookOwner.questCounter++;
            player1.score += 20;
            
            missionMessage.innerHTML = parentThis.notes;
            nameGadfly.innerHTML = parentThis.name;
            imageGadfly.src = parentThis.bookImage.src;

             scrollMind =  new scrollObj("MIND",1850,3850,"assets/questItems/scroll-grey.png","The mind is a set of cognitive faculites including consciousness, perception, thinking, judgement, language, and memory. It holds the power of imagination, recognition, and appreciation, and is responsible for processing feelings and emotions. Typically humans are characterized as having both a mind (nonphysical) and body/brain (physical).  This is known as dualism.  Dualism is the view that the mind and body both exist as separate entities.");
             scrollBody = new scrollObj("BODY",50,3900,"assets/questItems/scroll-grey.png","The body is the structure of a human being. It is composed of mnay different types of cells that together create tissues and subsequently organ systems. Materialism is the idea that we are just a body. The body is able to do a lot of very complex things though. Through the processes of our brain we are all given the experience we call life. Materialism is saying that are brains contain and regulate the chemicals and energy that is often referred to as a soul.");
             scrollSpirit = new scrollObj("SPIRIT",1250,3600,"assets/questItems/scroll-grey.png","At the deepest level our spirit gives us meaning and purpose and our spirit enables us to love one another, our self and God. It is through our spirit that we have communion and fellowship with God.  Our spirit gives us intuition between right and wrong.");

            bookList.push(scrollMind);
            bookList.push(scrollBody);
            bookList.push(scrollSpirit);
        }
    }
}
////f
function drawBook(objectFocus,whitespaceX,whitespaceY){
    if(objectFocus != 0 && objectFocus != null){
        ctx.drawImage(objectFocus.bookImage,whitespaceX*(canvas.width/20),whitespaceY*(canvas.height/10),canvas.width/20,canvas.height/10);
    }
    
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
    if(ownerOfBook == "Tustegee Airemen"){
        return airmenRedTail;
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

