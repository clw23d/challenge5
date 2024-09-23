let diameter = 20;


function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);

  strokeWeight(5);

  gui = createGui();
  diameterSlider = createSlider("diameter",200,300,100,30,10,200)
}

function draw() {
  background(125);
  drawGui();

  fill(255);
  circle(100,100,diameterSlider.val);

  text("graphic design is my passion",40,100)

  text(diameterSlider.label, 200,350)

}
