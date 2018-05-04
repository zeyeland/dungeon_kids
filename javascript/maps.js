var wool_floor = new Image();  // 1
wool_floor.src = "assets/tiles/wool_tile.png";

var stone_wall_tile = new Image();  // 9
stone_wall_tile .src = "assets/tiles/stone_Wall.png";

var sand_Tile = new Image(); 
sand_Tile .src = "assets/tiles/sand_Tile.png";

var lava_Tile = new Image(); 
lava_Tile .src = "assets/tiles/lava_Tile.png";

var barracks_Floor = new Image(); 
barracks_Floor .src = "assets/tiles/barracks_Floor.png";

var cage_Floor = new Image(); //3
cage_Floor.src = "assets/tiles/cage_Floor.png";

var water_Floor = new Image(); //5
water_Floor.src = "assets/tiles/water/lightWater.png";

var water_Wave = new Image(); //4
water_Wave.src = "assets/tiles/water/waterWave.png";

var grass_Tile = new Image(); //6
grass_Tile.src = "assets/tiles/grass_2.png";

/*
tile representation
1 =  wool_floor
2 =  barracks_Floor
3 = cage_floor
9 = rock_wall
*/

const mapColumn = 40 ; // very important variable - sets the amount of columns the map can generated
const mapRow = 20; // very important variable- sets the amount of rows that can be generated
const totalGrid = mapColumn * mapColumn;
var mapGrid = [[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,8,8,8,8,8,8,8,8,9,  8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
               [9,2,2,2,2,8,2,2,9,1,1,1,1,1,1,9,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,2,2,2,2,2,2,2,8,9,  8,2,2,2,2,2,2,8,8,8,8,2,8,8,8,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,2,8,2,2,2,2,2,2,9],
               [9,2,2,2,2,8,2,2,9,1,1,1,1,1,1,9,1,2,2,2,2,2,2,1,1,0,0,0,0,0,0,0,8,2,2,2,2,2,2,8,9,  8,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,8,2,2,2,2,2,2,9],
               [9,2,2,2,2,2,8,8,9,1,1,1,1,1,1,0,1,2,2,2,2,2,2,1,1,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,  2,2,2,2,2,2,2,8,8,8,8,2,8,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,8,2,2,2,2,2,2,9],
               [9,2,2,2,2,2,2,2,9,1,1,1,1,1,1,0,1,2,2,2,2,2,2,1,1,1,1,1,1,1,1,0,8,2,2,2,2,2,2,2,2,  2,2,2,2,2,2,2,2,2,2,2,2,8,2,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,2,8,2,2,2,2,2,2,9],
               [9,1,9,9,9,9,9,9,9,1,1,1,1,1,1,0,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1,0,8,8,8,8,8,2,8,8,9,  8,8,8,8,8,8,8,8,8,8,8,8,8,2,0,0,0,2,8,8,8,8,8,8,8,2,0,0,0,0,0,2,8,8,8,8,8,8,9],
               [9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,1,9,3,3,3,3,3,3,3,3,9,  2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,8,2,2,2,2,2,2,8,2,0,0,0,0,0,2,2,2,2,2,2,9],
               [9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,2,2,2,2,2,2,1,9,0,0,0,0,0,0,0,0,9,  0,0,9,9,9,9,9,9,9,9,9,9,9,2,8,8,8,8,8,2,2,2,2,2,2,8,2,0,0,0,0,0,0,0,0,0,0,0,9],
               [9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,0,0,0,0,0,0,1,1,2,2,2,2,2,2,1,9,3,3,3,3,3,3,3,3,9,  0,0,9,0,0,0,0,0,0,0,0,0,9,2,2,2,2,2,2,2,2,2,2,2,2,8,2,0,0,0,0,0,0,0,0,0,0,0,9],
               [9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,9,8,8,8,8,8,8,8,8,9,  0,0,9,0,9,9,9,9,9,9,9,9,9,2,2,2,2,2,2,2,2,2,2,2,2,8,2,0,0,0,0,0,0,0,0,0,0,0,9],
               [9,1,1,1,1,1,1,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,3,3,3,3,3,3,3,3,9,  0,0,8,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,8,8,8,8,8,8,9,9,9,9,9,0,9,9,0,9,9,9,9,9],
               [9,1,1,1,1,1,1,1,1,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,9,  0,0,8,8,8,8,8,8,8,8,8,8,8,2,2,2,2,2,2,8,9,9,9,9,9,9,2,2,2,2,2,2,2,2,2,2,2,2,9],
               [9,1,1,1,1,1,1,1,1,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,8,  3,3,3,3,3,3,3,3,3,3,3,3,8,2,8,8,8,8,8,8,9,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,9],
               [9,1,1,1,1,1,1,1,1,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,  3,3,3,3,3,3,3,3,3,3,3,3,8,2,8,9,9,9,2,9,9,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,9],
               [9,1,9,9,9,9,9,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,8,  3,3,3,3,3,3,3,3,3,3,3,8,2,2,8,9,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,9],
               [9,3,3,3,3,3,3,3,3,3,9,0,0,0,0,0,0,0,0,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,  8,8,8,8,8,8,8,8,8,8,8,8,2,2,2,9,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,9],
               [9,3,3,3,3,3,3,3,3,3,9,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,9,  2,2,2,2,2,2,2,2,2,2,2,2,2,8,2,9,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,9],
               [9,3,3,3,3,3,3,3,3,3,9,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,9,  2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,9],
               [9,3,3,3,3,3,3,3,3,3,9,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,9,  2,2,2,2,2,2,2,2,2,2,2,2,2,9,9,9,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,9],
               [9,0,9,9,9,9,9,9,9,9,9,0,0,0,0,0,0,0,0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,  9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,9,9],
               //new half
               [9,0,9,0,0,9,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,9],
               [9,0,9,0,0,9,6,6,6,6,9,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,9],
               [9,0,9,0,0,9,6,6,6,6,9,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,9],
               [9,0,9,0,0,9,6,6,6,6,9,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,9],
               [9,0,9,9,0,9,6,6,6,6,9,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,9],
               [9,0,0,0,0,9,4,4,4,4,9,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,9],
               [9,0,0,0,0,9,5,5,5,5,9,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,9,  9,9,9,9,9,9,9,9,9,9,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,9],
               [9,0,0,0,0,9,5,5,5,5,9,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,9,  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,9],
               [9,0,0,0,0,9,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,1,1,1,1,1,5,5,5,5,5,5,5,5,5,5,9,  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,9],
               [9,0,0,0,0,9,5,5,5,5,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,1,1,1,1,1,5,5,5,5,5,5,5,5,5,5,9,  4,4,4,4,4,4,4,4,4,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,9],
               
               [9,0,0,0,0,9,5,5,5,5,1,1,1,1,5,5,5,5,1,1,5,5,5,5,5,1,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,  5,5,5,5,5,5,5,5,5,9,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,9],
               [9,0,0,0,0,0,5,5,5,5,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,1,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,  5,5,5,5,5,5,5,5,5,9,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,9],
               [9,0,0,0,0,0,5,5,5,5,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,1,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,  5,5,5,5,5,5,5,5,5,9,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,9],
               [9,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,  5,5,5,5,5,5,5,5,5,9,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,9],
               [9,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,  9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
               [9,0,0,0,0,0,1,1,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,  5,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,0,0,9],
               [9,0,0,0,0,0,1,1,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,  5,5,5,5,5,5,5,5,5,5,5,5,1,1,0,0,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,0,0,9],
               [9,0,0,0,0,0,1,1,5,5,5,5,5,5,5,5,1,1,1,1,1,1,1,1,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,5,  5,5,5,5,5,5,5,5,5,5,5,5,1,1,0,0,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,0,0,9],
               [9,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,1,1,1,1,1,1,1,1,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,5,  5,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,0,0,9],
               [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,  9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
              ]//end of array


function drawMapTiles(){
  var playerX = player1.x  / 50;
  var playerY = player1.y / 50;
  //console.log(playerY + " " + playerX); //succesful
  var startArraySearchX = playerX - 10;
  var endArraySearchX = playerX + 9;

  var startArraySearchY = playerY - 5;
  var endArraySearchY = playerY + 4;

  ////if statement to garuntee Y is not out of bounds // most be updated on map expansion
  if(endArraySearchY > 39){
    endArraySearchY = 39;
  }

  var whiteSpaceY=0;
  var whiteSpaceX=0;

  for(var rowCount = startArraySearchY; rowCount <= endArraySearchY; rowCount++){
    if(rowCount>= 0){
        whiteSpaceX = 0;
        for(var columnCount = startArraySearchX; columnCount <= endArraySearchX; columnCount++){
          if(columnCount>=0){
            if(mapGrid[rowCount][columnCount] == 9)
            { 
              ctx.drawImage(stone_wall_tile,whiteSpaceX*canvas.width/20,whiteSpaceY*canvas.height/10,canvas.width/20,canvas.height/10);
            }
            if(mapGrid[rowCount][columnCount] == 0){ // if for grass
              ctx.drawImage(sand_Tile,whiteSpaceX*canvas.width/20,whiteSpaceY*canvas.height/10,canvas.width/20,canvas.height/10);
            }
            if(mapGrid[rowCount][columnCount] == 1){ // if for rock ground
                ctx.drawImage(wool_floor,whiteSpaceX*canvas.width/20,whiteSpaceY*canvas.height/10,canvas.width/20,canvas.height/10);
            }
            if(mapGrid[rowCount][columnCount] == 2){ // if for wool tile
                ctx.drawImage(barracks_Floor,whiteSpaceX*canvas.width/20,whiteSpaceY*canvas.height/10,canvas.width/20,canvas.height/10);
            }
            if(mapGrid[rowCount][columnCount] == 3){ // if for water tile
                ctx.drawImage(cage_Floor,whiteSpaceX*canvas.width/20,whiteSpaceY*canvas.height/10,canvas.width/20,canvas.height/10);
                //ctx.drawImage(water_tile,50,55,100,100,columnCount*50,rowCount*50,100,100);
            }
            if(mapGrid[rowCount][columnCount] == 4){ // if for water tile
              ctx.drawImage(sand_Tile,whiteSpaceX*canvas.width/20,whiteSpaceY*canvas.height/10,canvas.width/20,canvas.height/10);
              ctx.drawImage(water_Wave,whiteSpaceX*canvas.width/20,whiteSpaceY*canvas.height/10,canvas.width/20,canvas.height/10);
            }
            if(mapGrid[rowCount][columnCount] == 5){ // if for water tile
              ctx.drawImage(water_Floor,whiteSpaceX*canvas.width/20,whiteSpaceY*canvas.height/10,canvas.width/20,canvas.height/10);
            }
            if(mapGrid[rowCount][columnCount] == 6){ // if for water tile
              ctx.drawImage(grass_Tile,whiteSpaceX*canvas.width/20,whiteSpaceY*canvas.height/10,canvas.width/20,canvas.height/10);
            }
            if(mapGrid[rowCount][columnCount] == 8){ // if for skyr_tile
                ctx.drawImage(lava_Tile,whiteSpaceX*canvas.width/20,whiteSpaceY*canvas.height/10,canvas.width/20,canvas.height/10);
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


