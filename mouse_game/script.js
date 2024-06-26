const boxes = document.querySelectorAll(".box");
const target = document.querySelector(".target");
const timerElem = document.querySelector(".timer");
const num = document.querySelector("#num");
const roll = document.querySelector(".roll");
const winnerDiv = document.querySelector("#winner");
const timerNum = document.querySelector("#timer");
const bestScoreDiv = document.querySelector("#bestScore");
const bestContainerDiv = document.querySelector(".bestContainer");
let bestScore = 0;

//window size
const w = window.innerWidth - target.offsetWidth;
const h = window.innerHeight - target.offsetHeight;

//random integer
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//random position
function randomPosition(elem) {
  elem.style.top = getRandomInt(0, h) + "px";
  elem.style.left = getRandomInt(0, w) + "px";
}

//random winner
function randomWinner() {
  return getRandomInt(1, 5);
}

//box game function
function boxGame() {
  console.log("bestscore", bestScore);
  let t2 = 0;
  var y = setInterval(() => {
    t2++;
    console.log(t2);
  }, 1000);
  let winner = randomWinner();
  winnerDiv.textContent = winner;
  let t = 5;
  timerElem.style.display = "none";
  target.classList.remove("win");
  roll.classList.toggle("trigger");
  for (let box of boxes) {
    randomPosition(box);
    let mouse;
    let offsetX;
    let offsetY;
    let mouseX;
    let mouseY;
    box.addEventListener("mousedown", function (e) {
      mouse = e.type;
      mouseX = e.offsetX;
      mouseY = e.offsetY;
    });

    document.addEventListener("mousemove", function (e) {
      offsetX = e.clientX;
      offsetY = e.clientY;

      if (mouse == "mousedown") {
        box.style.left = offsetX - mouseX + "px";
        box.style.top = offsetY - mouseY + "px";
      } else {
      }
    });

    box.addEventListener("mouseup", function (e) {
      mouse = e.type;

      if (
        parseInt(box.style.left) > parseInt(target.style.left) &&
        parseInt(box.style.left) + 100 < parseInt(target.style.left) + 110 &&
        parseInt(box.style.top) > parseInt(target.style.top) &&
        parseInt(box.style.top) + 100 < parseInt(target.style.top) + 110
      ) {
        if (box.textContent == winner) {
          console.log("won");
          target.classList.add("win");
          target.classList.remove("lose");
          timerElem.style.display = "block";
          roll.classList.toggle("trigger");
          timerNum.textContent = t2;

          if (bestScore != 0) {
            bestContainerDiv.style.display = "block";
            bestScoreDiv.textContent = bestScore;
          } else if (bestScore == 0) {
            bestScore = t2;
          }
          if (t2 < bestScore) {
            bestScore = t2;
          }
          var x = setInterval(function () {
            t--;
            num.innerHTML = t;
            if (t == 0) {
              num.innerHTML = 6;
              clearInterval(x);
              clearInterval(y);

              boxGame();
            }
          }, 1000);
        } else {
          target.classList.add("lose");
          target.classList.remove("win");
        }
      } else {
        target.classList.add("lose");
        target.classList.remove("win");
      }
    });
  }
}
boxGame();
randomPosition(target);
