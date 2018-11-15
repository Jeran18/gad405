//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects

//Initialization function
function setup() {
  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
console.log("Initialization: OK")
createCanvas(500,500);
noStroke();
}

//rendering function
function draw() {

var M = map(mouseX, 0, width, 0 , 255);
var X = map(mouseY, 0, height, 0 ,255);
var Y = map(mouseX, 0, width, 255, 0);
var Y2 = map(mouseY, 0, height, 255, 0);
background(0,0,0);

fill(255, 100, 100, M);
rect(0, 0, 250, 250);

fill(100, 100, 255, X);
rect(250, 0, 250, 250);

fill(100, 255, 100, Y);
rect(0, 250, 250, 250);

fill(255, 255, 100, Y2);
rect(250, 250, 250, 250);

  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
}
