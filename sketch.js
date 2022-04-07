
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(700,600);
	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	ball = Bodies.circle(160,200,20,ball_options)
	World.add(world,ball)

	Engine.run(engine);
    ///making the ground
	ground = new Ground(350,580,700,10)
	//making the left side
	leftSide = new Ground(450,540,10,70)
	//making the right side
	rightSide = new Ground(600,540,10,70)
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine)
  ellipseMode(RADIUS)
  fill ("white")
  ellipse(ball.position.x, ball.position.y, 20,20)
  ground.display()
  leftSide.display()
  rightSide.display()
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Body.applyForce(ball,ball.position,{x:50,y:-50})
	}
}




