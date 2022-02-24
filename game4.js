const aimSpace = document.getElementById("game4AimSpace");
const errorSpace = document.getElementById("decoyAimSpace");
var width = window.innerWidth;
var playingGame4 = true;
var game4time = 0;


setInterval(function(){
  if(playingGame4){game4time++;}
  if(width < 1000){
    width = window.innerWidth;
    aimSpace.style.display = "none";
    errorSpace.style.display = "block";
  }else{
    width = window.innerWidth;
    aimSpace.style.display = "block";
    errorSpace.style.display = "none";
  }
},1000);

const target = document.createElement("div")
target.classList.add("target")
aimSpace.appendChild(target)
