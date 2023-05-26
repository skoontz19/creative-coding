
let img;
let sampleX = 100; // sample distance X
let sampleY = 100; // sample distance Y

function preload(){
  // preload the image file and create the 
  // img object
  img = loadImage('https://zachwhalen.github.io/creative-coding/week2/pixels/prime.jpg');
}

function setup() {
  createCanvas(700, 700);

  // load all of the pixel data
  img.loadPixels();
}

function draw() {
  background(220);
  noStroke();
  translate(100,100);
  //image(img, 0, 0); 

  // nested for loops to step through 
  // the image 
  for (let x = 0; x <= img.width; x += sampleX ){
    for (let y = 0; y <= img.height; y += sampleY){

      // correlate where we are on the image with 
      // the position img.pixels array
      var index = (x + y * img.width) * 4;

      // get the r value of the current pixel
      var r = img.pixels[index + 0];
      // get the g value of the current pixel
      var g = img.pixels[index + 1];
      // get the r value of the current pixel
      var b = img.pixels[index + 2];

      // set a fill color using those r,g,b numbers
      fill(r,g,b);

      // draw a rectangle for testing
      // replace this with something else!
      rect(x,y,sampleX,sampleY);

    }
  }


}