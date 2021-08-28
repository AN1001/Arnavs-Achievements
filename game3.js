/*menu variables*/
const game3MenuScreen = document.getElementById("game3SelectionScreen");
const game3PlayBtn =  document.getElementById("game3StartButton");
const game3ErrorField = document.getElementById("errorDisplayField");
const game3ResultsBtn = document.getElementById("game3ReturnBtn");

/*gameboard variables*/
const game3PlaySpace = document.getElementById("game3MainPlaySpace");
const game3GridSpace = document.getElementById("game3GridSpace");
const game3FinishBtn = document.getElementById("game3EndBtn");
const NumberFlags = document.getElementById("NFlags")
const NumberMines = document.getElementById("NMines")

var playingGame3 = false;
var shiftKeyPressed = false;
var flags = 0;
var noErrorsMade = true;
var field = [];

/* Filter only whole numbers between 5 and 30-- raise exception if conditions not met */
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

/* Handles what happens when game is ended / end button in pressed */
game3FinishBtn.addEventListener("click", function(){

  if(flags > 0){
    showResults("Failed","Not all flags were placed")
    noErrorsMade = false;
    playingGame3 = false;
    root.style.setProperty('--game3-mine-animation',"reveal 20s infinite");
  } else {
    
    for (let i = 0; i < field.length; i++){
      for (let j = 0; j < field[i].length; j++){ 
        const listElement = field[i][j];
        if(typeof listElement == "object"){
          if(typeof listElement[0] == "string"){
          }else {
            showResults("Failed","There were misplaced flags")
            noErrorsMade=false;
            playingGame3=false;
            root.style.setProperty('--game3-mine-animation',"reveal 20s infinite");
          }
        }
        
      } 
    }
      
  }
  
  if(noErrorsMade){
    root.style.setProperty('--game3-mine-animation',"revealLocation 20s infinite");
    playingGame3=false;
    showResults("You win!","All mines flagged correctly")
  }
  
});

game3ResultsBtn.addEventListener("click",function(){
    root.style.setProperty('--game3-mine-animation',"fadebackground 3s");
    console.log("Player died at ---> Game 3")
    document.getElementById("game3Results").style.display = "none";
    game3ErrorField.textContent = "Game ended"
    game3MenuScreen.style.display = "flex";
    game3PlaySpace.style.display = "none";
});

function showResults(result,message){
    document.getElementById("game3Results").style.display = "block";
    document.getElementById("resultsH1").textContent = result;
    document.getElementById("resultsP").textContent = message;
}

function initGame3(gridSize){
    /*Initialise start of game*/
    playingGame3 = true;
    noErrorsMade = true;
    game3ErrorField.textContent = "";
    game3MenuScreen.style.display = "none";
    game3PlaySpace.style.display = "flex";
    
    document.getElementById("game3Grid").remove()
    const game3Grid = document.createElement("div")
    game3Grid.setAttribute("id", "game3Grid");
    game3GridSpace.appendChild(game3Grid)
  
  
    /*Checks if shift key is pressed*/
    window.onkeydown = function(e) { if(e.keyCode == 88){shiftKeyPressed = true;} }
    window.onkeyup = function(e) { if(e.keyCode == 88){shiftKeyPressed = false;} }
  
    /*Logic for when a tile is clicked*/
    game3Grid.addEventListener("click",function(e){
      const clickedTile = e.target;
      let tileY = clickedTile.style.gridRowStart;
      let tileX = clickedTile.style.gridColumnStart;
      let tileID = field[tileY-1][tileX-1]
      
      
      if(shiftKeyPressed && playingGame3){
        if(!clickedTile.classList.contains("containsFlag") && flags>0 && clickedTile.classList.contains("landTile") && playingGame3){
          
          /*Add a flag*/
          flags--
          NumberFlags.textContent = flags+" Flags";
          clickedTile.classList.add("containsFlag")
          field[tileY-1][tileX-1] = [tileID];
          
        }else if(clickedTile.classList.contains("containsFlag") && playingGame3){
          
          /*Remove a flag*/
          flags++
          NumberFlags.textContent = flags+" Flags";
          clickedTile.classList.remove("containsFlag")
          field[tileY-1][tileX-1] = tileID[0];
        }
        
        
      } else if(typeof tileID == "string" && !clickedTile.classList.contains("containsFlag") && playingGame3){
        /* Handle death occurence */
        showResults("Failed","You clicked on a mine")
        root.style.setProperty('--game3-mine-animation',"reveal 20s infinite");
        playingGame3 = false;
    
      } else if(typeof tileID == "number" && !tileID == 0 && !clickedTile.classList.contains("containsFlag") && playingGame3){
        clickedTile.classList.remove("landTile");
        clickedTile.style.animation = "";
        clickedTile.textContent = tileID;
        switch(tileID){
          case 1:
            clickedTile.style.color = "blue";
            break;
          
          case 2:
            clickedTile.style.color = "green";
            break;
            
          case 3:
            clickedTile.style.color = "red";
            break;
            
          case 4:
            clickedTile.style.color = "purple";
            break;
            
          default:
            clickedTile.style.color = "maroon";
        }
          
      }
      
      
    });
  
    /*create grid*/
    game3Grid.style.gridTemplateColumns = "repeat("+gridSize+",1fr)";
    game3Grid.style.gridTemplateRows = "repeat("+gridSize+",1fr)";
    
    /*fill grid with mines*/
    field = (new Array(gridSize)).fill().map(function(){ return new Array(gridSize).fill(0);});
    var NIts = parseInt(0.15*(gridSize*gridSize));
    for (let i = 0; i < NIts; i++) {
      let randX = Math.floor(Math.random() * gridSize);
      let randY = Math.floor(Math.random() * gridSize);
      field[randX][randY] = "x";
    }
      
  
    /*iterate through all mines and adds 1 all around them as well as drawing the board*/
    var Nmines = 0;
    for (let i = 0; i < field.length; i++){
      for (let j = 0; j < field[i].length; j++){
          
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
    
    flags = Nmines;
    NumberFlags.textContent = flags+" Flags";
    NumberMines.textContent = Nmines+" Mines";
    root.style.setProperty('--game3-adaptive-font-size', (20/gridSize) + "em");
       
    /*Draws all tiles*/
    for (let i = 0; i < field.length; i++){
      for (let j = 0; j < field[i].length; j++){
        const tile = document.createElement("div");
        tile.style.gridColumnStart = i+1;
        tile.style.gridRowStart = j+1;
        if(!field[j][i] == 0){
          tile.classList.add("landTile");
          tile.classList.add("minesweeperTile");
          if(typeof field[j][i] == "string"){
            tile.style.animation = "var(--game3-mine-animation)"
            tile.style.animationDelay = (j)/10+"s";
          }else if(gridSize < 19){
            tile.style.animation = "fadebackground 3s";
            tile.style.animationDelay = (j)/10+"s";
          }
          
        }else{
          tile.classList.add("emptyTile");
        }
          game3Grid.appendChild(tile);
      }
    }
      
    
    
    
}
