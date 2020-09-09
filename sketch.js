const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var particles = [];
var divisions = [];
var plinkos = [];
var divisionHeight=400;

function setup() {
  createCanvas(600,800);
  background(0);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(300,800,600,2);

  for(var k=0; k<=width; k=k+100){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  } 
  for(var j=20; j<= width; j=j+50){
    plinkos.push(new Plinko(j,75,10));
  }
  for(var j=40; j<= width; j=j+50){
    plinkos.push(new Plinko(j,165,10));
  }
  for(var j=20; j<= width; j=j+50){
    plinkos.push(new Plinko(j,255,10));
  }
  for(var j=20; j<= width; j=j+50){
    plinkos.push(new Plinko(j,345,10))
  }
  if(frameCount % 90===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

}

function draw() {
  background(0,0,0);  

  if(frameCount % 90===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  Engine.update(engine);


  for(var k = 0; k < divisions.length; k++){
  divisions[k].display();
}
for(var j=0; j < plinkos.length; j++){
  plinkos[j].display();
}
for(var j=0; j < plinkos.length; j++){
  plinkos[j].display();
}
for(var j=0; j < plinkos.length; j++){
  plinkos[j].display();
}
for(var j=0; j < plinkos.length; j++){
  plinkos[j].display();
}
for(var a=0; a < particles.length; a++){
  particles[a].display();
}
}