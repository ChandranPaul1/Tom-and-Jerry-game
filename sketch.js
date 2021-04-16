var garden,gardenImage;

var cat,catImage1,catImage2,catImage3,catImage4;
var mouse,mouseImage1,mouseImage2,mouseImage3,mouseImage4;

function preload() {
 gardenImage = loadImage("garden.png");
  
 catImage1 = loadImage("cat1.png");
 catImage2 = loadImage("cat2.png");
 catImage3 = loadImage("cat3.png"); 
 catImage4 = loadImage("cat4.png"); 
  
 mouseImage1 = loadImage("mouse1.png");
 mouseImage2 = loadImage("mouse2.png"); 
 mouseImage3 = loadImage("mouse3.png");
 mouseImage4 = loadImage("mouse4.png"); 
}

function setup(){
 createCanvas(970,700);
  
 garden = createSprite(485,350);
 garden.addImage(gardenImage);
  
 cat = createSprite(700,500);
 cat.addImage(catImage1);
 cat.scale = 0.2;
  
 mouse = createSprite(200,510);
 mouse.addImage(mouseImage1);
 mouse.scale = 0.15;
  
 mouse.setCollider("rectangle",0,0,100,mouse.height);  
}

function draw() {
 background("black");

 if (mouse.isTouching(cat)) {
  mouse.addAnimation("mouseMagnify",mouseImage4);
  mouse.changeAnimation("mouseMagnify");
   
  cat.velocityX = 0; 
  cat.addAnimation("catSitting",catImage4);
  cat.changeAnimation("catSitting");
 }
    
 drawSprites();
}


function keyPressed(){
 if (keyCode === LEFT_ARROW) {
  cat.velocityX = -4;
  cat.addAnimation("catRunning",catImage2,catImage3); 
  cat.changeAnimation("catRunning");
   
  mouse.addAnimation("mouseStanding",mouseImage2,mouseImage3);
  mouse.changeAnimation("mouseStanding");  
 }  
}
