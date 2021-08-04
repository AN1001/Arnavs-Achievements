const player = document.createElement("div")
const gameboard = document.querySelector(".game2MainGridSpace")
var playerPosition = 6;

player.style.gridRowStart = 11;
player.classList.add("player2")
player.style.gridRowStart = playerPosition;
gameboard.appendChild(player)
