let isDark = false;
function toggleTheme() {
  if (!isDark) {
    document.body.style.backgroundColor = "var(--dark-color)";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "var(--dark-color)";
  }
  isDark = !isDark;
}
