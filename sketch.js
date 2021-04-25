var snow,backgroundImg






function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  backgroundImg=loadImage("snow3.jpg");

}

function draw() {
  background("snow3.jpg");  
  drawSprites();
}