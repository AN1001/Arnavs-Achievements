const player = document.createElement("div");
const gameboard = document.querySelector(".game2MainGridSpace");
const gameTickSpeed = 200;
const moveLeftBtn2 = document.getElementById("game2BtnLeft");
const moveRightBtn2 = document.getElementById("game2BtnRight");
const shootBtn2 = document.getElementById("game2BtnShoot");
let lastRenderTime = 0;
var shouldShoot = 0;
var playerPosition = 11;
var bullets = [];
var enemies = [{x:2,y:2},{x:4,y:2}]

//initialise player
player.style.gridRowStart = 21;
player.style.gridColumnStart = playerPosition;
player.classList.add("player2");
gameboard.appendChild(player);

//initialise enemies
enemies.forEach(function(enemyData){
  const enemy = document.createElement("div");
  const index = enemies.indexOf(enemyData)
  enemy.style.gridRowStart = enemyData.y;
  enemy.style.gridColumnStart = enemyData.x;
  enemy.classList.add("enemy");
  enemies[index] = enemy;
  gameboard.appendChild(enemy);
  });

console.log(enemies)
//Button inputs
moveRightBtn2.addEventListener('click',function(){ playerPosition++; player.style.gridColumnStart = playerPosition;});
moveLeftBtn2.addEventListener('click',function(){ playerPosition--; player.style.gridColumnStart = playerPosition;});

window.addEventListener('keydown', e => {
  switch(e.key){
      case 'ArrowLeft': 
        if(playerPosition > 1){
          playerPosition--; 
          player.style.gridColumnStart = playerPosition;
          };
        break;
      
      case 'ArrowRight':
        if(playerPosition < 21){
          playerPosition++; 
          player.style.gridColumnStart = playerPosition;
          };
        break;
  };
});

//creates a bullet above the player
shootBtn2.addEventListener('click',function(){ 
  if(shouldShoot > 50){
    shouldShoot = 0;
    //initialise new bullet object
    const bullet = document.createElement("div");
    bullet.style.gridColumnStart = playerPosition;
    bullet.style.gridRowStart = 20;
    bullet.classList.add("bullet");
    gameboard.appendChild(bullet);


    bullets.push(bullet);
    console.log(bullets);
  };
});

//main render loop
function mainLoop(currentTime){
  shouldShoot++;
  window.requestAnimationFrame(mainLoop);
  let lastTime = (currentTime - lastRenderTime);
  if (lastTime < gameTickSpeed) return;
  lastRenderTime = currentTime;
  
  //move bullets up 1 block
  bullets.forEach(function(bullet){
    const currentPosY = parseInt(bullet.style.gridRowStart);
    const currentPosX = parseInt(bullet.style.gridColumnStart);
    if(currentPosY > 1){ bullet.style.gridRowStart = currentPos-1; 
    }else{bullet.remove(); setTimeout(function(){bullets.shift();},30)}
    //Check for collision with enemy
    enemies.forEach(function(enemy){
      const enemyX = parseInt(enemy.style.gridColumnStart);
      const enemyY = parseInt(enemy.style.gridRowStart);
      if(currentPosY == enemyY && currentPosX == enemyX){
        console.log("collision occured")
      };
    });
    
  });
  
};//End of render loop                   

//Start main loop
window.requestAnimationFrame(mainLoop);
