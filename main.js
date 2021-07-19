function setup() {
    canvas=createCanvas(500,300);
    canvas.position(150,150);
}
function draw() {
background(0,0,0)
stroke(230,102,10)
circle(440,30,50)
stroke(100,82,147)
square(200,100,70)
stroke(131,24,168)
triangle(500,15,10,22,67,91)
stroke(113,12,147)
square(100,100,70)
stroke(100,82,56)
square(420,220,70)
stroke(123,141,23)
square(400,100,70)
stroke(50,70,30)
triangle(400,300,20,88,50,42)
}
function take_snapshot() {
    save('shapes.png');
}