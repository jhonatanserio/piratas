const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var cannon
var highGround
var magic
var TwinTowers
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
  var TwinTowers_options={
    isStatic:true
  }

  highGround=Bodies.rectangle(0,height-1,1200,20,highGround_options)
  World.add(world,highGround)
  TwinTowers=Bodies.rectangle(90,200,160,310,TwinTowers_options)
  World.add(world,TwinTowers)
 
  
 cannon = new Cannon(180,110,130,100,angle);
}

function draw() {
  image(magic,0,0,width,height)
 
  Engine.update(engine);
  rect(highGround.position.x,highGround.position.y,1200,20)
  image(tower,TwinTowers.position.x,TwinTowers.position.y,160,310)
  cannon.display()
   
}
