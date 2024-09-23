let diameter = 20;


function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);

  strokeWeight(5);

  gui = createGui();

  diameterSlider = createSlider("diameter",200,300,100,30,10,150)
  // x, y, length, height, min, max
  diameterSlider.val = 150;

  rotateSlider = createSlider("rotate text",200,250,100,30,0,360);
  rotateSlider.val = 0;
}

function draw() {
  background(125);
  drawGui();

  fill(255);
  circle(300,100,diameterSlider.val);

  text(diameterSlider.label, 200,345);
  text(rotateSlider.label, 200,295);

  push();
  translate(40,100);
  rotate(radians(rotateSlider.val));
  text("graphic design is my passion",0,0);
  pop();

}
