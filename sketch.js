
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(650,680,1300,20);
leftside=new Ground(900,610,20,120);
rightside=new Ground(1100,610,20,120);
var ball_options={
	isStatic:false,
	friction:0,
	density:1.2,
	restitution:0.3
}
ball=Bodies.circle(300,100,20,ball_options);
World.add(world,ball);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show();
  leftside.show();
  rightside.show();
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:75,y:-75});
	}
}



