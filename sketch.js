const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,390,1200,20);
  stand1 = new Ground(650,300,300,20);

  box1 = new Box(650,265,50,50);
  box2 = new Box(700,265,50,50);
  box3 = new Box(600,265,50,50);
  box4 = new Box(550,265,50,50);
  box5 = new Box(750,265,50,50);
  box6 = new Box(650,215,50,50);
  box7 = new Box(600,215,50,50);
  box8 = new Box(700,215,50,50);
  box9 = new Box(650,165,50,50);

  polygon = Bodies.circle(50,200,20);
  
  slingshot = new Slingshot(polygon.body,{x: 100,y: 200});
  
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  ground.display();
  stand1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  polygon.display();
  slingshot.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if( keyCode === 32){
      slingshot.attach(polygon.body);
  }
}