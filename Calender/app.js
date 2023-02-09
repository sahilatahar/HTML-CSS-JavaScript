const currentDate = document.querySelector(".current-date");
const daysElement = document.querySelector(".days");
const prevNextIcon = document.querySelectorAll(".icons span");

let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const setCurrentDate = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
  let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
  let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
  let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

  console.log(firstDayofMonth, lastDateofMonth, lastDateofLastMonth);
  daysElement.innerHTML = "";

  for (let i = firstDayofMonth; i > 0; i--) {
    daysElement.innerHTML += `<li class="inactive">${
      lastDateofLastMonth - i + 1
    }</li>`;
  }

  for (let i = 1; i <= lastDateofMonth; i++) {
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear();

    daysElement.innerHTML += `<li class="${isToday ? "active" : ""}">${i}</li>`;
  }

  for (let i = lastDayofMonth; i < 6; i++) {
    daysElement.innerHTML += `<li class="inactive">${
      i - lastDayofMonth + 1
    }</li>`;
  }

  currentDate.textContent = `${months[currMonth]} ${currYear}`;
};

setCurrentDate();

prevNextIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    currMonth = icon.id === "previous" ? currMonth - 1 : currMonth + 1;

    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth);
      currMonth = date.getMonth();
      currYear = date.getFullYear();
    } else {
      date = new Date();
    }
    setCurrentDate();
  });
});
