AOS.init();
const box = document.querySelector(".box");
const quete = document.querySelector(".quete");
const author = document.querySelector(".author");
let quetes;
let queteData;
let randNum;

const url = "https://type.fit/api/quotes";

const loadQuetes = async () => {
  try {
    let data = await fetch(url);
    quetes = await data.json();
    randNum = getRandomNumber();
    queteData = quetes[randNum];
    quete.textContent = queteData.text;
    let authorName = queteData.author;
    author.textContent = `- ${authorName != null ? authorName : "By Unknown"}`;
  } catch (e) {
    console.log(e);
  }
};
const getRandomNumber = () => {
  min = Math.ceil(0);
  max = Math.floor(1642);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const share = () => {
  let url = `https://twitter.com/intent/tweet?text=${queteData.text}`;
  window.open(url);
};
loadQuetes();
