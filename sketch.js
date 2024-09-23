let diameter = 20;

let circlefill = 255;


function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);

  strokeWeight(5);

  gui = createGui();

//  toggle.setStyle({
//      fillLabelOn: color(255,0,0)
//  });

  fillCheckbox = createCheckbox("fill",310,250,20,20);

  diameterSlider = createSlider("diameter",200,300,100,30,10,150)
  // x, y, length, height, min, max
  diameterSlider.val = 150;
  diameterSlider.setStyle({
    fillBg: color(255,255,0)
  })

  rotateSlider = createSlider("rotate text",200,250,100,30,0,360);
  rotateSlider.val = 0;
}

function draw() {
  background(125);
  drawGui();

 if (fillCheckbox.val) {
   let circlefill = 0;
   fill(circlefill);
   circle(100,150,20);
 } else {
    let circlefill = 255
    fill(circlefill);
    circle(100,150,20);
  }

  fill(circlefill);
  circle(300,100,diameterSlider.val);

  text(diameterSlider.label, 200,345);
  text(rotateSlider.label, 200,295);

  push();
  translate(40,100);
  rotate(radians(rotateSlider.val));
  text("graphic design is my passion",0,0);
  pop();

}
