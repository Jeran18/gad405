//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects
var angle =0;
var r = 255;
var g =0;
var b =0;
//Initialization function
function setup() {
  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console

  createCanvas(710, 500);
  //set background colour
  background(200, 0, 255);
  //fill(0, 255, 0);
}

//Rendering function
function draw() {

  //draw only when mouse is pressed
  //when mouse is pressed draws
  //if statement shows that when the mouseIsPressed
  //the boolen true is stated, meaning it will produce
  //the shapes and colours correctly when mouseIsPressed
  if (mouseIsPressed == true) {
    angle += 5;
//20.0 means the size of each indivial ellipse
//using different values results in different shapes and sizes
//360 is the circumference of a circle
//var is variable, my variable is input, which is equal to value
    var input = cos(radians(angle)) * 40.0;
    //this is shown as a loop effect
    for (var a = 0; a < 360; a += 75) {
//cos and sin are maths
//radians is a unit of measurement
      var xoff = cos(radians(a)) * input;
      var yoff = sin(radians(a)) * input;

//random fill means each ellipse will produce a random colour
//255 means all colours from the RGB scale
//fill means to fill the object underneath
      fill(r, g, b);
      ellipse(mouseX + xoff, mouseY + yoff, input, input);
    }
  //this fill was to fill in the small cricle in the middle
  //however it can be hard to find
  fill(r, g, b);
  ellipse(mouseX, mouseY, 2, 3)
  }
}
//this function means that when keys 1-4 are keyPressed
//the colour of the circles begin to change in the 255 spectrum
//however it did not become as random as i had intended
//yet it still runs perfectly fine
function keyPressed(){
  if (key == "1") r = 255; g = 0; b = 0;
  if (key == "2") r = 0; g = 255; b = 0;
  if (key == "3") r = 0; g = 0; b = 255;
  if (key == "4") r = random(255); g = random(255); b = random(255);
}
    //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
