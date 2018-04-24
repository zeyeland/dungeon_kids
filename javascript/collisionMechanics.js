


function checkMapTileCollisions(direction){
  var checkWall = checkWallCollisions(direction);
  var checkLava = checkLavaCollisions(direction);
  var checkGoblin = checkGoblinCollisions(direction);
  var checkGadfly = checkGadflyCollisions(direction);

  if(checkLava == true || checkWall == true || checkGoblin == true || checkGadfly == true){
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
  

}

function checkGoblinCollisions(direction){
 
  if(direction == "above" && goblinNPCList.includes(objectGrid[player1.y/50-1][player1.x/50])  ){
    return true;
  }
  if(direction == "below" && goblinNPCList.includes(objectGrid[player1.y/50+1][player1.x/50]) ){
    return true;
  }
  if(direction == "left" && goblinNPCList.includes(objectGrid[player1.y/50][player1.x/50-1]) ){
    return true;
  }
  if(direction == "right" && goblinNPCList.includes(objectGrid[player1.y/50][player1.x/50+1]) ){
    return true;
  }
  
  return false;

}

function checkGadflyCollisions(direction){
  
  if(direction == "above" && gadflyNPCList.includes(objectGrid[player1.y/50-1][player1.x/50])  ){
    return true;
  }
  if(direction == "below" && gadflyNPCList.includes(objectGrid[player1.y/50+1][player1.x/50]) ){
    return true;
  }
  if(direction == "left" && gadflyNPCList.includes(objectGrid[player1.y/50][player1.x/50-1]) ){
    return true;
  }
  if(direction == "right" && gadflyNPCList.includes(objectGrid[player1.y/50][player1.x/50+1]) ){
    return true;
  }
  
  return false;

}