
const firstInput = document.getElementById('first-input');
const secondInput = document.getElementById('second-input');
const playBtn = document.getElementById('play-button');
const gameBox = document.getElementById('game-box');
const dialogBox = document.getElementById('dialog-box');

const headerBox = document.querySelector('.header-box');

const resultBox = document.getElementById('result-box');
const winnerImage = document.getElementById('winner-image');
const winnerName = document.getElementById('winner-name');
const playAgainBtn = document.getElementById('play-again-button');


let firstPlayer;
let secondPlayer;
let boxValue = ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'];
let firstPlayerTerm = true;


playBtn.addEventListener('click', () => {
    firstPlayer = firstInput.value.length > 0 ? firstInput.value : "First Player";
    secondPlayer = secondInput.value.length > 0 ? secondInput.value : "Second Player";;
    dialogBox.style.display = 'none';
    gameBox.style.display = 'flex';
    headerBox.textContent = `${firstPlayer} : X`;
});

playAgainBtn.addEventListener('click', () => {
    resultBox.style.display = 'none';
    dialogBox.style.display = 'flex';
    firstPlayerTerm = true;
    boxValue = ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'];

    box1.innerHTML = '';
    box2.innerHTML = '';
    box3.innerHTML = '';
    box4.innerHTML = '';
    box5.innerHTML = '';
    box6.innerHTML = '';
    box7.innerHTML = '';
    box8.innerHTML = '';
    box9.innerHTML = '';
});




function onClick(boxNo) {
    if (boxValue[boxNo] === 'X' || boxValue[boxNo] === 'O') {
        return;
    }
    boxValue[boxNo] = firstPlayerTerm ? 'X' : 'O';
    firstPlayerTerm = !firstPlayerTerm;
    headerBox.textContent = firstPlayerTerm ? `${firstPlayer} : X` : `${secondPlayer} : O`;
    putImage(boxNo);
    console.log(boxValue);
}

function putImage(boxNo) {
    if (boxValue[boxNo] !== 'E') {
        const image = document.createElement('img');
        image.setAttribute('src', `images/${boxValue[boxNo]}.png`);
        switch (boxNo) {
            case 0:
                box1.appendChild(image);
                break;
            case 1:
                box2.appendChild(image);
                break;
            case 2:
                box3.appendChild(image);
                break;
            case 3:
                box4.appendChild(image);
                break;
            case 4:
                box5.appendChild(image);
                break;
            case 5:
                box6.appendChild(image);
                break;
            case 6:
                box7.appendChild(image);
                break;
            case 7:
                box8.appendChild(image);
                break;
            case 8:
                box9.appendChild(image);
                break;
        }
    }
    checkWinner();
}

function checkWinner() {

    for (let i = 0; i < boxValue.length; i = i + 3) {
        if (boxValue[i] !== 'E' && boxValue[i] !== 'E' && boxValue[i] !== 'E') {
            if (boxValue[i] === boxValue[i + 1] && boxValue[i + 1] == boxValue[i + 2]) {
                displayResult(boxValue[i]);
            }
        }
    }
    for (let i = 0; i < 3; i++) {
        if (boxValue[i] !== 'E' && boxValue[i + 3] !== 'E' && boxValue[i + 6] !== 'E') {
            if (boxValue[i] === boxValue[i + 3] && boxValue[i + 3] == boxValue[i + 6]) {
                displayResult(boxValue[i]);
            }
        }
    }

    if (boxValue[0] !== 'E' && boxValue[4] !== 'E' && boxValue[8] !== 'E') {
        if (boxValue[0] == boxValue[4] && boxValue[4] == boxValue[8]) {
            displayResult(boxValue[0]);
        }
    }

    if (boxValue[2] !== 'E' && boxValue[4] !== 'E' && boxValue[6] !== 'E') {
        if (boxValue[2] == boxValue[4] && boxValue[4] == boxValue[6]) {
            displayResult(boxValue[2]);
        }
    }

    if (!(boxValue.includes('E'))) {
        displayResult('D');
    }
}


function displayResult(character) {

    gameBox.style.display = "none";
    resultBox.style.display = "flex";

    if (character !== 'D') {
        winnerImage.src = "images/medal.png";
        winnerName.textContent = character === 'X' ? firstPlayer : secondPlayer;
    } else {
        winnerImage.src = "images/draw.png";
        winnerName.textContent = "Draw";
    }
}
