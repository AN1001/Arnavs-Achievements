/*
===========================
project 1, colour switcher
===========================
*/
const hexElements = ["1","2","3","4","5","6","A","B","C","D","E","F"];
const btn = document.getElementById('btn');
const colour = document.getElementById('colour-name');

btn.addEventListener('click',function(){
  var hexColour = []
  for(let i = 0;i<6;i++){
    hexColour.push( hexElements[getRandomNumber(hexElements.length)] )
  }
  
  var joinedHex = "#"+hexColour.join("")
  document.getElementById("target1").style.backgroundColor = joinedHex;
  colour.textContent = joinedHex;
})

function getRandomNumber(max){
  return Math.floor(Math.random() * max);
}


/*
==================
Project 2, Counter
==================
*/
Const increaseBtn = document.getElementById('btn3');
Const decreaseBtn = document.getElementById('btn1');
Const resetBtn = document.getElementById('btn2');
var currentValue = document.getElementById('span');

increaseBtn.addEventListener('click',function(){
  console.log(1)
})

decreaseBtn.addEventListener('click',function(){
  console.log(0)
})

resetBtn.addEventListener('click',function(){
  console.log(-1)
})
