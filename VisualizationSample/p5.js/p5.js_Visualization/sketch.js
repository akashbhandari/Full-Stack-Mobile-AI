//A baisc visualization 

function setup() {
  // setting up the environment
  createCanvas(1080,720);
}

function draw() {
  // drawing basic shapes
  //ellipse(50,50,85,90);

  //Draws white traigles at the mouse's position and the color changes to black when the mouse is pressed!

  if (mouseIsPressed) {
  	fill(0);
  }
  else{
  	fill(350);
  }
  //ellipse(mouseX, mouseY, 100, 100);
  triangle(mouseX, mouseY, 320, 100, 310, 80);

//drawing a flower and moving it   
/*
  translate(580, 200);
  noStroke();
  for (var i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);
  }
 */
 
}