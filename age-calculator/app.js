var input = document.getElementById("birthdate");
let years_block = document.getElementById("years");
let months_block = document.getElementById("months");
let days_block = document.getElementById("days");

function daysInMonth(month, year) {
  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) days[1] = 29;
  else days[1] = 28;

  return days[month - 1];
}

function calculate() {
  let currentDate = new Date();
  let birthDate = new Date(input.value);
  let days = 0,
    months = 0,
    year = 0;
  let birthDay = birthDate.getUTCDate(),
    birthMonth = birthDate.getUTCMonth() + 1,
    birthYear = birthDate.getUTCFullYear();
  var currentDay = currentDate.getUTCDate(),
    currentMonth = currentDate.getUTCMonth() + 1,
    currentYear = currentDate.getUTCFullYear();

  for (var i = birthYear + 1; i < currentYear; i++) {
    year++;
  }
  for (var i = birthMonth + 1; i <= 12; i++) {
    months++;
  }
  for (var i = 1; i < currentMonth; i++) {
    months++;
  }

  for (var i = birthDay + 1; i <= daysInMonth(birthMonth, birthYear); i++) {
    days++;
  }

  for (var i = 1; i < currentDay; i++) {
    console.log("day2 run");
    days++;
  }

  while (days >= 30 || months >= 12) {
    if (months >= 12) {
      year++;
      months = months - 12;
    }
    if (days >= 30) {
      months++;
      days = days - 30;
    }
  }

  if (year != 0 || months != 0 || year != 0) {
    years_block.textContent = year;
    months_block.textContent = months;
    days_block.textContent = days;
  } else {
    years_block.textContent = "-";
    months_block.textContent = "-";
    days_block.textContent = "-";
  }
}
