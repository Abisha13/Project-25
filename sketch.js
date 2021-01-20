
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var trash1;
var world;
var groundObj;

function preload()
{
	dustbinIMG=loadImage("trashcangreen.png");
	
}

function setup() {
	createCanvas(1300, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper=new Paper(200,450,70);
	groundObj=new Ground(width/2,620,width,20);
	trash1=new Dustbin(1200,510,20,200);
	trash2=new Dustbin(1000,510,20,200);
	trash3=new Dustbin(1100,600,200,20);


   // To run physics engine
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background("white");

  trash1.display();
  trash2.display();
  trash3.display();
  paper.display();
  image(dustbinIMG,972,410,252,200);

}
function keyPressed(){
if (keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-135})
}
}



