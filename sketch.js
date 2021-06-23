var ball;
var database
var position
var sphere

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
//initializing database
    database = firebase.database()
    sphere = database.ref("ball/position")
    sphere.on("value",readposition,writeposition)
}


function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writeposition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writeposition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writeposition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writeposition(0,+1);
    }
    drawSprites();
}

function writeposition(x,y){
    database.ref("ball/position").set({
    x:ball.x+x,
    y:ball.y+y

})

}

function readposition(data){
    position = data.val()
    console.log (position)
    ball.x = position.x
    ball.y = position.y

}