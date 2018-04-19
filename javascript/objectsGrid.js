var objectGrid =[
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,4,3,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
                ]

function drawObjectTiles(){
  var playerX = player1.x  / 50;
  var playerY = player1.y / 50;
  //console.log(playerY + " " + playerX); //succesful
  var startArraySearchX = playerX - 10;
  var endArraySearchX = playerX + 9;

  var startArraySearchY = playerY - 5;
  var endArraySearchY = playerY + 4;
  if(endArraySearchY > 19){
    endArraySearchY = 19;
  }

  var whiteSpaceY=0;
  var whiteSpaceX=0;
  //console.log('StartingPosition should be ' + startArraySearchX + " " + startArraySearchY);
  //console.log('StartingPosition should be ' + endArraySearchX + " " + endArraySearchY);
  for(var rowCount = startArraySearchY; rowCount <= endArraySearchY; rowCount++){
    if(rowCount>= 0){
        whiteSpaceX = 0;
        for(var columnCount = startArraySearchX; columnCount <= endArraySearchX; columnCount++){
          if(columnCount>=0){
            if(objectGrid[rowCount][columnCount] == 1) // drawing Socrates
            { 
              drawNPC(socrates,whiteSpaceX,whiteSpaceY);
              
            }
            if(objectGrid[rowCount][columnCount] == 2) // drawing Socrates
            { 
              drawNPC(obama,whiteSpaceX,whiteSpaceY);
              
            }
            if(objectGrid[rowCount][columnCount] == 3) // drawing Socrates
            { 
              drawNPC(trump,whiteSpaceX,whiteSpaceY);
              
            }
            if(objectGrid[rowCount][columnCount] == 4) // drawing Socrates
            { 
              drawNPC(songs,whiteSpaceX,whiteSpaceY);
              
            }
            if(objectGrid[rowCount][columnCount] == socratesScroll && objectGrid[rowCount][columnCount].itemPickedUp == false)
            { 
              objectGrid[rowCount][columnCount].update();
              drawBook(objectGrid[rowCount][columnCount],whiteSpaceX,whiteSpaceY);
                /*if( objectGrid[rowCount][columnCount].itemPickedUp == true){
                  objectGrid[rowCount][columnCount] = 0;
                } //this if statement sets the objects grid back to zero for book if it is picked up*/
            }
            if(objectGrid[rowCount][columnCount] == obamaBook && objectGrid[rowCount][columnCount].itemPickedUp == false)
            {
              objectGrid[rowCount][columnCount].update();
              drawBook(objectGrid[rowCount][columnCount],whiteSpaceX,whiteSpaceY);
            }
            if(objectGrid[rowCount][columnCount] == trumpBook && objectGrid[rowCount][columnCount].itemPickedUp == false)
            {
              objectGrid[rowCount][columnCount].update();
              drawBook(objectGrid[rowCount][columnCount],whiteSpaceX,whiteSpaceY);
            }
            if(objectGrid[rowCount][columnCount] == songsBook && objectGrid[rowCount][columnCount].itemPickedUp == false)
            {
              objectGrid[rowCount][columnCount].update();
              drawBook(objectGrid[rowCount][columnCount],whiteSpaceX,whiteSpaceY);
            }
          }
          else if(columnCount < 0){
            //console.log("skip regular function and add one to columnWhiteSpace");
          }
          whiteSpaceX++;
        }//end of inner for
    }
    else if(rowCount<0){
      //console.log("skip regular function and add one to rowWhiteSpace");
      
    }
    //console.log("This number should cap at 10: " + whiteSpaceY);
    whiteSpaceY++;
  }//end of for

}//end of drawing of map tiles