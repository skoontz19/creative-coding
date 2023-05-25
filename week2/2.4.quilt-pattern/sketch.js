// this is a sketch intended
// to simulate a specific quilt pattern
// --> https://www.internationalquiltmuseum.org/quilt/19970070226e

function setup() {
  createCanvas(1200, 1200);
  noLoop();
  angleMode(DEGREES);
}

function draw() {
  background(220);
  noStroke();
  translate(108,108);
  rect(0,0,960,960);

  for (let x = 0; x < 10; x++){
    for (let y = 0; y < 10; y++){

      // checkerboard conditional:
      // if ((y + x) % 2 == 0){ 

      // quadrants conditional:
      //if ((x < 5 & y < 5) | (x >= 5 & y >= 5)) { 

      // corners conditional
      //if (abs(x - y) > 4){

      push();
      translate(x * 96, y * 96);
      fill("blue");
      rect(0,0,96,96);

      if (x < 5 & y < 5){ 
      // top left, no rotation
        
      }else if (x >= 5 & y < 5){
        // top right
          translate(0,96);
          rotate(270);

      }else if (x < 5 & y >= 5){
        // bottom left
          translate(96,0);
          rotate(90);
      }else{ // bottom right, no rotation?
          translate(96,96);
          rotate(180);

      }
        
      if ((x + y) % 2 == 1){
          translate(96,96);
          rotate(180);
      }

      // // print coordinates:
      // fill("black");
      // textSize(30);
      // text(x + ", " + y, 15,70);

      // diagonal squares line
      
      fill("black");
      for (let b = 0; b < 96; b += 16){
        rect(b,80 - b,16,16);
      }

      // little blue guys
      fill("lightblue");
      rect(32,32,16,16);
      rect(48,48,16,16);

      // green upside-down L
      fill("aquamarine");
      rect(16,16,48,16);
      rect(16,16,16,48);

      // yellow upside down L
      fill("lemonchiffon");
      rect(0,0,80,16);
      rect(0,0,16,80);


      // print coordinates
      // fill("pink");
      // textSize(30);
      // // text(x + ", " + y, 15,70);
      // text((y + x) % 2, 15,70);

      pop();

      

      
    }
  }
}