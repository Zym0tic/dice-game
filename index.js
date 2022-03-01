/** dice image one */
var randomNumberOne = Math.floor(Math.random()*6) + 1;
var randomDiceImg = "images/dice" + randomNumberOne + ".png";
var dice1 = document.querySelectorAll("img")[0].setAttribute("src", randomDiceImg);

/** dice image two*/
var randomNumberTwo = Math.floor(Math.random()*6) + 1;
var randomDiceImg2 = "images/dice" + randomNumberTwo + ".png";
var dice2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImg2);

/** winner notification */
var winner = document.querySelector("h1");
if (randomNumberOne > randomNumberTwo){
  winner.innerHTML = "Player One Wins!";
}else if (randomNumberOne < randomNumberTwo){
  winner.innerHTML = "Player Two wins!";
}else if (randomNumberOne === randomNumberTwo){
  winner.innerHTML = "draw"
}
