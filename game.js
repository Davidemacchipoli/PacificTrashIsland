var mySec=1;
var mySfum=255;
var textSfum = 255;
var loading= true;

function setup() {

  createCanvas(windowWidth,windowHeight);

  background(0);
  frameRate(30);
  angleMode(DEGREES);
  noStroke();
  textFont('Lato');

  loadImg();
}

function draw() {
  background('#001b2d');

  if (loading){
    push();
    translate(width/2, height/2);
    rotate(frameCount*10);
    noFill();
    strokeWeight(5);
    stroke(255);
    arc(0, 0, 50, 50, 0, 90);
    pop();
  }
  else{
    countLett();

    if(mMove!==0) {
      if(clockSwitch==1 && frameTime%2==0) {
      pushLett();
      }
    showParticles();
    }
    // showTextScore();
    clock();
    showTextEnd();

    fill(255,255,255,textSfum);
    textAlign(CENTER);
    textSize(35);
    text('Move your mouse', width/2,height/2-25);
    text('and erase trash', width/2,height/2+25);
    if(frameTime>=((mySec+1)*30) && mMove!==0) {
      textSfum-=(255/30);
    }
    //INIZIO - sfumatura
      fill(0,27,45,mySfum);
      rect(0,0,width,height);
      mySfum-=(255/(mySec*30));
    // FINE -  sfumatura
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseWheel(event) {
  return false;
}
