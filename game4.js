const aimSpace = document.getElementById("game4AimSpace");
const errorSpace = document.getElementById("decoyAimSpace");
let playingGame4 = true;
let shouldSpawn = false;
var width = window.innerWidth;
var height = window.innerHeight;
var game4time = 0;


function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

setInterval(function(){
  if(playingGame4){game4time++;}
  if(width < 1000){
    width = window.innerWidth;
    aimSpace.style.display = "none";
    errorSpace.style.display = "block";
    shouldSpawn = false;
    
  }else{
    width = window.innerWidth;
    aimSpace.style.display = "block";
    errorSpace.style.display = "none";
    shouldSpawn = true;
    
  }
},1000);


setInterval(function(){
  if (shouldSpawn){
    var target = document.createElement("div")
    let divWidth = aimSpace.offsetWidth;
    let divHeight = aimSpace.offsetHeight;

    target.classList.add("target")
    aimSpace.appendChild(target)
    target.style.transform = `translate(${randomInt(0,divWidth-100)}px,${randomInt(0,divHeight-130)}px)`;
  }
},3000);
