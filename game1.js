const root = document.documentElement;
const game1Container = document.querySelector(".game1");
const game1Player = document.querySelector(".player");
const block = document.querySelector(".box");
const animationSpeed = 100;
var hiScore = 0;
var score = 0;
var playing = false;
var shouldAnimate = false;

//check if game is being played
const checkGamePlayState = setInterval(function(){
  if(!document.querySelector(".game1Btn").classList.contains("active")){
      document.getElementById("game1Score").textContent = "GAME PAUSED";
      playing = false;
      shouldAnimate = false;
      block.style.animation = "none";
   }
},1000);

//restart game function
game1Container.addEventListener('click',function(){
  block.style.animation = "boxmove 3s infinite linear";
  //Add jump class when jump is called
  game1Player.classList.add("player-jump");
  playing = true;
  shouldAnimate = true;
  
  //Remove jump class when jump ends
  shouldAnimate = false;
  setTimeout(function(){
    game1Player.classList.remove("player-jump");
    shouldAnimate = true;
  },500);
 });


//Gives players running animation and changes background in accordance with score
const animatePlayer = setInterval(function(){
  if(shouldAnimate){
    
    //Animate player
    setTimeout(function(){game1Player.classList.remove("playerState1")},animationSpeed);
    game1Player.classList.add("playerState1");
  }
  if(playing){
    //change background/sky
    root.style.setProperty('--game-perc-1', score/100 + "%");
    root.style.setProperty('--game-perc-2', score/50 + "%");
    //[REMOVED]pan mountains to make player look like its moving
    //game1Container.style.backgroundPosition = "-"+score/10+"px"+" -7px, -10px 0px";
   
  }else{
    shouldAnimate = false;
  }
  
  
},animationSpeed*2)


//Main loop and death check
const deathCheck = setInterval(function(){
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

