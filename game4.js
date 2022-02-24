const aimSpace = document.getElementById("game4AimSpace");
const errorSpace = document.getElementById("decoyAimSpace");
let playingGame4 = true;
let divWidth = aimSpace.offsetWidth;
let divHeight = aimSpace.offsetHeight;
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
  }else{
    width = window.innerWidth;
    aimSpace.style.display = "block";
    errorSpace.style.display = "none";
  }
},1000);


setInterval(function(){
  var target = document.createElement("div")
  target.classList.add("target")
  aimSpace.appendChild(target)
  wid = randomInt(0,divWidth)-100
  console.log(wid)
  target.style.transform = `translate(${wid}px,${randomInt(0,divHeight)-100}px)`;
},3000);
