function setup(){
    createCanvas(displayWidth,displayHeight);
    background(22, 27, 34);
}

function draw(){
    if (mouseIsPressed) {
        circle(mouseX, mouseY, 40);
    }
}