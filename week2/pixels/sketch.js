let img;
let sampleX = 20;
let sampleY = 20;

function preload(){
  img = loadImage('https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png');
}
function setup() {
  createCanvas(800, 800);
  // noLoop();
  img.loadPixels();
  rectMode(CENTER);
}

function draw() {
  background("#444444");
  noStroke();

  for (let x = 0; x <= img.width; x += sampleX){
    for (let y = 0; y <= img.height; y += sampleY){
      var index = (x + y * img.width) * 4;
      var r = img.pixels[index + 0];
      var g = img.pixels[index + 1];
      var b = img.pixels[index + 2];

      var bright = ((0.3 * r) + (0.59 * g) + (0.11 * b))

      fill(r,g,b);
      rect(x,y,sampleX,sampleY);

    }
  }
}