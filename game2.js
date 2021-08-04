const player = document.createElement("div");
const gameboard = document.querySelector(".game2MainGridSpace");
const gameTickSpeed = 1000;
const moveLeftBtn2 = document.getElementById("game2BtnLeft");
const moveRightBtn2 = document.getElementById("game2BtnRight");
const ShootBtn2 = document.getElementById("game2BtnShoot");
let lastRenderTime = 0;
var playerPosition = 11;

player.style.gridRowStart = 21;
player.classList.add("player2");
gameboard.appendChild(player);

//Button inputs
moveRightBtn2.addEventListener('click',function(){ playerPosition++; });
moveLeftBtn2.addEventListener('click',function(){ playerPosition--; });
shootBtn2.addEventListener('click',function(){  });

function mainLoop(currentTime){
  window.requestAnimationFrame(mainLoop);
  let lastTime = (currentTime - lastRenderTime);
  if (lastTime < gameTickSpeed) return;
  
  player.style.gridColumnStart = playerPosition;
  
  console.log("render occured");
  lastRenderTime = currentTime;
}                           

//Start main loop
window.requestAnimationFrame(mainLoop)
