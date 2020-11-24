
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var myEngine,myWorld;
var ground;
var ball;
var b1;

function setup() {
  createCanvas(800,400);
  myEngine =Engine.create();
 myWorld = myEngine.world;
 var ground_options ={
   isStatic :true

 }
 ground = Bodies.rectangle(400,375,800,10,ground_options);
 World.add(myWorld,ground)
 console.log(ground)
 var ball_options = {
   isStatic : false, 
   restitution: 0.5
 }
 ball = Bodies.circle(100,100,50,ball_options)
 World.add(myWorld,ball) 
 var b1_options = {
   isStatic: false,
   restitution : 0.3
 }
 b1 = Bodies.circle(200,200,50,b1_options)
 World.add(myWorld,b1)
}

function draw() {
  background(0); 
  Engine.update(myEngine);  
  rectMode(CENTER);
rect(ground.position.x,ground.position.y,800,10);
ellipseMode(RADIUS)  
ellipse(ball.position.x,ball.position.y,50,50); 
ellipse(b1.position.x,b1.position.y,50,50);
}
          