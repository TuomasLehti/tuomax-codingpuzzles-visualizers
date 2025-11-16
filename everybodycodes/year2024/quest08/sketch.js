const NUM_OF_NAILS = 8;

const ARTWORK_DIAMETER = 300;

const ARTWORK_RADIUS = ARTWORK_DIAMETER / 2;

function setup() {
  createCanvas(400, 400);
  frameRate(16);
  translate(width / 2, height / 2);
//  drawNails();
}

let fromIdx = 0;

let toIdx = 1;

function draw() {
  translate(width / 2, height / 2);
  drawSpan(fromIdx, toIdx);
  toIdx++;
  if (toIdx == NUM_OF_NAILS) {
    fromIdx++;
    if (fromIdx == NUM_OF_NAILS) {
      noLoop();
    }
    toIdx = fromIdx + 1;
  }
}

function drawNails() {
  for (let idx = 0; idx < NUM_OF_NAILS; idx++)
      drawNail(idx);
}

function drawNail(idx) {
  let coords = nailIdxToCoords(idx);
  fill(0);
  stroke(0);
  strokeWeight(2);
  circle(coords.x, coords.y, 10);
}

function drawSpan(fromNailIdx, toNailIdx) {
  let fromCoords = nailIdxToCoords(fromNailIdx);
  let toCoords = nailIdxToCoords(toNailIdx);
  stroke(0, 0, 128);
  fill(0, 0, 128);
  strokeWeight(2);
  line(fromCoords.x, fromCoords.y, toCoords.x, toCoords.y);
}

function nailIdxToCoords(nailIdx) {
  let angleDeg = (nailIdx * 360 / NUM_OF_NAILS) - 90;
  let angleRad = angleDeg * PI / 180;
  let x = ARTWORK_RADIUS * cos(angleRad);
  let y = ARTWORK_RADIUS * sin(angleRad);
  return createVector(x, y);
}
