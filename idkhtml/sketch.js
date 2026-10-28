
function setup() {
  createCanvas(400, 400);
  background(240);
  noLoop();
}

function draw() {
  fill(255, 220, 0);
  stroke(0);
  strokeWeight(3);
  ellipse(200, 200, 250, 250);

  fill(0, 200, 80);
  ellipse(155, 165, 35, 45);
  ellipse(245, 165, 35, 45);

  noFill();
  stroke(0);
  strokeWeight(5);
  arc(200, 210, 130, 90, 0, PI);
}