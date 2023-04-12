let direction = { x: 0, y: 0 };
let scoreBox = document.getElementById("score");
let board = document.getElementById("board");
const speed = 2;
let lastTime = 0;
let snakeArr = [{ x: 13, y: 15 }];
let food = { x: 10, y: 5 };
let score = 0;

function main(currentTime) {
  window.requestAnimationFrame(main);
  if ((currentTime - lastTime) / 1000 < 1 / speed) {
    return;
  }
  lastTime = currentTime;
  game();
}

function isCollide(snake) {
  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
      return true;
    }
  }

  if (
    snake[0].x >= 18 ||
    snake[0].y >= 18 ||
    snake[0].x <= 0 ||
    snake[0].y <= 0
  ) {
    return true;
  }
  return false;
}

function game() {
  if (isCollide(snakeArr)) {
    direction = { x: 0, y: 0 };
    alert("Game Over,Press any key to play again");
    snakeArr = [{ x: 13, y: 15 }];
    score = 0;
    scoreBox.textContent = `Score : ${score}`;
  }

  if (snakeArr[0].x === food.x && snakeArr[0].y === food.y) {
    score++;
    scoreBox.textContent = `Score : ${score}`;
    snakeArr.unshift({
      x: snakeArr[0].x + direction.x,
      y: snakeArr[0].y + direction.y,
    });

    let a = 2;
    let b = 16;
    food = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random()),
    };
  }

  //Moving Snake
  for (let i = snakeArr.length - 2; i >= 0; i--) {
    snakeArr[i + 1] = { ...snakeArr[i] };
  }

  snakeArr[0].x += direction.x;
  snakeArr[0].y += direction.y;

  board.innerHTML = "";

  snakeArr.forEach((e, index) => {
    let snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;
    if (index === 0) {
      snakeElement.classList.add("head");
    } else {
      snakeElement.classList.add("snake");
    }
    board.appendChild(snakeElement);
  });

  //Displaying the food

  let foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  board.appendChild(foodElement);
}

window.addEventListener("keydown", (e) => {
  direction = { x: 0, y: 1 }; // Start the game
  switch (e.key) {
    case "ArrowUp":
      direction.x = 0;
      direction.y = -1;
      break;

    case "ArrowDown":
      direction.x = 0;
      direction.y = 1;
      break;

    case "ArrowLeft":
      direction.x = -1;
      direction.y = 0;
      break;

    case "ArrowRight":
      direction.x = 1;
      direction.y = 0;
      break;
    default:
      break;
  }
});

window.requestAnimationFrame(main);
