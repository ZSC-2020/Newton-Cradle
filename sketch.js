
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint 
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	 ballD=40
	 ballX=width/2
	 ballY=height/3
	 ball1=new Ball(ballX-ballD*2,ballY,ballD)
	 ball2=new Ball(ballX-ballD,ballY,ballD)
	 ball3=new Ball(ballX,ballY,ballD)
	 ball4=new Ball(ballX+ballD,ballY,ballD)
	 ball5=new Ball(ballX+ballD*2,ballY,ballD)
	//Create the Bodies Here.

	stand1=new stand(450,200,width/3,20)
	rope1= new rope(ball1.body,{x:340,y:200})
	rope2= new rope(ball2.body,{x:400,y:200})
	rope3= new rope(ball3.body,{x:460,y:200})
	rope4= new rope(ball4.body,{x:520,y:200})
	rope5= new rope(ball5.body,{x:580,y:200})

	
	 
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);
Engine.update(engine)
  stand1.display()
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  drawSprites();
 
}
function mouseDragged(){
Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})

}


