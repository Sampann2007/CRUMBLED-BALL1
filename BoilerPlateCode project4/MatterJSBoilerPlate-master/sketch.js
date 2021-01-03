
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ballBody;
var ground,groundBody;
var wall1,wall2,wall3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	ballBody = Bodies.circle(200 , 650 , 5,5 );
	ball=createSprite(200, 80, 10,10,{isStatic:false});
	ground=createSprite(width/2, height-35, width,10);
	engine = Engine.create();
	world = engine.world;
	
	
	//Create the Bodies Here.
	wall1=createSprite(600,650,100,20);
	wall2=createSprite(550,600,20,100);
	wall3=createSprite(650,600,20,100);

	


	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ball.x= ballBody.position.x 
  ball.y= ballBody.position.y 
  if(keyCode===UP_ARROW){
	ball.x=600;
	ball.y=630;
}
  
  
  drawSprites();
 
}





