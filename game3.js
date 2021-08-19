const game3MenuScreen = document.getElementById("game3SelectionScreen");
const game3PlayBtn =  document.getElementById("game3StartButton");
const game3ErrorField = document.getElementById("errorDisplayField");

/*Filter only whole numbers between 5 and 30-- raise exception if conditions not met*/
game3PlayBtn.addEventListener("click",function(){
  const game3Input =  document.getElementById("game3Input").value;
  if(game3Input > 30 || game3Input < 5){
    game3ErrorField.textContent = "Error:- selected value not in acceptable range 5-30";
  }else if(!game3Input.isInteger()){
    game3ErrorField.textContent = "Error:- selected value is not a whole number";
  } else {
    game3ErrorField.textContent = "";
  }
  
});
