


function checkMapTileCollisions(direction){
  var checkWall = checkWallCollisions(direction);
  var checkLava = checkLavaCollisions(direction);
  if(checkLava == true || checkWall == true){
    return true
  }
  else return false;
}

function checkLavaCollisions(direction){

  if(direction == "above" && mapGrid[player1.y/50-1][player1.x/50] == 8){
    player1.health = 0;
    return true;
  }
  if(direction == "below" && mapGrid[player1.y/50+1][player1.x/50] == 8){
    player1.health = 0;
    return true;
  }
  if(direction == "left" && mapGrid[player1.y/50][player1.x/50-1] == 8){
    player1.health = 0;
    return true;
  }
  if(direction == "right" && mapGrid[player1.y/50][player1.x/50+1] == 8){
    player1.health = 0;
    return true;
  }
  return false;
}




function checkWallCollisions(direction){
 
  if(direction == "above" && mapGrid[player1.y/50-1][player1.x/50] == 9){
    return true;
  }
  if(direction == "below" && mapGrid[player1.y/50+1][player1.x/50] == 9){
    return true;
  }
  if(direction == "left" && mapGrid[player1.y/50][player1.x/50-1] == 9){
    return true;
  }
  if(direction == "right" && mapGrid[player1.y/50][player1.x/50+1] == 9){
    return true;
  }
  
  return false;
  

}//end of drawing of map tiles