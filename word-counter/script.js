let inputBox = document.getElementById("inputBox");
let words = document.getElementById("words");
let chars = document.getElementById("chars");
let wordsCount;
let charsCount;
let inputValue;
function count() {
  inputValue = inputBox.value.replace(/\s+/g, " ").trim();
  wordsCount = inputValue.split(" ").length;
  charsCount = inputBox.value.length;
  if (charsCount == 0) {
    wordsCount = 0;
  }
  words.textContent = `${wordsCount} Words`;
  chars.textContent = `${charsCount} Characters`;
}
