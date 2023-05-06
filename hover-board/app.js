const container = document.querySelector('.container');
const squareSize = container.clientWidth / 10;

const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

for (let i = 1; i <= 304; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = squareSize;
    square.style.height = squareSize;

    square.addEventListener('mouseover', (e) => setColor(e));
    square.addEventListener('mouseout', (e) => removeColor(e));

    container.appendChild(square);

}

function setColor(e) {
    let square = e.target;
    let color = colors[Math.floor(Math.random() * colors.length)];
    square.style.backgroundColor = color;
    square.style.boxShadow = `0px 0px 2px ${color}`;
}

function removeColor(e) {
    let square = e.target;
    square.style.backgroundColor = '#1d1d1d';
    square.style.boxShadow = '0px 0px 2px #000';
}