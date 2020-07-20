const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,750,100,100);
    box2 = new Box(900,750,100,100);
    ground = new Ground(600,height,1200,20)
    pig1 = new Pig(800,750);
    bird1 = new Bird(200,750);
    log1 = new Log(800,720,300,PI/2);
    box3 = new Box(700,650,100,100);
    box4 = new Box(900,650,100,100);
    pig2 = new Pig(800,650);
    log2 = new Log(800,620,300,PI/2);
    box5 = new Box(800,550,100,100);
    log3 = new Log(850,420,190,-PI/7);
    log4 = new Log(750,420,190,PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    text(mouseX + "," + mouseY,200,20);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    bird1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}