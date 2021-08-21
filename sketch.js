const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerBase;
var playerBase;
var player;
var computer;

function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  computerBase = new ComputerBase(300,random(450,height-300),180,150);
  computer = new Computer(300,computerBase.body.position.y-153,50,180);
  
  playerBase = new PlayerBase(width-200, random(450, height - 300), 180, 150);
  player = new Player(width-200, playerBase.body.position.y - 153, 50, 180);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  computerBase.display();
  playerBase.display();

   //display Player and computerplayer
   computer.display();
   player.display();


}
