/*menu variables*/
const game3MenuScreen = document.getElementById("game3SelectionScreen");
const game3PlayBtn =  document.getElementById("game3StartButton");
const game3ErrorField = document.getElementById("errorDisplayField");

/*gameboard variables*/
const game3PlaySpace = document.getElementById("game3MainPlaySpace");
const game3Grid = document.getElementById("game3Grid");
var field = []

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

/*Logic for when a tile is clicked*/
game3Grid.addEventListener("click",function(e){
  const clickedTile = e.target;
  let tileY = clickedTile.style.gridRowStart;
  let tileX = clickedTile.style.gridColumnStart;
  clickedTile.classList.remove("landTile");
  clickedTile.textContent = field[tileY-1][tileX-1];
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
    field = (new Array(gridSize)).fill().map(function(){ return new Array(gridSize).fill(0);});
    var Nmines = parseInt((gridSize/2)+2);
    for (let i = 0; i < Nmines; i++) {
      let randX = Math.floor(Math.random() * gridSize);
      let randY = Math.floor(Math.random() * gridSize);
      console.log(randX,randY)
      field[randX][randY] = "x";
    }
    
    /*iterate through all mines and adds 1 all around them as well as drawing the board*/
    Nmines = 0;
    for (let i = 0; i < field.length; i++){
      for (let j = 0; j < field[i].length; j++){
        const tile = document.createElement("div");
        tile.style.gridColumnStart = i+1;
        tile.style.gridRowStart = j+1;
        tile.classList.add("landTile");
        tile.classList.add("minesweeperTile");
        game3Grid.appendChild(tile);
        
        /*Add one all around mines*/
        if(typeof field[i][j] == "string"){
          Nmines++
          
          /* below */
          try{
            field[i+1][j] = (field[i+1][j])+1;   
          }catch(e){}
          
          /* above */
          try{
            field[i-1][j] = (field[i-1][j])+1;   
          }catch(e){}
          
          /* left */
          try{
            field[i][j-1] = (field[i][j-1])+1;   
          }catch(e){}
          
          /* right */
          try{
            if(j<gridSize-1){field[i][j+1] = (field[i][j+1])+1;}
          }catch(e){}
         
          /* NE corner */
          try{
            if(j<gridSize-1){field[i-1][j+1] = (field[i-1][j+1])+1;}
          }catch(e){}
          
          /* SE corner */
          try{
            if(j<gridSize-1){field[i+1][j+1] = (field[i+1][j+1])+1;}
          }catch(e){}
          
          /* SW corner */
          try{
            field[i+1][j-1] = (field[i+1][j-1])+1;   
          }catch(e){}
          
          /* NW corner */
          try{
            field[i-1][j-1] = (field[i-1][j-1])+1;   
          }catch(e){}
          
        }
      } 
    }
    
    console.log(field)
}
