var mainAttackGrid = [  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
                        ];

 function updateAttackGrid(objectFocus,previousYGrid,previousXGrid,direction,trigger){

    //mainAttackGrid[previousYGrid][previousXGrid] = 0;

if (trigger == true){
    return;
}
    if(direction == "left"){
        mainAttackGrid[previousYGrid][previousXGrid] = 0;
        mainAttackGrid[objectFocus.y/50][objectFocus.x/50-1] = objectFocus;
    }
    if(direction == "right"){
        mainAttackGrid[previousYGrid][previousXGrid] = 0;
        mainAttackGrid[objectFocus.y/50][objectFocus.x/50+1] = objectFocus;
    }
    if(direction == "above"){
        mainAttackGrid[previousYGrid][previousXGrid] = 0;
        mainAttackGrid[objectFocus.y/50-1][objectFocus.x/50] = objectFocus;
    }
    if(direction == "below"){
        mainAttackGrid[previousYGrid][previousXGrid] = 0;
        mainAttackGrid[objectFocus.y/50+1][objectFocus.x/50] = objectFocus;
    }
    if(direction == "none"){
        mainAttackGrid[previousYGrid][previousXGrid] = objectFocus;
        //console.log(mainAttackGrid[previousYGrid][previousXGrid]);
    }
    
 }

 function playerAttack(direction,objectFocus){
    if(direction == "UP"){
        if(mainAttackGrid[objectFocus.y/50-1][objectFocus.x/50] != 0 ){
            mainAttackGrid[objectFocus.y/50-1][objectFocus.x/50].health = 0;
            console.log("hit was a success");
        }
    }
    if(direction == "DOWN"){
        if(mainAttackGrid[objectFocus.y/50+1][objectFocus.x/50] != 0 ){
            mainAttackGrid[objectFocus.y/50+1][objectFocus.x/50].health = mainAttackGrid[objectFocus.y/50+1][objectFocus.x/50].health - 25;
            console.log("hit DOWN was a success");
            console.log(mainAttackGrid[objectFocus.y/50+1][objectFocus.x/50].health);
        }
    }
    
    
 }
             