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

let count = 0;
const value = document.querySelector('#span');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(item){
  item.addEventListener("click", function(e){
    const styles = e.currentTarget.classList;
    
    if(styles.contains('inc')){
      count++;
    }
    if(styles.contains('dec')){
      count--;
    }
    if(styles.contains('reset')){
      count = 0;
    }
    value.textContent = count;
  })
    
    if(count>0){
      document.querySelector("#span").style.color = 'green';
    } else if(count<0){
      document.querySelector("#span").style.color = 'red';
    } else {
      document.querySelector("#span").style.color = 'black';
    }
    
})

