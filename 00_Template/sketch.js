//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects
var  angle = 0;
//Initialization function
function setup() {
  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console

  createCanvas(710,500);
  //Set a background color
  background(200, 0, 255);
  fill(0,255,0);
}

//Rendering function
function draw() {

    // Draw only when mouse is pressed
    //when mouse is pressed draws
  if (mouseIsPressed == true) {
    angle += 5;

    var val = cos(radians(angle)) * 30.0;
    for (var a = 0; a < 360; a += 75) {
      var xoff = cos(radians(a)) * val;
      var yoff = sin(radians(a)) * val;
      fill(random(255),random(255) ,random(255));
      ellipse(mouseX + xoff, mouseY + yoff, val, val);
    }
    //
    fill(255,0,0);
    ellipse(mouseX, mouseY, 2, 3)
  }
  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console


}
