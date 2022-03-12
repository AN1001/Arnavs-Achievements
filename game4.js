const aimSpace = document.getElementById("game4AimSpace");
const errorSpace = document.getElementById("decoyAimSpace");
let playingGame4 = true;
var width = window.innerWidth;
var height = window.innerHeight;
var game4time = 0;
var activeTargets = []

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

setInterval(function(){
  if(playingGame4){game4time++;}
  if(width < 1000){
    width = window.innerWidth;
    aimSpace.style.display = "none";
    errorSpace.style.display = "block";
    for (let i2 = 0, i2 < activeTargets.length, i2++) {
      activeTargets[0].remove()
    };
    
  }else{
    width = window.innerWidth;
    aimSpace.style.display = "block";
    errorSpace.style.display = "none";
  }
},1000);


setInterval(function(){
  var target = document.createElement("div")
  let divWidth = aimSpace.offsetWidth;
  let divHeight = aimSpace.offsetHeight;
  
  activeTargets.push(target)
  target.classList.add("target")
  aimSpace.appendChild(target)
  target.style.transform = `translate(${randomInt(0,divWidth-100)}px,${randomInt(0,divHeight-100)}px)`;
},3000);
