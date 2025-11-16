const NUM_OF_NAILS = 256;

const ARTWORK_DIAMETER = 300;

const ARTWORK_RADIUS = ARTWORK_DIAMETER / 2;

function setup() {
  createCanvas(400, 400);
//  frameRate(16);
  resetSketch();
//  translate(width / 2, height / 2);
//  drawNails();
}

let nails;
let nailIdx = 0;

function resetSketch()
{
  background(255);
  parseInput();
  nailIdx = 0;
}


function draw() {
  translate(width / 2, height / 2);
  drawSpan(nails[nailIdx], nails[nailIdx + 1]);
  nailIdx++;
  if (nailIdx == nails.length - 1) {
    noLoop();
    console.log("Done.");
  }
  drawSpan(nails[nailIdx], nails[nailIdx + 1]);
  nailIdx++;
  if (nailIdx == nails.length - 1) {
    noLoop();
    console.log("Done.");
  }
}

function drawSpan(fromNailIdx, toNailIdx) {
  let fromCoords = nailIdxToCoords(fromNailIdx);
  let toCoords = nailIdxToCoords(toNailIdx);
  stroke(0, 0, 128, 24);
  fill(0, 0, 128, 24);
  strokeWeight(1);
  line(fromCoords.x, fromCoords.y, toCoords.x, toCoords.y);
}

function nailIdxToCoords(nailIdx) {
  let angleDeg = (nailIdx * 360 / NUM_OF_NAILS) - 90;
  let angleRad = angleDeg * PI / 180;
  let x = ARTWORK_RADIUS * cos(angleRad);
  let y = ARTWORK_RADIUS * sin(angleRad);
  return createVector(x, y);
}

function parseInput() {
  nails = document
    .getElementById("ecinput").value
    .split(",").map(str => Number(str));
  return nails;
}

