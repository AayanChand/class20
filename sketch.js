var fixedrect,moveingrect

function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(200, 200, 50, 50);
  moveingrect=createSprite(400, 200, 80, 30);
  fixedrect.shapeColor="red"
  moveingrect.shapeColor="red"
}

function draw() {
  background(0);  
  moveingrect.x=World.mouseX
  moveingrect.y=World.mouseY
  if(moveingrect.x-fixedrect.x<=fixedrect.width/2+moveingrect.width/2&&fixedrect.x-moveingrect.x<=fixedrect.width/2+moveingrect.width/2&&moveingrect.y-fixedrect.y<=fixedrect.width/2+moveingrect.width/2&&fixedrect.y-moveingrect.y<=fixedrect.width/2+moveingrect.width/2){
    fixedrect.shapeColor="cyan"
  moveingrect.shapeColor="cyan"
  }
  else{
    fixedrect.shapeColor="red"
  moveingrect.shapeColor="red"
  }
  drawSprites();
}