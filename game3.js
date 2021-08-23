/*menu variables*/
const game3MenuScreen = document.getElementById("game3SelectionScreen");
const game3PlayBtn =  document.getElementById("game3StartButton");
const game3ErrorField = document.getElementById("errorDisplayField");

/*gameboard variables*/
const game3PlaySpace = document.getElementById("game3MainPlaySpace");
const game3Grid = document.getElementById("game3Grid");

/*Filter only whole numbers between 5 and 30-- raise exception if conditions not met*/
game3PlayBtn.addEventListener("click",function(){
  const game3Input =  parseInt( document.getElementById("game3Input").value );
  
  if(game3Input > 30 || game3Input < 8){
    game3ErrorField.textContent = "Error:- selected value not in acceptable range 8-30";
  }else if(!Number.isInteger(game3Input)){
    game3ErrorField.textContent = "Error:- selected value is not a number";
  } else {
    initGame3(game3Input)
  }
  
});


function initGame3(gridSize){
    /*Initialise start of game*/
    game3ErrorField.textContent = "";
    game3MenuScreen.style.display = "none";
    game3PlaySpace.style.display = "flex";
    
    /*create grid*/
    game3Grid.style.gridTemplateColumns = "repeat("+gridSize+",1fr)";
    game3Grid.style.gridTemplateRows = "repeat("+gridSize+",1fr)";
    
    /*fill grid with mines*/
    var field = (new Array(gridSize)).fill().map(function(){ return new Array(gridSize).fill(0);});
    var Nmines = parseInt((gridSize/2)+2);
    for (let i = 0; i < Nmines; i++) {
      let randX = Math.floor(Math.random() * gridSize+1);
      let randY = Math.floor(Math.random() * gridSize+1);
      console.log(field[randX][randY])
      field[randX][randY] = "x";
    }
    
    /*Count mines -sometimes mines can be overriden*/
    Nmines = 0;
    for (let i = 0; i < field.length; i++){
      for (let j = 0; i < field[i].length; j++){
        if(field[i][j] == "x"){Nmines++}
      } 
    }
    console.log("nmines")
    
}
