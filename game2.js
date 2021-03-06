const player = document.createElement("div");
const gameboard = document.querySelector(".game2MainGridSpace");
const overlay = document.getElementById("overlay");
const gameTickSpeed = 100;
const game2PlayBtn = document.getElementById("game2PlayBtn");
const moveLeftBtn2 = document.getElementById("game2BtnLeft");
const moveRightBtn2 = document.getElementById("game2BtnRight");
const shootBtn2 = document.getElementById("game2BtnShoot");
let lastRenderTime = 0;
let playingGame2 = false;
var shouldShoot = 0;
var enemyShouldShoot = 0;
var enemyShouldMove = 0;
var currentIt = 0;
var playerPosition = 11;
var bullets = [];
var enemyBullets = [];
var enemyMovementPattern = [{x:-1,y:0},{x:1,y:0},{x:1,y:0},{x:-1,y:0},{x:-1,y:0},{x:1,y:0},{x:0,y:1}]
var enemies = [
   {x:2,y:2},{x:4,y:2},{x:6,y:2},{x:8,y:2},    {x:14,y:2},{x:16,y:2},{x:18,y:2},{x:20,y:2}
  ,{x:2,y:4},{x:4,y:4},{x:6,y:4},{x:8,y:4},    {x:14,y:4},{x:16,y:4},{x:18,y:4},{x:20,y:4}
  ,{x:2,y:6},{x:4,y:6},{x:6,y:6},{x:8,y:6},    {x:14,y:6},{x:16,y:6},{x:18,y:6},{x:20,y:6}
]

//initialise player
player.style.gridRowStart = 21;
player.style.gridColumnStart = playerPosition;
player.classList.add("player2");
gameboard.appendChild(player);
//initialise enemies
enemies.forEach(function(enemyData){
  const enemy = document.createElement("div");
  const index = enemies.indexOf(enemyData);
  enemy.style.gridRowStart = enemyData.y;
  enemy.style.gridColumnStart = enemyData.x;
  enemy.classList.add("enemy");
  enemies[index] = enemy;
  gameboard.appendChild(enemy);
  });

//Button inputs
game2PlayBtn.addEventListener('click',restart)
moveRightBtn2.addEventListener('click',function(){ if(playingGame2){playerPosition++; player.style.gridColumnStart = playerPosition;} });
moveLeftBtn2.addEventListener('click',function(){ if(playingGame2){playerPosition--; player.style.gridColumnStart = playerPosition;} });
shootBtn2.addEventListener('click',shoot);
window.addEventListener('keydown', e => {
  if(playingGame2){
    switch(e.keyCode){
      case 37: 
        if(playerPosition > 1){
          playerPosition--; 
          player.style.gridColumnStart = playerPosition;
          };
        break;
      
      case 39:
        if(playerPosition < 21){
          playerPosition++; 
          player.style.gridColumnStart = playerPosition;
          };
        break; 
      
      case 32:
        shoot()
        break; 
      
      case 48:
        restart()
        break;
    };
  };
});
//creates a bullet above the player
function shoot(){
  if(shouldShoot > 5 && playingGame2){
    shouldShoot = 0;
    //initialise new bullet object
    const bullet = document.createElement("div");
    bullet.style.gridColumnStart = playerPosition;
    bullet.style.gridRowStart = 20;
    bullet.classList.add("playerBullet");
    gameboard.appendChild(bullet);
    bullets.push(bullet);
  };
};
 
function restart(){
    //change game to playing state
    overlay.style.display = "none";
    playingGame2 = true;
    
    //delete old enemies
    enemies.forEach(function(enemy){
      enemy.remove();
    });
  
    //reset variables
    playerPosition = 11;
    enemyShouldMove = 0;
    currentIt = 0;
    enemies = [
       {x:2,y:2},{x:4,y:2},{x:6,y:2},{x:8,y:2},   {x:14,y:2},{x:16,y:2},{x:18,y:2},{x:20,y:2}
      ,{x:2,y:4},{x:4,y:4},{x:6,y:4},{x:8,y:4},   {x:14,y:4},{x:16,y:4},{x:18,y:4},{x:20,y:4}
      ,{x:2,y:6},{x:4,y:6},{x:6,y:6},{x:8,y:6},   {x:14,y:6},{x:16,y:6},{x:18,y:6},{x:20,y:6}
    ]
    
    //reset player position
    player.style.gridColumnStart = playerPosition;
  
    //create new enemies
    enemies.forEach(function(enemyData){
    const enemy = document.createElement("div");
    const index = enemies.indexOf(enemyData);
    enemy.style.gridRowStart = enemyData.y;
    enemy.style.gridColumnStart = enemyData.x;
    enemy.classList.add("enemy");
    enemies[index] = enemy;
    gameboard.appendChild(enemy);
    });
};

