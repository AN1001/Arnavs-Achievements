const aimSpace = document.getElementById("game4AimSpace");
const errorSpace = document.getElementById("decoyAimSpace");
var playingGame4 = true;
var time = 0;


setInterval(function(){
  if(playingGame4){time++;}
  if(window.innerWidth < 460){
    aimSpace.style.display = "none";
    errorSpace.style.display = "block";
  }else{
    aimSpace.style.display = "block";
    errorSpace.style.display = "none";
  }
},500);
