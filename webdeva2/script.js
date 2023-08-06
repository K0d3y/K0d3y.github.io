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

const menuItemsList=document.querySelector("nav div");
function toggleMenus(){ /*open and close menu*/
  if(menuItemsList.style.display=="block")
  {
    hamBtn.style.background = "brown";
    menuItemsList.style.display="none";
  }
  else 
  {
    hamBtn.style.background = "darkred";
    menuItemsList.style.display="block";
  }
}//can optimize using toggle class with css transitions



const cube = document.querySelector(".cube");
const scene = document.querySelector(".scene");
scene.addEventListener("click",showNextFace);
//target all elements to save to constants
var allText=document.querySelectorAll(".ForgeText");
//select all subtext
hideallText();
cube.style.transform = "translateZ(-200px) rotateY(  0deg)";
showText(1);
function hideallText(){ //function to hide all
  for(let oneText of allText){ //go through all subtext
    oneText.style.display="none"; //hide it
  }
}
function showText(txtno){ //function to show selected page no
  hideallText();
  //select the page based on the parameter passed in
  let oneText=document.querySelector("#Forge"+txtno); 
    //show
    oneText.style.display="inline-block";
}
let count = 1;
// sunction to turn cube and show appropriate text
function showNextFace(){
  // show front
  if (count == 0)
  {
    cube.style.transform = "translateZ(-200px) rotateY(  0deg)";
    count++;
    showText(1);
  }
  // show right
  else if (count == 1)
  {
    cube.style.transform = "translateZ(-200px) rotateY(  -90deg)";
    count++;
    showText(2);
  }
  // show back
  else if (count == 2)
  {
    cube.style.transform = "translateZ(-200px) rotateY(  -180deg)";
    count++;
    showText(3);
  }
  // show left
  else if (count == 3)
  {
    cube.style.transform = "translateZ(-200px) rotateY(  90deg)";
    count++;
    showText(4);
  }
  // show top
  else if (count == 4)
  {
    cube.style.transform = "translateZ(-200px) rotateX(  -90deg)";
    count++;
    showText(5);
  }
  // show bottom
  else if (count == 5)
  {
    cube.style.transform = "translateZ(-200px) rotateX(  90deg)";
    count = 0;
    showText(6);
  }
}

const cube2 = document.querySelector(".cube2");
const scene2 = document.querySelector(".scene2");
scene2.addEventListener("click",showNextFace2);
//target all elements to save to constants
var allText2=document.querySelectorAll(".HistoryText");
//select all subtext
hideallText2();
cube2.style.transform = "translateZ(-200px) rotateY(  0deg)";
showText2(1);
function hideallText2(){ //function to hide all
  for(let oneText of allText2){ //go through all subtext
    oneText.style.display="none"; //hide it
  }
}
function showText2(txtno){ //function to show selected page no
  hideallText2();
  //select the page based on the parameter passed in
  let oneText=document.querySelector("#History"+txtno); 
    //show
    oneText.style.display="inline-block";
}
let count2 = 1;
// sunction to turn cube and show appropriate text
function showNextFace2(){
  // show front
  if (count2 == 0)
  {
    cube2.style.transform = "translateZ(-200px) rotateY(  0deg)";
    count2++;
    showText2(1);
  }
  // show right
  else if (count2 == 1)
  {
    cube2.style.transform = "translateZ(-200px) rotateY(  -90deg)";
    count2++;
    showText2(2);
  }
  // show back
  else if (count2 == 2)
  {
    cube2.style.transform = "translateZ(-200px) rotateY(  -180deg)";
    count2++;
    showText2(3);
  }
  // show left
  else if (count2 == 3)
  {
    cube2.style.transform = "translateZ(-200px) rotateY(  90deg)";
    count2++;
    showText2(4);
  }
  // show top
  else if (count2 == 4)
  {
    cube2.style.transform = "translateZ(-200px) rotateX(  -90deg)";
    count2++;
    showText2(5);
  }
  // show bottom
  else if (count2 == 5)
  {
    cube2.style.transform = "translateZ(-200px) rotateX(  90deg)";
    count2 = 0;
    showText2(6);
  }
}