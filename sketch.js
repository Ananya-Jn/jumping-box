var canvas;
var music;
var box1, box2, box3, box4, square;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    box1 = createSprite(110, 550, 150, 30);
    box1.shapeColor = "green";

    box2 = createSprite(310, 550, 150, 30);
    box2.shapeColor = "yellow";

    box3 = createSprite(510, 550, 150, 30);
    box3.shapeColor = "blue";

    box4 = createSprite(710, 550, 150, 30);
    box4.shapeColor = "red";

    square = createSprite(400, 20, 50, 50);
    square.shapeColor = "white";
    //create 4 different surfaces

    square.velocityX = 5;
    square.velocityY = 5;

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    var topEdge = createSprite(400, 600, 800, 2);
    var bottomEdge = createSprite(400, 0, 800, 2);
    var rightEdge = createSprite(0, 300, 2, 600);
    var leftEdge = createSprite(800, 300, 2, 600);

    if(square.isTouching(box1)){
        square.shapeColor = "green";
    }
    else{
        square.shapecolor = "white";
    }

    if(square.isTouching(box2)){
        square.shapeColor = "yellow";
    }
    else{
        square.shapecolor = "white";
    }

    if(square.isTouching(box3)){
        square.shapeColor = "blue";
    }
    else{
        square.shapecolor = "white";
    }

    if(square.isTouching(box4)){
        square.shapeColor = "red";
    }
    else{
        square.shapecolor = "white";
    }

    if(square.isTouching(box2)){
        square.velocityX = 0;
        square.velocityY = 0;
    }

    square.bounceOff(topEdge);
    square.bounceOff(bottomEdge);
    square.bounceOff(rightEdge);
    square.bounceOff(leftEdge);
    square.bounceOff(box1);
    square.bounceOff(box2);
    square.bounceOff(box3);
    square.bounceOff(box4);

    if(square.isTouching(box1)){
        square.playSound(music);
    }
    else if(square.isTouching(box2)){
        square.stopSound(music);
    }

drawSprites();

    //add condition to check if box touching surface and make it box
}
