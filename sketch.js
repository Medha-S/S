var bullet, wall, speed, weight, thickness;

function setup() 
{
  createCanvas(1300,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(20, 200, 50,20);
  bullet.velocityX = speed;
  wall = createSprite(1200, 200, thickness, height/2);
}

function draw() 
{
  background(0);
  bullet.shapeColor = "white";
  if(bullet.isTouching(wall))
  {
    bullet.velocityX = 0;
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(damage > 10)
    {
      wall.shapeColor = "red";
    }
    if(damage < 10)
    {
      wall.shapeColor = "green";
    }
  }
   bullet.display();
   wall.display();
}