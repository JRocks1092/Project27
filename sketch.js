//const { Vector } = require("matter-js");

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var obj1, obj2, obj3, obj4, obj5;
var ground;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var wi = 50;


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	obj1 = new Cradle(400, 400);
	obj2 = new Cradle(360, 400);
	obj3 = new Cradle(440, 400);
	obj4 = new Cradle(320, 400);
	obj5 = new Cradle(480, 400);

	ground = new Ground(400, 200, 400, 50);

	rope1 = new Rope(obj1.body, ground.body, -0, 0);
	rope2 = new Rope(obj2.body, ground.body, -wi, 0);
	rope3 = new Rope(obj3.body, ground.body, +wi, 0);
	rope4 = new Rope(obj4.body, ground.body, -wi*2, 0);
	rope5 = new Rope(obj5.body, ground.body, +wi*2, 0);

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(255,255,255);

  ground.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  obj1.display();
  obj2.display();
  obj3.display();
  obj4.display();
  obj5.display();
  
  console.log(ground.body.x)

  if(keyDown("up")){

	var vector = Matter.Vector;
	vector.x = -10;
	vector.y = -10;
	
	Matter.Body.applyForce(obj4.body, obj5.body.position, vector);

  }

  drawSprites();
 
}



