
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground;

function preload() {

}

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	paper= new Paper(100,350,30)	
	
    box1 = new Box(805,320,20,100);
	
	box2 = new Box(900,360,170,20);
	
	box3 = new Box(990,320,20,100);

	ground = new Ground(600,380,1200,20);
    Matter.Engine.run(engine)
}


function draw(){
  background(0);
  Engine.update(engine);

  paper.display();
 ground.display();

 box1.display();
 box2.display();
 box3.display();

}


function keyPressed() {

if (keyCode === UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:43, y:-43});

}
}
