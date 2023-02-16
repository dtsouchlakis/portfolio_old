const submit = document.body.querySelector("button");
const input = document.body.querySelector("input");
const cardContainer = document.body.querySelector(".cardcontainer");
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const h2 = document.body.querySelector("h2");
const genButton = document.body.querySelector('button');
let cards = [];
let counter = 0;
let winner = false;
let init = input.getAttribute("value");
function initializeFunction(init) {
    if (init) {
        let winningCard;
        value = input.value;
        winningCard = random(1, value);
        for (let index = 1; index <= init; index++) {
            let div = document.createElement("div");
            let flipCardInner = document.createElement("div");
            let flipCardFront = document.createElement("div");
            let flipCardBack = document.createElement("div");
            div.className = "card";
            if (index == winningCard) {
                flipCardBack.innerText = 'O';
            } else {
                flipCardBack.innerText = 'X';
            }
            cardContainer.appendChild(div);
            flipCardInner.className = "flip-card-inner";
            flipCardFront.className = "flip-card-front";
            flipCardBack.className = "flip-card-back";
            div.setAttribute("onclick", `checkWin(this)`);
            flipCardInner.appendChild(flipCardFront);
            flipCardInner.appendChild(flipCardBack);
            div.appendChild(flipCardInner);
        }
    }
}
function cardGenerator() {
    let value;
    let winningCard;
    var audio = new Audio("./shuffling-cards-1.mp3");
    submit.addEventListener("click", function getInput(e) {
        // input.addEventListener('blur',function getValue(e) {
        //      value = e.target.value
        // })
        audio.play();
        value = input.value;
        winningCard = random(1, value);
        console.log(value);
        if (genButton.innerText == "Play again") {
            cardContainer.innerHTML = "";
            genButton.innerText = "generate";
            h2.innerText = "Good Luck!";
            winner = false;
            console.log(value);
            initializeFunction(value);
        } else {
            cardContainer.innerHTML = "";
            for (let index = 1; index <= value; index++) {
                let div = document.createElement("div");
                let flipCardInner = document.createElement("div");
                let flipCardFront = document.createElement("div");
                let flipCardBack = document.createElement("div");
                div.className = "card";
                flipCardInner.className = "flip-card-inner";
                flipCardFront.className = "flip-card-front";
                flipCardBack.className = "flip-card-back";
                div.setAttribute("onclick", `checkWin(this)`);
                flipCardInner.appendChild(flipCardFront);
                flipCardInner.appendChild(flipCardBack);
                div.appendChild(flipCardInner);
                if (index == winningCard) {
                    flipCardBack.innerText = 'O';
                } else {
                    flipCardBack.innerText = 'X';
                }
                cardContainer.appendChild(div);
            }

        }
    });

}
function checkWin(elem) {
    var audio2 = new Audio("flipcard-91468.mp3");
    audio2.play();
    console.log("started checkWin");
    console.log("started card");
    console.log(elem.firstElementChild);
    var flipCardInner = elem.firstElementChild;
    var flipCardFront = flipCardInner.firstElementChild;
    var flipCardBack = flipCardInner.lastElementChild;
    var target = flipCardBack.innerHTML;
    let tries = counter==1 ? "try" : "tries"
    if (!winner) {
        if (target == "O") {
            // elem.classList.add("win");
            h2.innerText = `You won after ${counter} ${tries}`;
            winner = true;
            genButton.innerText = "Play again";
            counter = 0;
            elem.classList.add("flip");
            flipCardBack.classList.add("win");
        } else if (target == "X") {
            // elem.classList.add("lose");
            elem.classList.add("flip");
            flipCardBack.classList.add("lose");
            counter++;
        }
    } else {

    }

}
cardGenerator();
initializeFunction(init);

