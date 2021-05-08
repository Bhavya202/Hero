const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, bg;
var box1, box2, box3, box4, box9;
var box5, box6, box7, box8, box10;
var hero, monster, rope, ground;

function preload() {
  //preload the image and the files
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  //create the canvas
  createCanvas(3000, 700);

  //run the engine and adds it to the world
  engine = Engine.create();
  world = engine.world;

  //create the object
  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, {x: 500, y: 50});
  monster = new Monster(1100,550,300);

  box1 = new Box(900, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);

  box5 = new Box(800, 100, 70, 70);
  box6 = new Box(800, 100, 70, 70);
  box7 = new Box(800, 100, 70, 70);

  box8 = new Box(700, 100, 70, 70);
  box9 = new Box(700, 100, 70, 70);

  box10 = new Box(600, 100, 70, 70);
}

function draw() {
  //create the background and gives the image to it
  background(bg);

  //update the engine
  Engine.update(engine);

  //play the sound


  //display the objects
  ground.display();

  hero.display();
  rope.display();
  monster.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display()

  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();

  box10.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY});
}