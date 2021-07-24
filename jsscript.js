/*
===========================
project 1, colour switcher
===========================
*/
const hexElements = ["1", "2", "3", "4", "5", "6", "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const colour = document.getElementById('colour-name');

btn.addEventListener('click', function() {
  var hexColour = []
  for (let i = 0; i < 6; i++) {
    hexColour.push(hexElements[getRandomNumber(hexElements.length)])
  }

  var joinedHex = "#" + hexColour.join("")
  document.getElementById("target1").style.backgroundColor = joinedHex;
  colour.textContent = joinedHex;
})

function getRandomNumber(max) {
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

btns.forEach(function(item) {
  item.addEventListener("click", function(e) {
    const styles = e.currentTarget.classList;

    if (styles.contains('inc')) {
      count++;
    }
    if (styles.contains('dec')) {
      count--;
    }
    if (styles.contains('reset')) {
      count = 0;
    }


    if (count > 0) {
      value.style.color = 'green';
    } else if (count < 0) {
      value.style.color = 'red';
    } else {
      value.style.color = 'black';
    }
    value.textContent = count;
  });

})

/*
=================================
Project 3, Complex Polygon Maker
=================================
*/
                                                                                                                                
const shapes = [
  {id:1, name: "Hexagon",func:"polygon(25% 7%, 75% 7%, 100% 50%, 75% 93%, 25% 93%, 0% 50%)"},
  {id:2, name: "Heptagon",func:"polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)"},
  {id:3, name:"Octogon",func:"polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"},
  {id:4, name: "Nonagon",func:"polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)"},
  {id:5, name: "Decagon",func:"polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)"},
  {id:6, name: "Hendecagon",func:"polygon(50% 0%, 76% 7%, 93% 24%, 100% 55%, 92% 83%, 67% 100%, 33% 100%, 8% 83%, 0 55%, 7% 24%, 24% 7%)"},
  {id:7, name: "",func:""},
  {id:8, name: "",func:""},
  {id:9, name: "",func:""}
];
const shape = document.querySelector(".shape");
const shapeName = document.getElementById("shapeName");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let current = 0;

window.addEventListener("DOMContentLoaded", function() {
  updateShapeStyle(current);
});

nextBtn.addEventListener("click", function(){
  current++
  updateShapeStyle(current)
});

prevBtn.addEventListener("click", function(){
  current--
  updateShapeStyle(current)
});

//==== Update styleSheet ====
function updateShapeStyle(showNum){
  if(showNum < 0){
    showNum = shapes.length - 1;
    current = shapes.length - 1;
  }
  let showSafeNum = showNum % shapes.length;
  shape.style['-webkit-clip-path'] = shapes[showSafeNum].func;
  shapeName.textContent = shapes[showSafeNum].name;
}
