var sea, ship;
var seaImg, shipImg;

function preload() {
  seaImg = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png","ship-2.png")

}

function setup() {
  createCanvas(800, 400);
  background("0");


  sea = createSprite(300, 100);
  sea.addImage(seaImg);
  


  ship = createSprite(130, 200, 30, 30);
  ship.addAnimation("movingShip", shipImg1);
}

function draw() {
  background(0);

  sea.velocityX = -3;

  drawSprites();
}
