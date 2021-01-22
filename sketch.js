const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var binImg ,bin;
 
function preload(){
  binImg = loadImage("dustbingreen");
}
function setup() {
var canvas = createCanvas(1200, 600);
engine = Engine.create();
world = engine.world;
  
ground = new Ground();
crumpledPaper = new Paper();

 bin = createSprite(964,520,20,20);
 bin.addImage(binImg);
 bin.scale = 0.45;

  binPart1 = new DustBin(902, 505, 10, 120);
  binPart2 = new DustBin(962,565,130,10);
  binPart3 = new DustBin(1024,505,10,120);

}

function draw() {
  background(0);
  Engine.update(engine);


  if (gameState === "start") {
    background("black");
    textSize(20);
    fill("Yellow");
    text("This is small game that will teach you the importance of throwing away your trash. \n                  Press Down Arrow to Start, and Up to throw away the trash.", 50, 200)
    if (keyCode === DOWN_ARROW) {
      gameState = "play"
    }
  }
  if (gameState === "play") {
    rectMode(CENTER);
    background(0);
    ground.display();
    crumpledpaper.display();
    binPart1.display();
    binPart2.display();
    binPart3.display();

  }
}


function keyPressed(){
  if (keyCode === UP_ARROW && gameState === "play") {
    Matter.Body.applyForce(crumpledpaper.body,crumpledpaper.body.position, {
      x: 13,
      y: -13
    });
  }
}
