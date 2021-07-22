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

const increaseBtn = document.querySelector('#btn3');
const resetBtn = document.querySelector('#btn1');
const decreaseBtn = document.querySelector('#btn2');
var currentValue = document.querySelector('span');

increaseBtn.addEventListener('click',function(){
  currentValue.textContent = 'test';
})

decreaseBtn.addEventListener('click',function(){
  console.log(0);
})

resetBtn.addEventListener('click',function(){
  console.log(-1);
})
