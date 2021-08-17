const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var blower;
var ball;
var blowerMouth;
var button;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  blower = new Blower(325, 200, 175, 20);
  button = createButton("Click to Blow");

  var ball_options = {
    restitution: 0.8,
    density: 0.2
  }

  ball = Bodies.circle(412.5, 100, 20, ball_options);
  World.add(world, ball);
  button.position(width/2, height- 100);
  button.class("blowButton");
  button.mousePressed(blow);


}

function draw() {
  background("gray");  
  Engine.update(engine);
  ellipse(ball.position.x, ball.position.y, 20);
  blower.display();
  drawSprites();
}

function blow(){
  Body.applyForce(ball, {x:0, y:0}, {x:0, y: -0.1});
}