const daySelect = document.querySelector('#day');
const monthSelect = document.querySelector('#month');
const yearSelect = document.querySelector('#year');
const output = document.querySelector('#output');

let year;
let month;
let day;

const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const monthsName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Putting year options
for (let i = 1920; i <= 2023; i++) {
  yearSelect.innerHTML += `<option value="${i}">${i}</option>`;
}

//Putting month options
for (let i = 0; i < 12; i++) {
  monthSelect.innerHTML += `<option value="${i}">${monthsName[i]}</option>`;
}

// function to check leap year
function checkLeapYear(year) {
  //three conditions to find out the leap year
  return ((0 == year % 4) && (0 != year % 100) || (0 == year % 400));
}
const setDayOptions = () => {
  checkLeapYear(year) ? days[1] = 29 : days[1] = 28;

  yearSelect.innerHTML = '';
  for (let i = 1; i <= days[month]; i++) {
    daySelect.innerHTML += `<option value="${i}">${i}</option>`;
  }
}

yearSelect.addEventListener('change', () => {
  year = yearSelect.value;
  if (month !== undefined) {
    setDayOptions();
  }
});

monthSelect.addEventListener('change', () => {
  month = monthSelect.value;
  if (year !== undefined) {
    setDayOptions();
  }
});

daySelect.addEventListener('change', () => {
  day = daySelect.value;
  // Displaying Output on day change
  output.textContent = `Your DOB is: ${day}/${month}/${year}.`;
});
