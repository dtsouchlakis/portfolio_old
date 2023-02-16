const winners = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
]
let tickedONew
let tickedXNew
function chickenDinner(tickedO=[],tickedX=[]) {
    console.log("getting dinner");
    let winner
    tickedONew = tickedO.map(s=>s.id)
    console.log(tickedONew);
    tickedXNew = tickedX.map(s=>s.id)
    console.log(tickedXNew);
    for(let tick of winners){
        console.log("tick is" + tick);
        if (multipleInArray(tickedONew,tick)) {
            console.log("O wins!" +"\U+1F3C6");
            winner = "O"
            for(let x of tick){
                console.log(x)
                document.querySelector(`div div:nth-child(${x})`).style.background = "green"
            }
            return winner
        }else if(multipleInArray(tickedXNew,tick)){
            console.log("X wins!"+"\U+1F3C6");
            winner = "X"
            for(let x of tick){
                console.log(x)
                document.querySelector(`div div:nth-child(${x})`).style.background = "green"
              }
            return winner
        }else{
            // break
        }
        
    
    }
    if (tickedONew.length + tickedXNew.length === 9 && !winner) {
        console.log("It's a draw!");
        winner = "draw";
        return winner;
      }
}
// function arrayEquals(a, b) {
//     return Array.isArray(a) &&
//         Array.isArray(b) &&
//         a.length === b.length &&
//         a.every((val, index) => val == b[index]);
// }
function multipleInArray(arr, values) {
    return values.every(value => {
      return arr.includes(value);
    });
  }
const tickedO = [

]
const tickedX = [

]
const prize = "🏆"
var winner
// const divElement = {}
function ticTacToe() {
    var counter = true
    // var divConts = []
    const divs = document.querySelectorAll(".main div")
    const h2 = document.querySelector("h2")

    for(let div of divs){
        // console.log(divs.innerText)
        // divConts.push(div.innerText)
        // console.log(divs.includes(3))

        div.addEventListener("click",function eventHandler(e) {
            

            if (!winner) {
                 if (counter) {
                     if (!div.innerText) {
                         let divElement = {}
                         let boxCont = e.target.textContent
                         counter=false
                         let elemnt = document.createTextNode("X")
                         div.appendChild(elemnt)
                         boxCont = e.target.textContent
                         divElement.id = parseInt(e.target.id.replace("box",""))
                         // divElement.id.replace("box","")
                         divElement.content =  boxCont
                         // ticked.push(`id`)
                         console.log(boxCont)
                         tickedX.push(divElement)
                         console.log(divElement);
                         console.log(tickedX);
                         winner = chickenDinner(tickedO,tickedX)
                         if (winner) {
                            winner =="draw" ? h2.innerText = `${winner}`:h2.innerText = `${winner} wins! ${prize}`
                            console.log(h2);

                        }
                         e.stopPropagation
                     }else{
                         alert("already placed")
                     }
                 }else{
                     if (!div.innerText) {
                         let divElement = {}
                         let boxCont = e.target.textContent
                         counter = true
                         let elemnt = document.createTextNode("O")
                         div.appendChild(elemnt)
                         boxCont = e.target.textContent
                         divElement.id = parseInt(e.target.id.replace("box",""))
                         // divElement.id.replace("box","")
                         console.log(divElement.id);
                         divElement.content =  boxCont
                         // ticked.push(`id`)
                         console.log(boxCont)
                         tickedO.push(divElement)
                         console.log(divElement);
                         console.log(tickedO);
                         winner = chickenDinner(tickedO,tickedX)
                         if (winner) {
                             winner == "draw" ? h2.innerText = `${winner}`:h2.innerText = `${winner} wins! ${prize}`
                            console.log(h2);
                         }
                         e.stopPropagation
                     }else{
                         alert("already placed")
                     }
                     
                 }
            }
    
        },true)
    }
}

ticTacToe()