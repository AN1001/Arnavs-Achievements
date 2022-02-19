const aimSpace = document.getElementById("game4AimSpace");
const errorSpace = document.getElementById("decoyAimSpace");
var width = window.innerWidth;
var playingGame4 = true;
var time = 0;

aimSpace.style.display = "none";
errorSpace.style.display = "block";
console.log(width)

setInterval(function(){
  if(playingGame4){time++;}
  if(width < 460){
    aimSpace.style.display = "none";
    errorSpace.style.display = "block";
  }else if(false){
    aimSpace.style.display = "block";
    errorSpace.style.display = "none";
  }
},500);
