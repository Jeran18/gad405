var size;

//Initialization function
function setup() {
  createCanvas(500,500);
  //Drawing speed(30fps)
  frameRate(20);
}

function draw() {
  //Call the customShape function
  customShape();
}

  function customShape() {
    var size = random(200);
    var x = random(500);
    var y = random(500);

//Circle shapes and their respective colour
    fill(255, 0, 0);
    rect(x, y, size, size);
    fill(0, 255, 0);
    rect(x, y, size*0.7, size*0.7);
    fill(0, 0, 255);
    rect(x, y, size*0.5, size*0.5);
    fill(255, 0, 255);
    rect(x, y, size*0.25, size*0.25);
    fill(255, 255, 0);
    rect(x, y, size*0.2, size*0.2);

  }
