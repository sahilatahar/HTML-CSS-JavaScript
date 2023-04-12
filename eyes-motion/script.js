const pupils = document.querySelectorAll(".pupil");
let pupilsArr = Array.from(pupils);

let pupilStartPoint = -40;
let pupilRange = 75;

//mouse X position
let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let currentXPosition = 0;
let fracXValue = 0;

//mouse Y position
let mouseYEndPoint = window.innerHeight;
let currentYPosition = 0;
let fracYValue = 0;

let mouseXRange = mouseXEndPoint - mouseXStartPoint;

const mouseover = (event) => {
  currentXPosition = event.clientX - mouseXStartPoint;
  fracXValue = currentXPosition / mouseXRange;

  currentYPosition = event.clientY;
  fracYValue = currentYPosition / mouseYEndPoint;

  let pupilsXCurrentPosition = pupilStartPoint + fracXValue * pupilRange;
  let pupilsYCurrentPosition = pupilStartPoint + fracYValue * pupilRange;

  pupilsArr.forEach((currentPupil) => {
    currentPupil.style.transform = `translate(${pupilsXCurrentPosition}px,${pupilsYCurrentPosition}px)`;
  });
};

const windowResize = (event) => {
  mouseXEndPoint = window.innerWidth;
  mouseYEndPoint = window.innerHeight;
  mouseXRange = mouseXEndPoint - mouseXStartPoint;
};

window.addEventListener("resize", windowResize);
window.addEventListener("mousemove", mouseover);
