const game1Container = document.querySelector(".game1");
const game1Player = document.querySelector(".player");
const block = document.querySelector(".box");
const animationSpeed = 100;
var hiScore = 0;
var score = 0;
var playing = false;
var shouldAnimate = false;

//restart game function
game1Container.addEventListener('click',function(){
  block.style.animation = "boxmove 3s infinite linear";
  game1Player.classList.add("player-jump");
  playing = true;
  shouldAnimate = true;
  
  //jump
  shouldAnimate = false;
  setTimeout(function(){
    game1Player.classList.remove("player-jump")
    shouldAnimate = true;
   },500);
 });

const animatePlayer = setInterval(function(){
  if(shouldAnimate){
    setTimeout(function(){
      game1Player.classList.remove("playerState1")
    },animationSpeed)
    game1Player.classList.add("playerState1")
  }
},animationSpeed*2)

const deathCheck = setInterval(function(){
  console.log("Game 1 Script Active Currently")
  const playerTop = parseInt(window.getComputedStyle(game1Player).getPropertyValue("top"));
  const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  if(playing){
  score++;
  document.getElementById("game1Score").textContent = "current Score: "+score;
  }
  //check for collision
  if(blockLeft > 37 && blockLeft < 85 && playerTop > 115){
    if(score > hiScore){
      hiScore = score;
    }
    console.log("Player died at ---> Game 1");
    alert(`You died, your score was: ${score}, high score: ${hiScore}`);
    block.style.animation = "none";
    score = 0;
    playing = false;
    shouldAnimate = false;
    document.getElementById("game1HiScore").textContent = "Hi Score: "+hiScore;
    document.getElementById("game1Score").textContent = "current Score: "+score;
  }
  
},10);
