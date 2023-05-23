function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);


  // outline for the face
  stroke("black");
  strokeWeight(6);

  // the base face circle
  fill("yellow");
  ellipse(200,200,250,250);

  // the eyes
  fill("black");
  stroke("black");
  strokeWeight(1);
  ellipse(160,150,25,75); // left eye
  ellipse(240,150,25,75); // right eye

  // the mouth
  ellipse(200,260,120,40);

}