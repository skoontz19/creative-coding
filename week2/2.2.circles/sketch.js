function setup() {
  createCanvas(1200, 1200);
  noLoop();
}

function draw() {
  background(220);
  angleMode(DEGREES);

  // push the grid out of the corner
  translate(180,100);

  for (let x = 0; x < 8; x += 1) {
    for (let y = 0; y < 8; y += 1){
      push();

      // move the drawing plan to
      // add a new circle.
      translate(x * 120,y * 120);

      // line thickness
      strokeWeight( 14 );

      // line color
      stroke("white");

      // fill color
      //fill(251,random(0,255),180);
      noFill();

      // draw the arc with random position
      // arc(0,0,100,100,random(0,360),random(0,360) );

      // draw arcs as quarter circles
      arc(0,0,100,100,random([0,90,180,270]),random([0,90,180,270]) );

      pop();
    }
  }
}