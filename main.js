img="";

function preload(){
    img =loadImage("IMG_20220219_214612_369.jpg");
}
function setup(){
    canvas= createCanvas(640,420);
    canvas.center();
}
function draw(){
    image(img,0,0,640,420);
    text("My friends catty",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);
}