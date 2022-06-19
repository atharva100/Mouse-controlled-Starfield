

stars=[]
let speed;
function preload(){
  spaceimg= loadImage('space1.jfif');
}
function setup() {
  createCanvas(600, 600);
  for(i=0;i<500;i++){
    s = new Star()
    stars.push(s);
  }
}

function draw() {
  background(spaceimg);
  speed=map(mouseX,10,width,0,30);
  translate(width/2,height/2);
  for(i=0;i<stars.length;i++){
    stars[i].show()
  }
}