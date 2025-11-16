const NUM_OF_NAILS = 256;

const ARTWORK_DIAMETER = 300;

const ARTWORK_RADIUS = ARTWORK_DIAMETER / 2;

function setup() {
  createCanvas(400, 400);
  resetSketch();
}

let nails;
let nailIdx;
let speed;
let lineColor;
let canvasColor;

function resetSketch()
{
  parseInput();
  getSpeed();
  getFgColor();
  getBgColor();
  nailIdx = 0;
  background(canvasColor);
  if (nails.length < 2) {
    noLoop();
  } else {
    loop();
  }
}

function draw() {
  translate(width / 2, height / 2);
  for (let i = 0; i < speed; i++) {
    drawSpan(nails[nailIdx], nails[nailIdx + 1]);
    nailIdx++;
    if (nailIdx == nails.length - 1) {
      noLoop();
    }
  }
}

function drawSpan(fromNailIdx, toNailIdx) {
  let fromCoords = nailIdxToCoords(fromNailIdx);
  let toCoords = nailIdxToCoords(toNailIdx);
  stroke(lineColor);
  fill(lineColor);
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

function getSpeed() {
  speed = Number(document.getElementById("speed").value);
}

function getFgColor() {
  lineColor = color(document.getElementById("fgcolor").value);
  lineColor.setAlpha(20);
}

function getBgColor() {
  canvasColor = color(document.getElementById("bgcolor").value);
}