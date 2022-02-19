const aimSpace = document.getElementById("game4AimSpace");
const errorSpace = document.getElementById("decoyAimSpace");
var width = window.innerWidth;
var playingGame4 = true;
var time = 0;

console.log(width)

setInterval(function(){
  if(playingGame4){time++;}
  if(width < 1000){
    width = window.innerWidth;
    aimSpace.style.display = "none";
    errorSpace.style.display = "block";
  }else{
    width = window.innerWidth;
    aimSpace.style.display = "block";
    errorSpace.style.display = "none";
  }
},500);
