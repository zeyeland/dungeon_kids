


function checkMapTileCollisions(direction, focusObject){

  var checkWall = checkWallCollisions(direction, focusObject);
  var checkLava = checkLavaCollisions(direction, focusObject);
  var checkGoblin = checkGoblinCollisions(direction, focusObject);
  var checkGadfly = checkGadflyCollisions(direction, focusObject);

  if(checkWall == true || checkLava == true || checkGoblin == true || checkGadfly == true ){
    return true
  }
  else return false;
}

function checkLavaCollisions(direction,focusObject){

  if(direction == "ABOVE" && mapGrid[focusObject.y/50-1][focusObject.x/50] == 8){
    focusObject.health = 0;
    return true;
  }
  if(direction == "BELOW" && mapGrid[focusObject.y/50+1][focusObject.x/50] == 8){
    focusObject.health = 0;
    return true;
  }
  if(direction == "LEFT" && mapGrid[focusObject.y/50][focusObject.x/50-1] == 8){
    focusObject.health = 0;
    return true;
  }
  if(direction == "RIGHT" && mapGrid[focusObject.y/50][focusObject.x/50+1] == 8){
    focusObject.health = 0;
    return true;
  }
  return false;
}

function checkWallCollisions(direction,focusObject){
 
  if(direction == "ABOVE" && mapGrid[focusObject.y/50-1][focusObject.x/50] == 9){
    return true;
  }
  if(direction == "BELOW" && mapGrid[focusObject.y/50+1][focusObject.x/50] == 9){
    return true;
  }
  if(direction == "LEFT" && mapGrid[focusObject.y/50][focusObject.x/50-1] == 9){
    return true;
  }
  if(direction == "RIGHT" && mapGrid[focusObject.y/50][focusObject.x/50+1] == 9){
    return true;
  }
  
  return false;
  

}

function checkGoblinCollisions(direction,focusObject){
 
  if(direction == "ABOVE" && goblinNPCList.includes(objectGrid[focusObject.y/50-1][focusObject.x/50])  ){
    return true;
  }
  if(direction == "BELOW" && goblinNPCList.includes(objectGrid[focusObject.y/50+1][focusObject.x/50]) ){
    return true;
  }
  if(direction == "LEFT" && goblinNPCList.includes(objectGrid[focusObject.y/50][focusObject.x/50-1]) ){
    return true;
  }
  if(direction == "RIGHT" && goblinNPCList.includes(objectGrid[focusObject.y/50][focusObject.x/50+1]) ){
    return true;
  }
  
  return false;

}

function checkGadflyCollisions(direction,focusObject){
  
  if(direction == "ABOVE" && gadflyNPCList.includes(objectGrid[focusObject.y/50-1][focusObject.x/50])  ){
    return true;
  }
  if(direction == "BELOW" && gadflyNPCList.includes(objectGrid[focusObject.y/50+1][focusObject.x/50]) ){
    return true;
  }
  if(direction == "LEFT" && gadflyNPCList.includes(objectGrid[focusObject.y/50][focusObject.x/50-1]) ){
    return true;
  }
  if(direction == "RIGHT" && gadflyNPCList.includes(objectGrid[focusObject.y/50][focusObject.x/50+1]) ){
    return true;
  }
  
  return false;

}