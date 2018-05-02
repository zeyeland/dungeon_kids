var goldList = [];

function goldDropGoblin(x,y){
    this.x = x; //starting position;
    this.y = y; // starting position
    this.moneyImage = new Image(); //player img with src
    this.moneyImage.src = "assets/items/gold_pile_8.png";
    this.value = 8;
    this.itemPickedUp = false;

    this.update = function(){
        if(player1.x == this.x && player1.y == this.y){
            this.itemPickedUp = true;
            player1.gold += this.value;
            console.log(player1.gold);
        }
    }
}

function drawGold(focusObject,whitespaceX,whitespaceY){
    ctx.drawImage(focusObject.moneyImage,whitespaceX*(canvas.width/20),whitespaceY*(canvas.height/10),canvas.width/20,canvas.height/10);
}