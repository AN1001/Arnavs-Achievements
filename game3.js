/*menu variables*/
const game3MenuScreen = document.getElementById("game3SelectionScreen");
const game3PlayBtn =  document.getElementById("game3StartButton");
const game3ErrorField = document.getElementById("errorDisplayField");

/*gameboard variables*/
const game3PlaySpace = document.getElementById("game3MainPlaySpace");
const game3GridSpace = document.getElementById("game3GridSpace");
const game3FinishBtn = document.getElementById("game3EndBtn");
const NumberFlags = document.getElementById("NFlags")
const NumberMines = document.getElementById("NMines")

var shiftKeyPressed = false;
var win = true;
var field = [];

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

/*Handles what happens when game is ended*/
game3FinishBtn.addEventListener("click", function(){
  
  if(flags > 0){
    console.log("failed: not all flags were placed");
    win = false;
  } else {
    
    for (let i = 0; i < field.length; i++){
      for (let j = 0; j < field[i].length; j++){ 
        const listElement = field[i][j];
        if(typeof listElement == "object"){
          if(typeof listElement[0] == "string"){
          }else {console.log("fail: misplaced flag"); win=false;}
        }
        
      } 
    }
      
  }
  
  if(win){
    console.log("WIN")
  }
  
});


function initGame3(gridSize){
    /*Initialise start of game*/
    game3ErrorField.textContent = "";
    game3MenuScreen.style.display = "none";
    game3PlaySpace.style.display = "flex";
    
    document.getElementById("game3Grid").remove()
    const game3Grid = document.createElement("div")
    game3Grid.setAttribute("id", "game3Grid");
    game3GridSpace.appendChild(game3Grid)
  
  
    /*Checks if shift key is pressed*/
    window.onkeydown = function(e) { shiftKeyPressed = true; }
    window.onkeyup = function(e) { shiftKeyPressed = false; }
  
    /*Logic for when a tile is clicked*/
    game3Grid.addEventListener("click",function(e){
      const clickedTile = e.target;
      let tileY = clickedTile.style.gridRowStart;
      let tileX = clickedTile.style.gridColumnStart;
      let tileID = field[tileY-1][tileX-1]
      
      
      if(shiftKeyPressed){
        if(!clickedTile.classList.contains("containsFlag") && flags>0 && clickedTile.classList.contains("landTile")){
          
          /*Add a flag*/
          flags--
          NumberFlags.textContent = flags+" Flags";
          clickedTile.classList.add("containsFlag")
          field[tileY-1][tileX-1] = [tileID];
          console.log(typeof field[tileY-1][tileX-1],field)
          
        }else if(clickedTile.classList.contains("containsFlag")){
          
          /*Remove a flag*/
          flags++
          NumberFlags.textContent = flags+" Flags";
          clickedTile.classList.remove("containsFlag")
          field[tileY-1][tileX-1] = tileID[0];
          console.log(field)
        }
        
        
      } else if(typeof tileID == "string" && !clickedTile.classList.contains("containsFlag")){
        /* Handle death occurence */
        console.log("Player died at ---> Game 3")
        game3ErrorField.textContent = "You Died";
        game3MenuScreen.style.display = "flex";
        game3PlaySpace.style.display = "none";
    
      } else if(typeof tileID == "number" && !tileID == 0 && !clickedTile.classList.contains("containsFlag")){
        clickedTile.classList.remove("landTile");
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
    var Nmines = parseInt(0.15*(gridSize*gridSize));
    for (let i = 0; i < Nmines; i++) {
      let randX = Math.floor(Math.random() * gridSize);
      let randY = Math.floor(Math.random() * gridSize);
      field[randX][randY] = "x";
    }
      
    var flags = Nmines;
    NumberFlags.textContent = flags+" Flags";
    NumberMines.textContent = Nmines+" Mines";
    root.style.setProperty('--game3-adaptive-font-size', (20/gridSize) + "em");
  
    /*iterate through all mines and adds 1 all around them as well as drawing the board*/
    Nmines = 0;
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
  
      
    /*Draws all tiles*/
    for (let i = 0; i < field.length; i++){
      for (let j = 0; j < field[i].length; j++){
        const tile = document.createElement("div");
        tile.style.gridColumnStart = i+1;
        tile.style.gridRowStart = j+1;
        if(!field[j][i] == 0){
          tile.classList.add("landTile");
          tile.classList.add("minesweeperTile");
          if(gridSize < 19){
            tile.style.animation = "fadebackground 3s";
            tile.style.animationDelay = (j*i)/100+"s";
          }
        }else{
          tile.classList.add("emptyTile");
        }
          game3Grid.appendChild(tile);
      }
    }
      
    
    
    console.log(field)
}
