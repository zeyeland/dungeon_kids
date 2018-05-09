
var gameOverText = document.getElementById('gameOverText');
$("#gameOverText").hide();

function gameOverFunctionW(){
    $("#div2").hide();
    $("#canvasMain").hide();
    $("#gameOverText").show();
    $("#gameOverText").text("Congrats you win. Your score is: " + player1.score);
    //onsole.log("Congrats you win. Your score is: " + player1.score);
}

function gameOverFunctionL(){
    $("#div2").hide();
    $("#canvasMain").hide();
    $("#gameOverText").show();
    $("#gameOverText").text("Game Over You LOSE!!!");
}

