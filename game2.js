const player = document.createElement("div")
const gameboard = document.querySelector(".game2MainGridSpace")
const gameTickSpeed = 1000;
let lastRenderTime = 0;
var playerPosition = 11;

player.style.gridRowStart = 21;
player.classList.add("player2")
player.style.gridColumnStart = playerPosition;
gameboard.appendChild(player)

gameboard.addEventListener('click',function(){
  playerPosition++;
  });

function mainLoop(currentTime){
  let lastTime = (currentTime - lastRenderTime);
  console.log(lastTime)
  if (lastTime < gameTickSpeed) return;
  
  console.log("render occured")
  lastRenderTime = currentTime;
}                           

window.requestAnimationFrame(mainLoop)
