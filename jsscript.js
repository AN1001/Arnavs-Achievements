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
  {id:6, name: "Hendecagon",func:"polygon(50% 0%, 76% 7%, 93% 24%, 100% 55%, 92% 83%, 67% 100%, 33% 100%, 8% 83%, 0 55%, 7% 24%, 24% 7%)"}
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
};

/*
===========================
project 4, Project Details
===========================
*/

const aboutBtns = document.querySelectorAll('.tab-btn');
const all = document.getElementById('target4');
const articles = document.querySelectorAll('.content');

all.addEventListener('click',function(e){
  const id = e.target.dataset.id;
  if(id){
    aboutBtns.forEach(function(btn){
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    
    articles.forEach(function(art){
      art.classList.remove("active");
      const element = document.getElementById(id);
      element.classList.add('active');
    });
    
    if(id == 'p1'){
      document.getElementById("projects-title").textContent = 'Colour Flipper';
    }else if(id == 'p2'){
      document.getElementById("projects-title").textContent = 'Counter';
    }else{
      document.getElementById("projects-title").textContent = 'Polygon Maker';
    }
      
  }
});

/*
==========================================
Games, Game selector script, Game scripts
==========================================
*/

const gameSelectorBtns = document.querySelectorAll('.game-btn');
const masterContainer = document.querySelector('.games-master-container');
const games = document.querySelectorAll('.game-container');

masterContainer.addEventListener('click',function(e){
  const id = e.target.dataset.id;
  if(id){
    
    gameSelectorBtns.forEach(function(btn){
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    
    games.forEach(function(game){
      game.classList.remove("active");
      const element = document.getElementById(id);
      element.classList.add('active');
    });
    
  }
});

var currentActiveGame = 'g1';
const setScript = setInterval(function(){
  //Check which button is pressed and if it has changed
  
  //Check for btn 1
  if(document.querySelector(".game1Btn").classList.contains("active") && currentActiveGame != 'g1'){
    currentActiveGame = 'g1';
    console.log("1");
  
  //Check for btn 2
  } else if(document.querySelector(".game2Btn").classList.contains("active") && currentActiveGame != 'g2'){
    currentActiveGame = 'g2';
    console.log("2");
    
  //Check for btn 3 
  } else if(document.querySelector(".game3Btn").classList.contains("active") && currentActiveGame != 'g3'){
    currentActiveGame = 'g3';
    console.log("3");
    
  //Check for btn 4
  } else if(document.querySelector(".game4Btn").classList.contains("active") && currentActiveGame != 'g4'){
    currentActiveGame = 'g4';
    console.log("4");
  }
  
},100);
