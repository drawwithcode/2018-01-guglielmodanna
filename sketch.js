function setup() {
	createCanvas(400, 480); // Was (500, 500)
	ellipseMode(RADIUS);
}

var x = 180;
var y = 480;
var bodyHeight = 149;

var minimumNeckHeight = 52;
var neckDelta = 30;
var neckHeight;
var radius = 56;

var lashesRadius = 18;

var angle = 0.0; // Angle for motion
var speed = 1;

function draw() {

	background(180);

	// Falling motion
	y += 5;

	// Background
	strokeWeight(2);
	stroke(90);
	fill(200);
	beginShape();
	vertex(0, -2);
	vertex(65, 93);
	vertex(width-65, 93);
	vertex(width, -2);
	endShape(CLOSE);

	line(65, 93, 65, 373);
	line(width-65, 93, width-65, 373);

	beginShape();
	vertex(0, height+2);
	vertex(65, 373);
	vertex(width-65, 373);
	vertex(width, height+2);
	endShape(CLOSE);

	// First portal
	strokeWeight(5)
	stroke(255, 141, 12);
	fill(255, 190, 12);
	ellipse(x+5, 0, 100, 30);

	// Second portal
	stroke(58, 160, 255);
	fill(12, 64, 255);
	ellipse(x+5, height, 100, 30);

	// Neck
	neckHeight = minimumNeckHeight + sin(angle) * neckDelta;
	angle += 0.05;

	// Adjust height of the head
	var ny = y - bodyHeight - neckHeight - radius;

	strokeWeight(3);
	stroke(102);
	line(x+2, y-bodyHeight, x+2, ny);
	line(x+12, y-bodyHeight, x+12, ny);
	line(x+22, y-bodyHeight, x+22, ny);

	// Anntennae
	strokeWeight(2);
	line(x+12, ny, x-18, ny-43);
	line(x+12, ny, x+42, ny-99);
	line(x+12, ny, x+78, ny-15);

	// Body
	noStroke();
	fill(102);
	ellipse(x, y-33, 33, 33);
	fill(255);
	rect(x-45, y-bodyHeight, 90, bodyHeight-33);
	fill(102);
	rect(x-45, y-bodyHeight+17, 90, 6);

	// Head
	fill(255);
	ellipse(x+12, ny, radius, radius);
	strokeWeight(2);
	stroke(200);

	line(x+28, ny+8, x-8, ny+8);
	line(x-8, ny+8, x-32, ny+34);
	line(x+28, ny+8, x+58, ny+8);
	line(x+58, ny+8, x+64, ny+21);
	line(x+28, ny+8, x+27, ny-23);
	line(x+27, ny-23, x+16, ny-55);

	// Eye
	fill(0);
	ellipse(x+28, ny+8, 21, 21);

	// Lashes
	fill(153);
	stroke(0, 93, 255);
	strokeWeight(1);
	for (var i = 0; i < TWO_PI; i += QUARTER_PI/3) {
		line(x+28, ny+8,
			x+28 + (lashesRadius * cos(i)),
			ny+8 + (lashesRadius * sin(i)));
	}

	// Pupil
	fill(0);
	noStroke();
	ellipse(x+28, ny+8, 6, 6);

	if (y > height + bodyHeight + neckHeight + neckDelta + radius + 50) {
		y = 0;
	}
}


function keyPressed() {
  	if (keyCode === 32) {
    	console.log(mouseX, mouseY);
  	}
}
