var iss, spacecraft, bg, issImg, scImg
var hasDocked = false;

function preload(){
bg = loadImage("Images/spacebg.jpg")


}
function setup() {

  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  iss = createSprite(330,130);
  iss.addImage(issImg);
  iss.scale = 0.25
  

  spacecraft = createSprite(285.240);
  spacecraft.addImage(scImg);
  spacecraft.scale = 0.15

}
function draw() {
  background(bg);  
  if(!hasDocked){
spacecraft.x = spacecraft.x + random(-1,1);

if(keyDown("UP_ARROW")){
  spacecraft.y = spacecraft.y -2;
}

if(KeyDown)("LEFT_ARROW")){
  spacecraft.addImage(scimg3)
}
if(keyDown)("RIGHT_ARROW")){
  spacecraft.addImage(scimg2);
}
if(keyDown)("DOWN_ARROW")){
  spacecraft.addImage(scimg1);
}
if(keyDown)("UP_ARROW")){
  
}

  }
  drawSprites();
}