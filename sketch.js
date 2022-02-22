const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var cannon
var bolinhaDeGorfe
var highGround
var magic
var angle=60
var Towers
var tower
function preload() {
 magic=loadImage("./assets/background.gif")
 tower=loadImage("./assets/tower.png")
}
function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  var highGround_options={
    isStatic:true
  }
  var Towers_options={
    isStatic:true
  }

  highGround=Bodies.rectangle(0,height-1,1200,20,highGround_options)
  World.add(world,highGround)
  Towers=Bodies.rectangle(90,200,160,310,Towers_options)
  World.add(world,Towers)
 
  
 cannon = new Cannon(180,110,130,100,angle);
 bolinhaDeGorfe = new CannonBoll(cannon.x,cannon.y)
}

function draw() {
  image(magic,0,0,width,height)
 
  Engine.update(engine);
  rect(highGround.position.x,highGround.position.y,1200,20)
  image(tower,Towers.position.x,Towers.position.y,160,310)
  cannon.display();
  bolinhaDeGorfe.display();
  
}
function keyReleased(){
  if(keyCode==LEFT_ARROW){
    bolinhaDeGorfe.shoot(cannon.angle)
  }
}