//main render loop
function mainLoop(currentTime){
  window.requestAnimationFrame(mainLoop);
  let lastTime = (currentTime - lastRenderTime);
  if (lastTime < gameTickSpeed) return;
  lastRenderTime = currentTime;
 
  shouldShoot++;
  enemyShouldMove++;
  enemyShouldShoot++;
  
  if(enemyShouldShoot > 10 && playingGame2){
     enemyShouldShoot = 0;
     //choose 3 enemies at random
     var shootingEnemies = [
         enemies[Math.ceil(Math.random() * enemies.length)],
         enemies[Math.floor(Math.random() * enemies.length)], 
         enemies[Math.ceil(Math.random() * enemies.length)]
      ];
      //summon a bullet at all 3 enemies
      shootingEnemies.forEach(function(shootingEnemy){
         const bullet = document.createElement("div");
         bullet.style.gridColumnStart = shootingEnemy.style.gridColumnStart;
         bullet.style.gridRowStart = parseInt(shootingEnemy.style.gridRowStart) + 1;
         bullet.classList.add("bullet");
         gameboard.appendChild(bullet);
         enemyBullets.push(bullet);
      });  
    
  } 
   
  //check for win
  if(enemies.length < 1){
    overlay.style.display = "block";
    playingGame2 = false;
    game2PlayBtn.textContent = "REPLAY";
    document.getElementById("game2WinLoss").textContent = "Victory All enemies defeated- press replay to play again";
  }
  
  //move enemeies
  if(enemyShouldMove > 15 && playingGame2){
    const currentIteration = currentIt%7;
    currentIt++;
    enemyShouldMove = 0;
    enemies.forEach(function(enemy){
      const currentY = parseInt(enemy.style.gridRowStart);
      const currentX = parseInt(enemy.style.gridColumnStart);
      enemy.style.gridRowStart = currentY + enemyMovementPattern[currentIteration].y;
      enemy.style.gridColumnStart = currentX + enemyMovementPattern[currentIteration].x;
    });
  };
    
  //move bullets up 1 block
  bullets.forEach(function(bullet){
    const currentPosY = parseInt(bullet.style.gridRowStart);
    const currentPosX = parseInt(bullet.style.gridColumnStart);
    if(currentPosY > 1){ bullet.style.gridRowStart = currentPosY-1; 
    }else{bullet.remove(); setTimeout(function(){bullets.shift();},30)}
    //Check for collision with enemy
    enemies.forEach(function(enemy){
      const enemyX = parseInt(enemy.style.gridColumnStart);
      const enemyY = parseInt(enemy.style.gridRowStart);
      if(currentPosY == enemyY && currentPosX == enemyX){
        //If collision occured, delete enemy and bullet
        console.log("collision")
        //remove bullet
        bullet.remove(); 
        bullets.splice(bullets.indexOf(bullet),1)
        //remove enemy
        enemy.remove()
        enemies.splice(enemies.indexOf(enemy),1)
        };
     });
  });
   
  enemyBullets.forEach(function(enemyBullet){
      const bulletY = parseInt(enemyBullet.style.gridRowStart); 
      const bulletX = parseInt(enemyBullet.style.gridColumnStart);
      //check for collision with bullet and move bullet
      if(bulletY < 21){enemyBullet.style.gridRowStart = bulletY+1;
      }else if(bulletX == playerPosition){
         console.log("collision with enemy bullet"); 
         enemyBullet.remove(); 
         enemyBullets.splice(enemyBullets.indexOf(enemyBullet),1); 
         playingGame2 = false; 
         overlay.style.display = "block";
         playingGame2 = false;
         game2PlayBtn.textContent = "REPLAY";
         document.getElementById("game2WinLoss").textContent = "Defeat you were killed- press replay to play again";
      }else{
         enemyBullet.remove(); enemyBullets.splice(enemyBullets.indexOf(enemyBullet),1)
      }
       
    });
  
};//End of render loop                   
//Start main loop
window.requestAnimationFrame(mainLoop);
