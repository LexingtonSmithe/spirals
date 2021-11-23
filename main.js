let R = 150; //scale
let k = random(2); //ratio of first two circles
let k2 = random(1); //ratio of first to third
let p = random(1); //ratio of the paths?
let h = 0; //distance of lever to point

let count = 0;
let timer = 1;

let red = 255;
let green = 0;
let blue = 0;
let sWeight = 1;

let kUp = true;
let k2Up = true;
let hUp = true;
let pUp = true;
let sWeightUp = true;

function setup() {
  createCanvas(windowWidth - 5, windowHeight - 5);
  R = windowHeight / 8;
  stroke(255,0,0);
  fill(255,0,0);
  //frameRate(200);
}

function draw() {

  count ++;

  if(count >= timer){
    updateColourWheel();
    updateK();
    updateKTwo();
    updateP();
    updateH();
    updateSWeight();
    count = 0;

  }

  background(0);
  //text("Controls: Q,A: k, W,S: k2, E,D: p, R,F: h",10,10);
  //text("k:"+parseFloat(k).toPrecision(4)+", k2: "+parseFloat(k2).toPrecision(4)+", p: "+parseFloat(p).toPrecision(5)+", h:"+parseFloat(h).toPrecision(3),10,30);
  translate(width/2,height/2);
  stroke(red,green,blue);
  strokeWeight(sWeight);

  let r = R/k;
  let r2 = R/k2;
  let x = (R + r) * cos(0) + (r + r2) * cos(0 + (R*0)/r - R*0/(p*r)) + h * cos(0 + R*0/r - R*0/(p*r) - R*0/(p*r2));
  let y = (R + r) * sin(0) + (r + r2) * sin(0 + (R*0)/r - R*0/(p*r)) + h * sin(0 + R*0/r - R*0/(p*r) - R*0/(p*r2));
  for(let t = 0; t < 200;t += 0.02){//range and precision
     let oldx = x;
     let oldy = y;
     x = (R + r) * cos(t) + (r + r2) * cos(t + (R*t)/r - R*t/(p*r)) + h * cos(t + R*t/r - R*t/(p*r) - R*t/(p*r2));
     y = (R + r) * sin(t) + (r + r2) * sin(t + (R*t)/r - R*t/(p*r)) + h * sin(t + R*t/r - R*t/(p*r) - R*t/(p*r2));
     line(oldx,oldy,x,y);
  }
}


function updateColourWheel(){
  if(red == 255 && green < 255 && blue == 0){
    green += 1;
  }
  if(red > 0 && green == 255 && blue == 0){
    red -= 1;
  }
  if(green == 255 && blue < 255 && red == 0){
    blue += 1;
  }
  if(green > 0 && blue == 255 && red == 0){
    green -= 1;
  }
  if(blue == 255 && red < 255 && green == 0){
    red += 1;
  }
  if(blue > 0 && red == 255 && green == 0){
    blue -= 1;
  }
}

function updateK() {
  if(kUp) {
    k += 0.001;
  } else {
    k -= 0.001;
  }
  if(k > 20){
    kUp = false;
  }
  if(k < 2){
    kUp = true;
  }
}

function updateKTwo() {
  if(k2Up) {
    k2 += 0.001;
  } else {
    k2 -= 0.001;
  }
  if(k2 > 10){
    k2Up = false;
  }
  if(k2 < 1){
    k2Up = true;
  }
}

function updateP() {
  if(hUp) {
    h += 0.3;
  } else {
    h -= 0.3;
  }
  if(h > 10){
    hUp = false;
  }
  if(h < 1){
    hUp = true;
  }
}

function updateH() {
  if(pUp) {
    p += 0.0001;
  } else {
    p -= 0.0001;
  }
  if(p > 15){
    pUp = false;
  }
  if(p < 2){
    pUp = true;
  }
}


function updateH() {
  if(pUp) {
    p += 0.0001;
  } else {
    p -= 0.0001;
  }
  if(p > 15){
    pUp = false;
  }
  if(p < 2){
    pUp = true;
  }
}

function updateSWeight() {
  if(sWeightUp) {
    sWeight += 0.01;
  } else {
    sWeight -= 0.01;
  }
  if(sWeight > 5){
    sWeightUp = false;
  }
  if(sWeight < 1){
    sWeightUp = true;
  }
}




// if(keyIsPressed === true){//defines controls use https://keycode.info/ to modify keys
//     switch(keyCode){
//       case 81:
//         k+=0.001;
//         break;
//       case 65:
//         k-=0.001;
//         break;
//       case 87:
//         k2+=0.001;
//         break;
//       case 83:
//         k2-=0.001;
//         break;
//       case 69:
//         p+=0.0001;
//         break;
//       case 68:
//         p-=0.0001;
//         break;
//       case 82:
//         h+=.3;
//         break;
//       case 70:
//         h-=.3;
//         break;
//     }
// }
