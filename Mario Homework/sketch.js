//DAT405 / GAD405
//S2-04_Mario

//Set variables
var newColor = 5;
var xPlus = 200;
var yPlus = 200;
var x = 0;
var y = 0;


function setup(){
  createCanvas(500, 400);
  frameRate(5);
  noStroke();
}

function draw(){
  background(220);

  if (newColor === 0) fill(255, 18, 21);
  else if (newColor === 1) fill(18, 255, 21);
  else if (newColor === 2) fill(18, 21, 255);
  else fill(random(255), random(255), random(255));
customShape(xPlus+x, yPlus+y);

function customShape(x, y){
  fill(244, 11, 11)
  rect(30+x, 0+y, 10, 10);
  rect(40+x, 0+y, 10, 10);
  rect(50+x, 0+y, 10, 10);
  rect(60+x, 0+y, 10, 10);
  rect(70+x, 0+y, 10, 10);
  rect(20+x, 10+y, 10, 10);
  rect(30+x, 10+y, 10, 10);
  rect(40+x, 10+y, 10, 10);
  rect(50+x, 10+y, 10, 10);
  rect(60+x, 10+y, 10, 10);
  rect(70+x, 10+y, 10, 10);
  rect(80+x, 10+y, 10, 10);
  rect(90+x, 10+y, 10, 10);
  rect(100+x, 10+y, 10, 10);

  //Hair: 128, 200, 4
  fill(0);
  rect(20+x, 20+y, 10, 10);
  rect(30+x, 20+y, 10, 10);
  rect(40+x, 20+y, 10, 10);
  rect(30+x, 30+y, 10, 10);
  rect(30+x, 40+y, 10, 10);
  rect(40+x, 40+y, 10, 10);
  rect(10+x, 30+y, 10, 10);
  rect(10+x, 40+y, 10, 10);
  rect(10+x, 50+y, 10, 10);
  rect(20+x, 50+y, 10, 10);

  //Face: 249, 168, 53
  fill(249, 168, 53);
  rect(20+x, 30+y, 10, 10);
  rect(20+x, 40+y, 10, 10);
  rect(50+x, 20+y, 10, 10);
  rect(60+x, 20+y, 10, 10);
  rect(80+x, 20+y, 10, 10);
  rect(40+x, 30+y, 10, 10);
  rect(50+x, 30+y, 10, 10);
  rect(60+x, 30+y, 10, 10);
  rect(80+x, 30+y, 10, 10);
  rect(90+x, 30+y, 10, 10);
  rect(100+x, 30+y, 10, 10);
  rect(50+x, 40+y, 10, 10);
  rect(60+x, 40+y, 10, 10);
  rect(70+x, 40+y, 10, 10);
  rect(90+x, 40+y, 10, 10);
  rect(100+x, 40+y, 10, 10);
  rect(110+x, 40+y, 10, 10);
  rect(30+x, 50+y, 10, 10);
  rect(40+x, 50+y, 10, 10);
  rect(50+x, 50+y, 10, 10);
  rect(60+x, 50+y, 10, 10);
  rect(30+x, 60+y, 10, 10);
  rect(40+x, 60+y, 10, 10);
  rect(50+x, 60+y, 10, 10);
  rect(60+x, 60+y, 10, 10);
  rect(70+x, 60+y, 10, 10);
  rect(80+x, 60+y, 10, 10);
  rect(90+x, 60+y, 10, 10);
  rect(100+x, 60+y, 10, 10);

  //Eyes, Mustache: 0
  fill(0);
  rect(70+x, 20+y, 10, 10);
  rect(70+x, 30+y, 10, 10);
  rect(80+x, 40+y, 10, 10);
  rect(70+x, 50+y, 10, 10);
  rect(80+x, 50+y, 10, 10);
  rect(90+x, 50+y, 10, 10);
  rect(100+x, 50+y, 10, 10);

  //Blouse: 255, 18, 21
  rect(20+x, 70+y, 10, 10);
  rect(30+x, 70+y, 10, 10);
  rect(50+x, 70+y, 10, 10);
  rect(60+x, 70+y, 10, 10);
  rect(70+x, 70+y, 10, 10);
  rect(10+x, 80+y, 10, 10);
  rect(20+x, 80+y, 10, 10);
  rect(30+x, 80+y, 10, 10);
  rect(50+x, 80+y, 10, 10);
  rect(60+x, 80+y, 10, 10);
  rect(80+x, 80+y, 10, 10);
  rect(90+x, 80+y, 10, 10);
  rect(100+x, 80+y, 10, 10);
  rect(0+x, 90+y, 10, 10);
  rect(10+x, 90+y, 10, 10);
  rect(20+x, 90+y, 10, 10);
  rect(30+x, 90+y, 10, 10);
  rect(80+x, 90+y, 10, 10);
  rect(90+x, 90+y, 10, 10);
  rect(100+x, 90+y, 10, 10);
  rect(110+x, 90+y, 10, 10);
  rect(20+x, 100+y, 10, 10);
  rect(90+x, 100+y, 10, 10);

  //Trousers: 30, 57, 246
  fill(49, 91, 216+x);
  rect(40+x, 70+y, 10, 10);
  rect(40+x, 80+y, 10, 10);
  rect(70+x, 80+y, 10, 10);
  rect(40+x, 90+y, 10, 10);
  rect(50+x, 90+y, 10, 10);
  rect(60+x, 90+y, 10, 10);
  rect(70+x, 90+y, 10, 10);
  rect(30+x, 100+y, 10, 10);
  rect(50+x, 100+y, 10, 10);
  rect(60+x, 100+y, 10, 10);
  rect(80+x, 100+y, 10, 10);
  rect(30+x, 110+y, 10, 10);
  rect(40+x, 110+y, 10, 10);
  rect(50+x, 110+y, 10, 10);
  rect(60+x, 110+y, 10, 10);
  rect(70+x, 110+y, 10, 10);
  rect(80+x, 110+y, 10, 10);
  rect(20+x, 120+y, 10, 10);
  rect(30+x, 120+y, 10, 10);
  rect(40+x, 120+y, 10, 10);
  rect(50+x, 120+y, 10, 10);
  rect(60+x, 120+y, 10, 10);
  rect(70+x, 120+y, 10, 10);
  rect(80+x, 120+y, 10, 10);
  rect(90+x, 120+y, 10, 10);
  rect(20+x, 130+y, 10, 10);
  rect(30+x, 130+y, 10, 10);
  rect(40+x, 130+y, 10, 10);
  rect(70+x, 130+y, 10, 10);
  rect(80+x, 130+y, 10, 10);
  rect(90+x, 130+y, 10, 10);

  //Buttons: 249, 168, 53
  fill(249, 168, 53);
  rect(40+x, 100+y, 10, 10);
  rect(70+x, 100+y, 10, 10);

  //Hands
  rect(0+x, 100+y, 10, 10);
  rect(10+x, 100+y, 10, 10);
  rect(100+x, 100+y, 10, 10);
  rect(110+x, 100+y, 10, 10);
  rect(0+x, 110+y, 10, 10);
  rect(10+x, 110+y, 10, 10);
  rect(20+x, 110+y, 10, 10);
  rect(90+x, 110+y, 10, 10);
  rect(100+x, 110+y, 10, 10);
  rect(110+x, 110+y, 10, 10);
  rect(0+x, 120+y, 10, 10);
  rect(10+x, 120+y, 10, 10);
  rect(100+x, 120+y, 10, 10);
  rect(110+x, 120+y, 10, 10);

  //Boots: 128, 4, 4
  if (newColor === 0) fill(255, 18, 21);
  else if (newColor === 1) fill(18, 255, 21);
  else if (newColor === 2) fill(18, 21, 255);
  else fill(random(255), random(255), random(255));
  rect(10+x, 140+y, 10, 10);
  rect(20+x, 140+y, 10, 10);
  rect(30+x, 140+y, 10, 10);
  rect(80+x, 140+y, 10, 10);
  rect(90+x, 140+y, 10, 10);
  rect(100+x, 140+y, 10, 10);
  rect(0+x, 150+y, 10, 10);
  rect(10+x, 150+y, 10, 10);
  rect(20+x, 150+y, 10, 10);
  rect(30+x, 150+y, 10, 10);
  rect(80+x, 150+y, 10, 10);
  rect(90+x, 150+y, 10, 10);
  rect(100+x, 150+y, 10, 10);
  rect(110+x, 150+y, 10, 10);
}

}
function keyPressed(){
  if (keyCode == RIGHT_ARROW){
    x = x = 10;
  }
  else if (keyCode == LEFT_ARROW){
    x = x - 10;
  }
  else if (keyCode == UP_ARROW){
    y = y - 10;
  }
  else if (keyCode == DOWN_ARROW){
     y = y + 10;
  }
}
