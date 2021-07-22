const colours = ["red", "whitesmoke", "rgb(133,115,45)","#f15025"];
const btn = document.getElementById('btn')
const color = document.getElementById('colour-name')

btn.addEventListener('click',function(){
  const randomNum = 2;
  document.getElementById("target1").style.setAttribute("background-color",colours[randomNum]);
  colour.textContent = colours[randomNum]
})
