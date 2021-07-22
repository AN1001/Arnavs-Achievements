const colours = ["red", "whitesmoke", "steelblue", "rgb(133,125,205)","#f35025"];
const btn = document.getElementById('btn')
const colour = document.getElementById('colour-name')

btn.addEventListener('click',function(){
  const randomNum = getRandomNumber(colours.length);
  
  document.getElementById("target1").style.backgroundColor = colours[randomNum];
  colour.textContent = colours[randomNum]
})

function getRandomNumber(max){
  return Math.floor(Math.random() * max);
}
