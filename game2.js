const player = document.createElement("div");
const gameboard = document.querySelector(".game2MainGridSpace");
const gameTickSpeed = 200;
const moveLeftBtn2 = document.getElementById("game2BtnLeft");
const moveRightBtn2 = document.getElementById("game2BtnRight");
const shootBtn2 = document.getElementById("game2BtnShoot");
let lastRenderTime = 0;
var playerPosition = 11;

//initialise player
player.style.gridRowStart = 21;
player.classList.add("player2");
gameboard.appendChild(player);
player.style.gridColumnStart = playerPosition;

//Button inputs
moveRightBtn2.addEventListener('click',function(){ playerPosition++; player.style.gridColumnStart = playerPosition;});
window.addEventListener('keyright',function(){ playerPosition++; player.style.gridColumnStart = playerPosition;});

moveLeftBtn2.addEventListener('click',function(){ playerPosition--; player.style.gridColumnStart = playerPosition;});
window.addEventListener('keyleft',function(){ playerPosition++; player.style.gridColumnStart = playerPosition;});

shootBtn2.addEventListener('click',function(){  });

function mainLoop(currentTime){
  window.requestAnimationFrame(mainLoop);
  let lastTime = (currentTime - lastRenderTime);
  if (lastTime < gameTickSpeed) return;
  
  console.log("render occured");
  lastRenderTime = currentTime;
}                           

//Start main loop
window.requestAnimationFrame(mainLoop)
