let img;
let sampleX = 40;
let sampleY = 40;

function preload(){
  img = loadImage('https://i.kym-cdn.com/entries/icons/original/000/000/166/keyboar.jpg');
}

function setup() {
  createCanvas(800, 800);
  // noLoop();
}

function draw() {
  background(220);

  for (let x = 0; x <= img.width; x += sampleX){
    for (let y = 0; y <= img.height; y += sampleY){
      var index = (x + y * img.width) * 4;
      var r = img.pixels[index + 0];
      var g = img.pixels[index + 1];
      var b = img.pixels[index + 2];

      fill(r,g,b);
      rect(x,y,sampleX,sampleY);

    }
  }



}