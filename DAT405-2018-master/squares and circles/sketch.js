//DAT405 / GAD405
//01_ProjectSetup
//In this example we see how to create a canvas, set and display
//the frame rate of the rendering system, and use text to
//display the frame count and rate on screen

//Initialization function
function setup() {
  //Set the size of rendering window - pixels
  createCanvas(500, 500);

  //Set up the frame rate (frames per second)
  //Default is 60 fps
  frameRate(30);

  //Preferences for the text (size, and alignment)
  textSize(25);
  textAlign(CENTER);


  fill(255, 0, 0);
  rect(width/2, height/2, 50, 50);
}

//Rendering function
function draw() {

  //Erase all canvas. Set the color to dark grey
  background(200);
  stroke(0, 255, 255)
  strokeWeight(5)
  line(16, 26, 475, 24);

  stroke(300, 300, 50)
  line(475, 24, 16, 475);

  stroke(255, 0, 0)
  line(16, 475, 475, 475);

  stroke(0,255, 0)
  line(16, 26, 16, 475)

  stroke(0, 0, 255)
  line (16, 26, 475, 475)

  stroke(255, 0, 255)
  line (475, 24, 475, 475)

  stroke(200, 0, 50)
  // a ellipse
  noStroke();
  fill(255, 0, 0)
  ellipse(16, 26, 100, 100)
  fill(0, 255, 0)
ellipse(475, 24, 100, 100)
fill( 0, 0, 255)
ellipse(16, 475, 100, 100)
fill(300, 300, 50)
ellipse(475, 475, 100, 100)
  //Set the color of the text
  //fill(150);
  //Set the text message as the frame count
  //Position text in the middle of the screen

  //noLoop();
}
