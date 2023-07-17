document.querySelector("h1").addEventListener("click",dothis);

function dothis(){
  alert("this!");
}

//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
var allpages=document.querySelectorAll(".page");
//select all subtopic pages
console.log(allpages);
hideall();
function hideall(){ //function to hide all pages
  for(let onepage of allpages){ //go through all subtopic pages
    onepage.style.display="none"; //hide it
  }
}
function show(pgno){ //function to show selected page no
  hideall();
  //select the page based on the parameter passed in
  let onepage=document.querySelector("#page"+pgno);
    //show the page
    onepage.style.display="block";
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
  show(1);
});
page2btn.addEventListener("click", function () {
  show(2);
});
page3btn.addEventListener("click", function () {
  show(3);
});

/*for hamMenu */
const hamBtn=document.querySelector("#hamIcon");
hamBtn.addEventListener("click",toggleMenus);
const menuItemsList=document.querySelector("nav ul");
function toggleMenus(){ /*open and close menu*/
  if(menuItemsList.style.display=="block")
    menuItemsList.style.display="none";
  else 
    menuItemsList.style.display="block";
}//can optimize using toggle class with css transitions

/*find references to all the buttons and ball */
const leftBtn = document.querySelector("#leftBtn");
const rightBtn = document.querySelector("#rightBtn");
const upBtn = document.querySelector("#upBtn");
const downBtn = document.querySelector("#downBtn");
const resetBtn = document.querySelector("#resetBtn");
const ball = document.querySelector("#ball");
var ballX = ballY = 0; //assign initial position of ball
//functions to update variables to control ball position
function ResetPos() {
  ballX=ballY=0; //reset to zero
  UpdateBallStyle();
}
function MovePos(leftInc, topInc) {
  ballX += leftInc;
  ballY += topInc;
  UpdateBallStyle();
}
//function to update ball css as well as display text
function UpdateBallStyle(){
  ball.style.left = ballX; //set left property to ball x variable
  ball.style.top = ballY; //set top property to ball x variable
  ball.innerText = ballX + "," + ballY; //update ball text to show coordinate
}

//function just to move left (decrease left style)
function MoveLeft(){
MovePos(-10,0);
}
//eventlisteners to activate MovePos
leftBtn.addEventListener("click", MoveLeft);
//leftBtn.addEventListener("click", MoveLeft(-10,0)); //wrong
//cannot do like this. MoveLeft(-10,0) will execute immediately
//using anonymous function to pass in arguments from eventlistener
rightBtn.addEventListener("click", function() {
  MovePos(10, 0)
});
upBtn.addEventListener("click", function() {
  MovePos(0, -10)
});
downBtn.addEventListener("click", function() {
  MovePos(0, 10)
});
resetBtn.addEventListener("click", ResetPos);

document.addEventListener('keydown', (e) => {
console.log(e);
if (e.code === "ArrowRight"){
  MovePos(10,0);
}
if (e.code === "ArrowLeft"){
  MovePos(-10,0);
}
if (e.code === "ArrowDown"){
  MovePos(0,10);
}
if (e.code === "ArrowUp"){
  MovePos(0,-10);
}
//Need to inform user what keys to press. Better option: use switch case instead.
});

//define more variables and constants
var velX,velY;
const minLeft=minTop=0;
const maxTop=maxLeft=300;
//function to pick random number from a min-max range
function RandomRange(min,max){
return Math.round(Math.random()*(max-min)+min);
}
//function to activate automove
function StartAutoMove(){
velX=RandomRange(-10,10);
velY=RandomRange(-10,30);
setInterval(MoveIt,100);
}
//callback function for setInterval
function MoveIt(){
MovePos(velX,velY); //move at random velocity picked earlier
}
StartAutoMove(); //invoke the function to activate automove

/* Move Pos function with collision check and reaction*/
function MovePosWifCollision(){
  ballX += velX;
  ballY += velY;
  /*check if reach min/max left/top and flip velocity*/
  if(ballX>maxLeft){
    velX=-velX; //reverse the X velocity
    ballX=maxLeft; //snap ballX to maxLeft
    ball.classList.add("ballAnim");
  }
  if(ballY>maxTop){
    velY=-velY;
    ballY=maxTop; //snap ballY to maxTop
    ball.classList.add("ballAnim");
  }
  if(ballX<minLeft){
    velX=-velX;
    ballX=minLeft;
    ball.classList.add("ballAnim");
  }
  if(ballY<minTop){
    velY=-velY;
    ballY=minTop;
    ball.classList.add("ballAnim");
  }
  UpdateBallStyle();
  }
  
  function StartAutoMove(){
    velX=RandomRange(-10,10);
    velY=RandomRange(-10,30);
    //setInterval(MoveIt,100); don't use this anymore
    setInterval(MovePosWifCollision,100); //use this instead
  }