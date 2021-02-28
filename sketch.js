var canvas;
var music;
var surface1, surface2, surface3, surface4
var box

function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(800,600);
    
    //create 4 surfaces
    surface1=createSprite(100, 580, 175, 30);
    surface1.shapeColor=("magenta");
    surface2=createSprite(300, 580, 175, 30);
    surface2.shapeColor=("blue");
    surface3=createSprite(500, 580, 175, 30);
    surface3.shapeColor=("green");
    surface4=createSprite(700, 580, 175, 30);
    surface4.shapeColor=("red");

    //create box and velocity
    box=createSprite(random(20, 750), 200, 30, 30);
    box.shapeColor=("white");
    box.velocityX=6;
    box.velocityY=6;


}

function draw() {
    background(rgb(169,169,169));
    createEdgeSprites();
    


    //add condition to check if box touching surface and make it box
    box.bounceOff(surface1);
    box.bounceOff(surface2);
    box.bounceOff(surface3);
    box.bounceOff(surface4);
    //box.bounceOff(edges);
   
    if(box.isTouching(surface1) && box.bounceOff(surface1)) {
        box.shapeColor=("magenta")
    }

    if (box.isTouching(surface2) && box.bounceOff(surface2)) {
        box.shapeColor=("blue")
    }
    if (box.isTouching(surface3) && box.bounceoff(surface3)) {
        box.shapeColor=("green")
    }
    if (box.isTouching(surface4) && box.bounceOff(surface4)) {
        box.shapeColor=("red")
    }
    

    
    drawSprites();
}
