const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon,cannonBall;




function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 180, 310);
  cannon = new Cannon(180, 110, 100, 30, angle);
 // cannonBall = new CannonBall(180,110);

}

function draw() {
  image(backgroundImg, 0, 0, width, height);
  Engine.update(engine);

  ground.display();
  tower.display();
  cannon.display();
 // cannonBall.display();
 
}



