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
  {name:"Octogon",func:"clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);"},
  {name: "Heptagon",func:"clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);"}
];
const shape = document.querySelector(".shape");
const shapeName = document.getElementById("shapeName");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let current = 1;

window.addEventListener("DOMContentLoaded", function(){
  shape.style['-webkit-clip-path'] = item.func;
  shapeName.textContent = item.name;
  const item = shapes[item];
});
