const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bckImage;
var ground;
var superman;
var supermanFly;
var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12, block13;
var block14, block15, block16, block17, block18, block19, block20, block21;
var block22, block23, block24, block25, block26;
var monster;

function preload() {
  //preload the images here
  bckImage = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);

  engine = Engine.create();
  world = engine.world;
  // create sprites here

  ground = new Ground(100,600,2000,20);

  superman = new Hero(200,400,300);

  supermanFly = new Fly(superman.body, {x:200, y:150});

  block1 = new Block(500,550,50,50);
  block2 = new Block(500,500,50,50);
  block3 = new Block(500,450,50,50);
  block4 = new Block(500,400,50,50);
  block5 = new Block(500,350,50,50);
  block6 = new Block(500,300,50,50);
  block7 = new Block(500,250,50,50);

  block8 = new Block(580,550,50,50);
  block9 = new Block(580,500,50,50);
  block10 = new Block(580,450,50,50);
  block11 = new Block(580,400,50,50);
  block12 = new Block(580,350,50,50);
  block13 = new Block(580,300,50,50);

  block15 = new Block(660,550,50,50);
  block16 = new Block(660,500,50,50);
  block17 = new Block(660,450,50,50);
  block18 = new Block(660,400,50,50);
  block19 = new Block(660,350,50,50);
  block20 = new Block(660,300,50,50);
  block21 = new Block(660,250,50,50);
  block14 = new Block(660,200,50,50);

  block22 = new Block(740,550,50,50);
  block23 = new Block(740,500,50,50);
  block24 = new Block(740,450,50,50);
  block25 = new Block(740,400,50,50);
  block26= new Block(740,350,50,50);

  monster = new Monster(850,100,150);

}

function draw() {
  background(bckImage);

  Engine.update(engine);

  ground.display();

  superman.display();

  supermanFly.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();

  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();

  monster.display();

}


function mouseDragged(){

  Matter.Body.setPosition(superman.body, {x:mouseX, y:mouseY});
}
