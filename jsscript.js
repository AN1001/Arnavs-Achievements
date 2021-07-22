const hexElements = ["1","2","3","4","5","6","A","B","C","D","E","F"];
const btn = document.getElementById('btn')
const colour = document.getElementById('colour-name')

btn.addEventListener('click',function(){
  var hexColour = []
  for(let i = 0;i<6;i++){
    hexColour.push( hexElements[getRandomNumber(hexElements.length)] )
  }
  
  console.log( "#"+hexColour.join("") )
  document.getElementById("target1").style.backgroundColor = white;
  colour.textContent = white;
})

function getRandomNumber(max){
  return Math.floor(Math.random() * max);
}
