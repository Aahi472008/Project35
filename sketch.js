var database,position;
var balloon ;
var backgroundImg;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    balloon = createSprite(250,250,10,10);
    balloon.image = loadImage("sprites/Hot Air Ballon-02.png");
    var locOfBallAtDatabase=database.ref("balloon/position")
    locOfBallAtDatabase.on("value",readPosition)
}
function preload(){
backgroundImg=("Hot Air Ballon-01.png");
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        balloon.x=baloon.x-10;
    }
    else if(keyDown(RIGHT_ARROW)){
        balloon.x=baloon.x+10;
    }
    else if(keyDown(UP_ARROW)){
        balloon.y=balloon.y-10
    }
    else if(keyDown(DOWN_ARROW)){
        balloon.y=balloon.y+10
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref("balloon/position").set({
       "x":position.x+x,
       "y":position.y+y
    })
    
}

function readPosition(data){
    position=data.val();
    console.log(position);
    balloon.x=position.x;
    balloon.y=position.y;
}
