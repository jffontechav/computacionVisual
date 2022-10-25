let centerS;
let angleCenterS = 0;

let one;
let angleOne = 90;
let angleOneM = 45;

let two;
let angleTwo = 0;

let three;
let angleThree=180;

let four;
let angleFour=45;
let angleFourM1=45;
let angleFourM2=70;

let five;
let angleFive=30;
let six;
let angleSix=270;
let seven;
let angleSeven=225;
let eight;
let angleEight=300;

let bg;

let camera;

let Saturno;
let angleSaturno=0;

let Aro;
let angleAro=90;

let Aro2;
let angleAro2=0;

let Aro3;
let angleAro3=180;

let Torus;
let angleTorus=0;

function preload() {
  centerS = loadImage("img1.jpg");
  one = loadImage("img2.jpg");
  two = loadImage("img3.jpg");
  three = loadImage("img4.jpg");
  
  four = loadImage("img5.jpg");
  five = loadImage("img6.jpg");
  six = loadImage("img7.jpg");
  seven = loadImage("img8.jpg");
  eight = loadImage("img9.jpg");
  
  
}

function setup() {
  bg = loadImage("starss.jpg");
  createCanvas(1200, 1200, WEBGL);
}

function draw() {
  background(0);
  
  orbitControl();
  noStroke();
  
  push(); 
  //rotateY(angleCenter);
  texture(centerS);
  sphere(100);
  //angleCenter = angleCenter + 0.01;
  
  
  
  
  push(); 
  //Planet one
  rotateX(angleThree+20);
  rotateZ(angleTwo+10);
  translate(cos(angleThree)+20, 125);
  texture(one);
  sphere(10);
  angleThree = angleThree + 0.05
  pop();
  
  push(); 
  //Planet two
  rotateY(angleTwo);
  translate(cos(angleTwo)+200, 0);
  
  
  rotateY(angleTwo+20);
  texture(two);
  sphere(25);
  angleTwo = angleTwo + 0.03;
  pop();
  
  //Planet three
  push(); 
  
  rotateY(angleOne);
  translate(cos(angleOne)+350,0);
  
  
  push();
  //Moon of Planet three
  rotateY(angleOneM);
  translate(cos(angleOneM)+70,0);
  rotateZ(angleOneM);
  texture(one);
  sphere(5);
  angleOneM = angleOneM + 0.07;
  pop();
  
  rotateY(angleOne+15);
  texture(three);
  sphere(30);
  angleOne = angleOne + 0.02;
  
  pop();
  
  push(); 
  //Planet four
  rotateY(angleFour);
  translate(cos(angleFour)+450, 0);
  //Moons of Planet four
  push()
  rotateY(angleFourM1);
  translate(cos(angleFourM1)+60,0);
  rotateZ(angleFourM1);
  texture(three);
  sphere(5);
  angleFourM1 = angleFourM1 + 0.07;
  pop();
  
  push();
  rotateY(angleFourM2);
  translate(cos(angleFourM2)+80,0);
  rotateZ(angleFourM2);
  texture(three);
  sphere(6);
  angleFourM1 = angleFourM1 + 0.06;
  pop();
  
  
  rotateY(angleFour+20);
  texture(four);
  sphere(21);
  angleFour = angleFour + 0.015;
  pop();
  
  push(); 
  //Planet five
  rotateY(angleFive);
  translate(cos(angleFive)+550, 0);
  
  
  rotateY(angleTwo+20);
  texture(five);
  sphere(55);
  angleFive = angleFive + 0.005;
  pop();
  //Planet six
   push(); 
  rotateY(angleSaturno + 1000);
  translate(cos(angleSaturno)+700, 0);
  
  push();  
  rotateY(90);
  rotateX(90);
  texture(two);
  torus(100,1);
  angleTorus = angleTorus + 1
  pop();
  
  push();  
  rotateY(90);
  rotateX(90);
  texture(two);
  torus(90,1);
  angleTorus = angleTorus + 1
  pop();
  
  push();  
  rotateY(90);
  rotateX(90);
  texture(two);
  torus(80,1);
  angleTorus = angleTorus + 1
  pop();
  
  push();  
  rotateY(90);
  rotateX(90);
  texture(two);
  torus(70,1);
  angleTorus = angleTorus + 0.1
  pop();
  
  push();  
  rotateY(90);
  rotateX(90);
  texture(two);
  torus(60,1);
  angleTorus = angleTorus + 1
  pop();
  
  push();  
  rotateY(90);
  rotateX(90);
  texture(two);
  torus(50,1);
  angleTorus = angleTorus + 1
  pop();
  
  
  texture(six);
  sphere(40);
  angleSaturno = angleSaturno + 0.003
  pop();
  
  /*
  push(); 
  
  //Planet six
  
  rotateY(angleSix);
  
  translate(cos(angleSix)+700, 0);
  rotateX(80);
  circle(0,0,200);
  
  rotateY(angleSix+20);
  texture(six);
  sphere(40);
  
  angleSix = angleSix + 0.001;
  pop();
  */
  
  //Planet seven
  push();
  rotateY(angleSeven);
  
  translate(cos(angleSeven)+800, 0);
  
  rotateY(angleSeven+20);
  texture(seven);
  sphere(35);
  
  angleSeven = angleSeven + 0.001;
  pop();
  
  
  //Planet eight
  push();
  rotateY(angleEight);
  
  translate(cos(angleEight)+900, 0);
  
  rotateY(angleEight+20);
  texture(eight);
  sphere(20);
  
  angleEight = angleEight + 0.001;
  pop();
  
  pop();
}