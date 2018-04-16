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

/*
tile representation
1 =  wool_floor
2 =  barracks_Floor
3 = cage_floor
9 = rock_wall
*/

var map1 = [[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
            [9,2,2,2,2,2,2,2,9,1,1,1,1,1,1,9,0,0,0,0],
            [9,2,2,2,2,2,2,2,9,1,1,1,1,1,1,9,0,0,0,0],
            [9,2,2,2,2,2,2,2,9,1,1,1,1,1,1,0,0,0,0,0],
            [9,2,2,2,2,2,2,2,9,1,1,1,1,1,1,0,0,0,0,0],
            [9,1,9,9,9,9,9,9,9,1,1,1,1,1,1,0,0,0,0,0],
            [9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
            [9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
            [9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,0,0,0,0],
            [9,1,1,1,1,1,1,9,9,9,9,9,9,9,9,9,9,9,9,9]
            ];

var map2 = [[9,9,9,9,9,9,9,9,9,9,9,9,8,8,8,8,8,8,8,8],
            [0,1,2,2,2,2,1,0,0,0,0,0,2,2,2,2,2,2,2,8],
            [0,1,2,2,2,2,1,0,0,0,0,0,8,2,2,2,2,2,2,8],
            [0,1,2,2,2,2,1,0,0,0,0,0,2,2,2,2,2,2,2,8],
            [0,1,2,2,2,2,1,1,1,1,1,0,8,2,2,2,2,2,2,8],
            [0,1,1,1,1,1,2,2,2,2,1,0,8,8,8,8,8,2,8,8],
            [0,0,0,0,0,1,2,2,2,2,1,9,3,3,3,3,3,3,3,8],
            [0,0,0,0,0,1,2,2,2,2,1,9,0,0,0,0,0,0,0,8],
            [0,0,0,0,0,1,2,2,2,2,1,9,3,3,3,3,3,3,3,8],
            [9,9,9,9,9,9,9,9,9,9,9,9,8,8,8,8,8,8,8,8]
            ];


var map3 = [ [9,1,1,1,1,1,1,9,9,9,9,9,9,9,9,9,9,9,9,9],
             [9,1,1,1,1,1,1,1,1,1,2,0,0,0,0,0,0,0,0,0],
             [9,1,1,1,1,1,1,1,1,1,2,0,0,0,0,0,0,0,0,0],
             [9,1,1,1,1,1,1,1,1,1,2,0,0,0,0,0,0,0,0,0],
             [9,1,9,9,9,9,9,9,9,9,9,0,0,0,0,0,0,0,0,0],
             [9,3,3,3,3,3,3,3,3,3,9,0,0,0,0,0,0,0,0,0],
             [9,3,3,3,3,3,3,3,3,3,9,0,0,0,0,0,0,0,0,0],
             [9,3,3,3,3,3,3,3,3,3,9,0,0,0,0,0,0,0,0,0],
             [9,3,3,3,3,3,3,3,3,3,9,0,0,0,0,0,0,0,0,0],
             [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
            ];
var map4 = [[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
            ];



////////////////////////////////
function getMap(){
    var theMap;
    if(player1.grid == 1){
		theMap = map1;
	}
	if(player1.grid == 2){
		theMap = map2;
	}
	if(player1.grid == 3){
		theMap = map3;
	}
	if(player1.grid == 4){
		theMap = map4;
    }
    return theMap;
}

function drawMap(){

    var playerMap = getMap(player1.grid);

    if(player1.grid == 1){
		playerMap = map1;
	}
	if(player1.grid == 2){
		playerMap = map2;
	}
	if(player1.grid == 3){
		playerMap = map3;
	}
	if(player1.grid == 4){
		playerMap = map4;
	}
    
    for(var y = 0; y<10; y++){ 
        for(var x = 0; x < 20; x++){
            if(playerMap[y][x] == 0){ // if for grass
                ctx.drawImage(sand_Tile,x*50,y*50,50,50);
            }
            if(playerMap[y][x]  == 1){ // if for rock ground
                ctx.drawImage(wool_floor,x*50,y*50,50,50);
            }
            if(playerMap[y][x]  == 2){ // if for wool tile
                ctx.drawImage(barracks_Floor,x*50,y*50,50,50);
            }
            if(playerMap[y][x]  == 3){ // if for water tile
                ctx.drawImage(cage_Floor,x*50,y*50,100,100);
            }
            if(playerMap[y][x]  == 8){ // if for skyr_tile
                ctx.drawImage(lava_Tile,x*50,y*50,50,50);
            }
            if(playerMap[y][x]  == 9){ // if for rock wall
                ctx.drawImage(stone_wall_tile,x*50,y*50,50,50);
            }
        }
    }
    loadNpcs();

}

function changePlayerMap(direction){
    if(player1.grid == 3){ //,=map3
        if(direction == "above" && player1.y == 0){
            player1.grid = 1;
            player1.y = 500;
            return true;
        }
        if(direction == "right" && player1.x == 950){
            player1.grid = 4;
            player1.x = -50;
            return true;
        }
    }//end of map 3 if statments

    if(player1.grid == 1){//map 1 config
        if(direction == "below" && player1.y == 450){
            player1.grid = 3;
            player1.y = -50;
           // console.log("calling this funciont");
            return true;
        }
        if(direction == "right" && player1.x == 950){
            player1.grid = 2;
            player1.x = -50;
            return true;
        }
    }//end of map 1 if statmenets

    if(player1.grid == 2){
        if(direction == "left" && player1.x == 0){
            player1.grid = 1;
            player1.x = 1000;
            return true;
        }
    }// end of map2 if statements

    if(player1.grid == 4){
        if(direction == "left" && player1.x == 0){
            player1.grid = 3;
            player1.x = 1000;
            return true;
        }
        if(direction == "right" && player1.y == 450){
            //console.log("check error");
            player1.y = 0;
            return true;
        }
    }

    return false;
    
}


