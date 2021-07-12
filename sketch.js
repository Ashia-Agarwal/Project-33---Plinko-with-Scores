const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var plinkos = [];
var particles = [];
var divisions = [];
var score = 0, count = 0, gamestate = "start";
var particle = null, flag = false;

function setup() {
  createCanvas(480, 700);
  engine = Engine.create();
	world = engine.world;
  ground = new Ground(width/2, height - 15, width, 30, "white");
  for(var k = 0;k <= width; k += 80) {
    divisions.push(new Ground(k, height - 150, 10, 300, "white"));
  }
  for(var i = 15;i <= width;i += 50) {
    for(var j = 50; j <= 300; j += 50) {
      plinkos.push(new Plinko(i, j));
    }
  }
  Engine.run(engine);
}

function draw() {
  background(0);
  if(gamestate == "start") {
    gamestate = "play";
  }
  if(gamestate == "play") {
    ground.display();
    for(var i = 0; i < plinkos.length; i++) {
      plinkos[i].display();
    }
    for(var i = 0; i < particles.length; i++) {
      particles[i].display();
    }
    for(var i = 0; i < divisions.length; i++) {
      divisions[i].display();
      s = 0;
      if(i == 0 || i == 5) {
        s = 500;
      } else if(i == 1 || i == 4) {
        s = 200;
      } else {
        s = 100;
      }
      if(flag == true && particle.body.position.x > divisions[i].body.position.x && particle.body.position.x < divisions[i].body.position.x + 80 
        && particle.body.position.y > height - 170) {
        score += s;
        flag = false;
      }
      text(s, divisions[i].body.position.x + 20, height - 250);
    }
    textSize(20);
    text("Score - " + score, width - 150, 25);
  }
  if(count == 6) {
    gamestate = "end";
    textAlign(CENTER);
    textSize(25);
    text("Your Final Score is " + score, width/2, height/2);  
  }
}

function mousePressed() {
  if(gamestate == "play") {
    particle = new Particle(mouseX, 10);
    particles.push(particle);
    count+=1;
    flag = true;
  }
}