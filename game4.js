const aimSpace = document.getElementById("game4AimSpace");
const errorSpace = document.getElementById("decoyAimSpace");
const game4StartScreen = document.getElementById("game4StartScreen");
const game4StartBtn = document.getElementById("game4StartBtn");
let playingGame4 = false;
let shouldSpawn = false;
var width = window.innerWidth;
var height = window.innerHeight;
var game4time = 0;

aimSpace.style.display = "none";
game4StartScreen.style.display = "block";

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function startGame() {
  aimSpace.style.display = "block";
  game4StartScreen.style.display = "none";  
  playingGame4 = true;
}

game4StartBtn.addEventListener("click", function(){
  startGame()
});



setInterval(function(){
  if(playingGame4){game4time++;}
  if(width < 1000 && playingGame4){
    width = window.innerWidth;
    aimSpace.style.display = "none";
    errorSpace.style.display = "block";
    shouldSpawn = false;
    
  }else if(playingGame4){
    width = window.innerWidth;
    aimSpace.style.display = "block";
    errorSpace.style.display = "none";
    shouldSpawn = true;
    
  }
},1000);


function removeTarget(el) {
  var element = el;
  element.remove();
}


setInterval(function(){
  if (playingGame4){
    var target = document.createElement("div")
    let divWidth = aimSpace.offsetWidth;
    let divHeight = aimSpace.offsetHeight;

    target.classList.add("target")
    aimSpace.appendChild(target)
    target.style.transform = `translate(${randomInt(0,divWidth-100)}px,${randomInt(0,divHeight-130)}px)`;
    target.addEventListener("click", removeTarget(target));
  }
},3000);


document.addEventListener("click", function(e) {
  if (e.target.classList.contains('target')) {
    e.style.display = "none";
  }
});
