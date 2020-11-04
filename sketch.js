var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);

speed=random(55,90);
weight=random(400,1500);
thickness=random(35,73);

bullet=createSprite(50,200,50,10);
bullet.shapeColor=color("white");
bullet.velocityX=speed;

wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=color(80,80,80);

}

function draw() {
  background(0);  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
   bullet.velocityX=0;
   var deformation=0.5* weight *speed*speed/22509;
if(deformation>180)
  
  
  {
    wall.shapeColor=color(52,244,0);
  }
  else


if(deformation<180)
{
  wall.shapeColor=color(255,0,0);
}
  }

  
  drawSprites();
}