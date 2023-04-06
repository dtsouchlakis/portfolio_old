// An array to hold all possible winning combinations

const winners = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

// An array to hold all ticked boxes
let tickedONew;
let tickedXNew;

// Function to check if any player has won
function chickenDinner(tickedO = [], tickedX = []) {
  console.log("getting dinner");
  let winner;
  tickedONew = tickedO.map((s) => s.id);
  console.log(tickedONew);
  tickedXNew = tickedX.map((s) => s.id);
  console.log(tickedXNew);
  for (let tick of winners) {
    console.log("tick is" + tick);
    if (multipleInArray(tickedONew, tick)) {
      console.log("O wins!" + "U+1F3C6");
      winner = "O";
      for (let x of tick) {
        console.log(x);
        document.querySelector(`div div:nth-child(${x})`).style.background =
          "green";
      }
      return winner;
    } else if (multipleInArray(tickedXNew, tick)) {
      console.log("X wins!" + "U+1F3C6");
      winner = "X";
      for (let x of tick) {
        console.log(x);
        document.querySelector(`div div:nth-child(${x})`).style.background =
          "green";
      }
      return winner;
    } else {
    }
  }
  if (tickedONew.length + tickedXNew.length === 9 && !winner) {
    console.log("It's a draw!");
    winner = "draw";
    return winner;
  }
}
// A function to check if a value is in an array
function multipleInArray(arr, values) {
  return values.every((value) => {
    return arr.includes(value);
  });
}

const tickedO = [];
const tickedX = [];
const prize = "🏆";
var winner;

// Function to start the game
function ticTacToe() {
  var counter = true;
  const divs = document.querySelectorAll(".main div");
  const h2 = document.querySelector("h2");
  for (let div of divs) {
    div.addEventListener(
      "click",
      function eventHandler(e) {
        if (!winner) {
          if (counter) {
            if (!div.innerText) {
              let divElement = {};
              let boxCont = e.target.textContent;
              counter = false;
              let elemnt = document.createTextNode("X");
              div.appendChild(elemnt);
              boxCont = e.target.textContent;
              divElement.id = parseInt(e.target.id.replace("box", ""));
              divElement.content = boxCont;
              console.log(boxCont);
              tickedX.push(divElement);
              console.log(divElement);
              console.log(tickedX);
              winner = chickenDinner(tickedO, tickedX);
              if (winner) {
                winner == "draw"
                  ? (h2.innerText = `${winner}`)
                  : (h2.innerText = `${winner} wins! ${prize}`);
                console.log(h2);
              }
              e.stopPropagation;
            } else {
              alert("already placed");
            }
          } else {
            if (!div.innerText) {
              let divElement = {};
              let boxCont = e.target.textContent;
              counter = true;
              let elemnt = document.createTextNode("O");
              div.appendChild(elemnt);
              boxCont = e.target.textContent;
              divElement.id = parseInt(e.target.id.replace("box", ""));
              console.log(divElement.id);
              divElement.content = boxCont;
              console.log(boxCont);
              tickedO.push(divElement);
              console.log(divElement);
              console.log(tickedO);
              winner = chickenDinner(tickedO, tickedX);
              if (winner) {
                winner == "draw"
                  ? (h2.innerText = `${winner}`)
                  : (h2.innerText = `${winner} wins! ${prize}`);
                console.log(h2);
              }
              e.stopPropagation;
            } else {
              alert("already placed");
            }
          }
        }
      },
      true
    );
  }
}
ticTacToe();
