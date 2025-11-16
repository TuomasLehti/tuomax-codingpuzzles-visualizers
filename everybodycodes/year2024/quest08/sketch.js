const NUM_OF_NAILS = 8;

const DIAMETER = 300;

function setup() {
  createCanvas(400, 400);

  fill(255);
  strokeWeight(2);
  stroke(0, 0, 0);

  circle(width / 2, height / 2, DIAMETER);

  drawNails();
}

function draw() {
}

function drawNails() {
  var degreesPerNail = 360 / NUM_OF_NAILS;
  console.log(degreesPerNail);
}
