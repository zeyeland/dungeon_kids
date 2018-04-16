function wallCollision(direction){

    var theMap = getMap()

    ////common checks for player angles


    if(direction == "left"){
            if(theMap[ (player1.y / 50) ][ (player1.x / 50) - 1] == 9){
                //console.log("wall is left");
                return true;
            }   
        
    }

    if(direction == "above"){
    
            if(theMap[ (player1.y / 50) - 1][ (player1.x / 50) ] == 9){
                //console.log("wall is above");
                return true;
            }
        
    }

    if(direction == "right"){
        
            if(theMap[ (player1.y / 50) ][ (player1.x / 50) + 1] == 9){
                //console.log("wall is right");
                return true;
            }
    }

    if(direction == "below"){
        
        if(theMap[ (player1.y / 50) + 1 ][ (player1.x / 50) ] == 9){
            //console.log("wall is below");
            return true;
        }
    }


    return false;

}

function checkCollisions(personObject){
    //wallCollision(direction);
    lavaCollision(personObject);
}

function lavaCollision(personObject){

    var theMap = getMap();

    if( theMap[ personObject.y / 50 ][ personObject.x / 50 ] == 8 ){
        console.log("Player touched the lava");
        personObject.health = 0;
    }

}