


function checkMapTileCollisions(direction, focusObject){

  var checkWall = checkWallCollisions(direction, focusObject);
  var checkLava = checkLavaCollisions(direction, focusObject);
  var checkGoblin = checkGoblinCollisions(direction, focusObject);
  var checkGadfly = checkGadflyCollisions(direction, focusObject);
  var checkStone = checkMovingStoneCollisions(direction, focusObject);
  var checkKeyDoor = checkkeyDoorCollisions(direction, focusObject);
  var checkTree = checkTreeCollisionsGoblin(direction, focusObject);

  if(checkWall == true || checkLava == true || checkGoblin == true || 
    checkGadfly == true || checkStone == true || checkKeyDoor == true || checkTree == true)
  {
    return true
  }
  else return false;
}

function checkLavaCollisions(direction,focusObject){
  
  
  
  if(direction == "ABOVE" && mapGrid[focusObject.y/50-1][focusObject.x/50] == 8){
    focusObject.health = 0;
    return false;
  }
  if(direction == "BELOW" && mapGrid[focusObject.y/50+1][focusObject.x/50] == 8){
    focusObject.health = 0;
    return false;
  }
  if(direction == "LEFT" && mapGrid[focusObject.y/50][focusObject.x/50-1] == 8){

    focusObject.health = 0;
    return false;
  }
  if(direction == "RIGHT" && mapGrid[focusObject.y/50][focusObject.x/50+1] == 8){
    focusObject.health = 0;
    return false;
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

function checkMovingStoneCollisions(direction,focusObject){

  if(direction == "ABOVE" && stoneList.includes(objectGrid[focusObject.y/50-1][focusObject.x/50])  ){
    objectGrid[focusObject.y/50-1][focusObject.x/50].y -= 50;
    objectGrid[focusObject.y/50-2][focusObject.x/50] = objectGrid[focusObject.y/50-1][focusObject.x/50];
    objectGrid[focusObject.y/50-1][focusObject.x/50] = 0;
    return false;
  }
  if(direction == "BELOW" && stoneList.includes(objectGrid[focusObject.y/50+1][focusObject.x/50]) ){
    objectGrid[focusObject.y/50+1][focusObject.x/50].y += 50;
    objectGrid[focusObject.y/50+2][focusObject.x/50] = objectGrid[focusObject.y/50+1][focusObject.x/50]
    objectGrid[focusObject.y/50+1][focusObject.x/50] = 0;
    return false;
  }
  if(direction == "LEFT" && stoneList.includes(objectGrid[focusObject.y/50][focusObject.x/50-1]) ){
    objectGrid[focusObject.y/50][focusObject.x/50-1].x -= 50;
    objectGrid[focusObject.y/50][focusObject.x/50-2] = objectGrid[focusObject.y/50][focusObject.x/50-1]
    objectGrid[focusObject.y/50][focusObject.x/50-1] = 0;
    return false;
  }
  if(direction == "RIGHT" && stoneList.includes(objectGrid[focusObject.y/50][focusObject.x/50+1]) ){
    objectGrid[focusObject.y/50][focusObject.x/50+1].x += 50;
    objectGrid[focusObject.y/50][focusObject.x/50+2] = objectGrid[focusObject.y/50][focusObject.x/50+1];
    objectGrid[focusObject.y/50][focusObject.x/50+1] = 0;
    return false;
  }
  
  return false;
}

function checkDoorCollisionsGoblin(direction,focusObject){
  if(direction == "ABOVE" && entranceDoorList.includes(objectGrid[focusObject.y/50-1][focusObject.x/50])  ){
    return true;
  }
  if(direction == "BELOW" && entranceDoorList.includes(objectGrid[focusObject.y/50+1][focusObject.x/50]) ){
    return true;
  }
  if(direction == "LEFT" && entranceDoorList.includes(objectGrid[focusObject.y/50][focusObject.x/50-1]) ){
    return true;
  }
  if(direction == "RIGHT" && entranceDoorList.includes(objectGrid[focusObject.y/50][focusObject.x/50+1]) ){
    return true;
  }
  
  return false;
}

function checkTreeCollisionsGoblin(direction, focusObject){
  if(direction == "ABOVE" && treeList.includes(objectGrid[focusObject.y/50-1][focusObject.x/50])  ){
    return true;
  }
  if(direction == "BELOW" && treeList.includes(objectGrid[focusObject.y/50+1][focusObject.x/50]) ){
    return true;
  }
  if(direction == "LEFT" && treeList.includes(objectGrid[focusObject.y/50][focusObject.x/50-1]) ){
    return true;
  }
  if(direction == "RIGHT" && treeList.includes(objectGrid[focusObject.y/50][focusObject.x/50+1]) ){
    return true;
  }
  
  return false;
}

function checkkeyDoorCollisions(direction,focusObject){

    

    if(direction == "ABOVE" && keyDoorList.includes(objectGrid[focusObject.y/50-1][focusObject.x/50]) && 
      objectGrid[focusObject.y/50-1][focusObject.x/50].locked == true ){
      return true;
    }
    if(direction == "BELOW" && keyDoorList.includes(objectGrid[focusObject.y/50+1][focusObject.x/50]) && 
    objectGrid[focusObject.y/50+1][focusObject.x/50].locked == true ){
      return true;
    }
    if(direction == "LEFT" && keyDoorList.includes(objectGrid[focusObject.y/50][focusObject.x/50-1]) && 
    objectGrid[focusObject.y/50][focusObject.x/50-1].locked == true ){
      return true;
    }
    if(direction == "RIGHT" && keyDoorList.includes(objectGrid[focusObject.y/50][focusObject.x/50+1]) && 
    objectGrid[focusObject.y/50][focusObject.x/50+1].locked == true ){
      return true;
    }
  
  return false;
  

}


var waterTimer = 0; //this function is not a true collision so it shouldnt be checked before player is moved
function checkWaterCollisions(focusObject){
  
  waterTimer++;
  
  if(mapGrid[focusObject.y/50][focusObject.x/50] == 5 && focusObject.moveWithGrate == false ){
    console.log("testing water function");
    focusObject.health -= 1;
    waterTimer = 0;
    //return false;
  }
 
  //return false;
}