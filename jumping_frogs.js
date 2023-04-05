// Alexandre Martin
// Pascal Huyng
// WEB AND FX: FROM THEORY TO PRACTICE, 502-A22-LA, section 00002
// Jumping frogs
// https://openprocessing.org/sketch/1861111
// Instructions Use the A and D keys to move one of the frog and both left and right arrow keys to move the other. Click on the garbage bin to make it open and let the fly out.  
// The interaction is about a race between two frogs. To win the race the frogs must eat a fly. To make the fly appear you must open the garbage bin. Once opened the fly is free but will always follow you cursor. Which frog will eat the fly first?

let imgOne 
let imgTwo 
let imgThree 
let imgFour 
let imgFive 
let fly 
//Creates named variables to be used in the code
let frogOneX=0
let frogTwoX=0
//Creates named variables with a value that position the frogs
let frogOneMoveX=0
let frogTwoMoveX=0
//Creates named variables with a value to allow the two frogs to move 
let angle = 0;
let clockwise = true;
//Creates named variables with a value that allows the lid to rotate by changing the pictures angle
let lidPositionX 
let lidPositionY
//Creates named variables that position the lid on the screen
let lidSpeedX = 0
let lidSpeedY = 0
//Creates named variables that allows the lid to move on the X and Y axis 
let changeMouse =false
let shaking =true
//Creates named variables that can be turned on and off with future actions 

function preload() {
  imgOne = loadImage('derpy_frog.png');
  imgTwo = loadImage('derpy_frog_2.png');
  imgThree = loadImage('swamp.jpeg');
  imgFour = loadImage('bin_no_lid.png');
  imgFive = loadImage('bin_lid.png');
  fly = loadImage('fly.png');
}
// Give the five variables a picture to be plugged in the following code


function setup() {
  createCanvas(windowWidth, windowHeight);  
  angleMode(DEGREES);  //instead of angles being mesured in radian they are mesured in degrees 

  lidPositionX = windowWidth/10*7-125 + imgFive.width/2
  lidPositionY = windowHeight/100*73-155 + imgFive.height/2
  //positions the lid on the screen so that it is always proportionate no mater the size of the users screen
}


function draw() {
  imageMode(CORNER)
  //positions the point of reference to the top left corner for the background
  background(imgThree);
  //uses the image of the swamp as a background 
  imageMode(CENTER)
  //positions the point of reference to the middle instead of the top left corner of any following codes under

  if (changeMouse===true){
    image(fly,mouseX,mouseY, 90, 60)
  }
  //when change mouse is true the fly will appear and follow the mouse, numbers 90 and 60 size the image of the fly 
  
  image(imgFour, windowWidth/10*7, windowHeight/100*73);  
  //draws and positions the garbage bin on the screen at the start no matter it's size (screen) it will always be proportinate 
  
  image(imgOne, frogOneX, windowHeight/4*3); //draws and positions the first frog on the screen at the start no matter it's size (screen) it will always be proportinate 
  frogOneX = windowWidth/5+frogOneMoveX;
  // shifts the first frog on the x axis (left or right) so both aren't overlayed at the start
  
  image(imgTwo, frogTwoX, windowHeight/4*3); //draws and positions the second frog on the screen at the start no matter it's size (screen) it will always be proportinate
  frogTwoX= windowWidth/3+frogTwoMoveX;
  // shifts the second frog on the x axis (left or right) so both aren't overlayed at the start
  
  translate(lidPositionX, lidPositionY);  
  //repositions the origin points to the position of the lid
  rotate(angle);
  //allows object to rotate
  image(imgFive, 0, 0);
  //draws the lid bin on the screen 
  
  lidPositionX=lidPositionX+lidSpeedX
  lidPositionY=lidPositionY+lidSpeedY
  //allows the lid to move on both axis
  
  if (shaking){
    //the 14 lines bellow is code that will work when shacking is activated  
    if (clockwise) {
      angle += 1;
      if (angle >= 10) {
        clockwise = false; 
        //rotates the lid clockwise until it reaches 10° then it will rotate in the other direction (counter clockwise)
      }
    } else {
      angle -= 1;
      if (angle <= -10) {
        clockwise = true;
        //rotates counter clockwise until it reaches -10° or 350° then it will rotate in the other direction (clockwise)
      }
    }
  }
  // code to allowing the lid to wiggle
  
  if (lidPositionX<windowWidth/10*7-150){
    shaking=false
    //once the lid has hit the following coordinates the the lid will stop wiggling 
    lidPositionX = windowWidth/10*7-150
    lidPositionY = windowHeight/100*73+80
    //prevents the lid to move any lower than if clicked more than once
    lidSpeedX= 0
    lidSpeedY= 0
    //stops the lid from moving when the coordinates have been reached
    
  }
  if (mouseX > frogOneX-70 && mouseX <frogOneX+75 && mouseY<windowHeight/4*3+70 && mouseY>windowHeight/4*3-70){
    changeMouse=false  
    }
  
  if (mouseX > frogTwoX-70 && mouseX <frogTwoX+70 && mouseY<windowHeight/4*3+100 && mouseY>windowHeight/4*3-75){
    changeMouse=false
  }
}
// creates 2 boxs that will move with both frogs that will stop the fly from appering on the screen when the cursor is in that area
  
function keyPressed() {
  if (keyCode === 37) {//37 is the code for pressing ←
    frogOneMoveX -= 50;
  }
  if (keyCode === 39) {//39 is the code for pressing →
    frogOneMoveX += 50;
  }
  if (keyCode === 65) {//65 is the code for pressing A
    frogTwoMoveX -= 50;
  } 
  if (keyCode === 68) {//68 is the code for pressing D
    frogTwoMoveX += 50;
  }
 }
//code allowing the frogs to move with the following keys (A, D, ←, →)

function mouseClicked(){
  if (mouseX >  windowWidth/10*7-250/2 && mouseX <  windowWidth/10*7+250/2 && mouseY > windowHeight/100*73-285/2 && mouseY < windowHeight/100*73+285/2){ 
    //creates a box the has a command if clicked on  
    changeMouse=true
    //once the cursor is clicked in the box is makes the fly appear
    lidSpeedX=-3 
    lidSpeedY=4 
    //once the box is clicked the lid moves 3 pixels to the left and 4 pixels down
  }
}  
