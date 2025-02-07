const colors = ["red", "blue", "green", "yellow", "orange","purple"];
let targetColor;
let score = 0;

function startGame () {
  let randomNumber = Math.random();

  if (randomNumber < (1 / 6) ){
     targetColor = colors[0];
  } else if (randomNumber < (2/6)) {
    targetColor = colors[1];
  } else if (randomNumber < (3/6)) {
    targetColor = colors[2];
  } else if (randomNumber < (4/6)) {
    targetColor = colors[3];
  } else if (randomNumber < (5/6)) {
    targetColor = colors[4];
  } else (
    targetColor = colors[5]
  )

  const buttons = document.querySelectorAll(".solu-box");
  buttons.forEach((button, index) => {
    button.style.backgroundColor = colors[index];
    button.onclick = function() {
      if (colors[index] === targetColor) {
        document.querySelector(".color-box").style.backgroundColor = targetColor;
        document.getElementById("gameStatus").textContent = "You Guessed Correctly!";
        score++;
        document.getElementById("score").textContent = score;
      }else {
        document.getElementById("gameStatus").textContent = "Wrong, try again!";
      }
    }
  });
}

document.getElementById("newGameButton").onclick = 
  function reset(){
    score = 0;
    document.querySelector(".color-box").style.backgroundColor = "white";
    document.getElementById("score").textContent = score;
    document.getElementById("gameStatus").textContent = "";
    startGame();
};

startGame();