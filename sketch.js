const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,ball;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic:true
  }

  var ballop={
    restitution:1.0
  }
  
  ground = Bodies.rectangle(200,390,200,20, ground_options)
  World.add(world,ground);

  ball= Bodies.circle(200,100,20,ballop)
  World.add(world,ball);

}

function draw() {
  background(255,255,255);  
 Engine.update(engine);
 rectMode(CENTER)
 rect(ground.position.x,ground.position.y,400,20)

 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,20,20)
}