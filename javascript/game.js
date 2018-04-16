var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var canvas2 = document.getElementById('canvas2');
var ctx2 = canvas2.getContext('2d');

var player1 = new playerComponnet();
//var npc1 = new goblinLV1();
function update(){
    ctx.clearRect(0, 0, 1000, 500); // clears new area after translate is complete
    drawMap();
    player1.update();
    
    
    }
    
setInterval(update,40);








