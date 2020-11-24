var car,wall;

var speed,weight;

var wall,thickness;

var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);
  speed=random(55,90)
  weight=random(400,1500)

  car=createSprite(400, 200, 50, 50);
   car.shapeColor="white";
  car.debug=true;
  car.velocityX=speed;

  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor="blue";
  wall.debug=true;
  
  bullet=createSprite(400,200,50,50);
  bullet.shapeColor="white";
   bullet.deburg=true;
   bullet.velocityX=speed;

}

function draw() {
  background("black");

  if(wall.x-car.x<(car.width+wall.width)/2){

car.velocityX=0;

var deformation=0.5*weight*speed*speed/22509;

if(deformation>180){
  car.shapeColor=color(255,0,0);

}
if(deformation<180 && deformation>100){

  car.shapeColor=color(230,230,0);

}
if(deformation<100){
  
  car.shapeColor=color(0,255,0);

}
  }
  
  
  
  drawSprites();

}
function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  walLeftEdge=wall.x;

if(bulletRightEdge>=wallLeftEdge){
  return true
}
return false;

if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }
  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
}


}