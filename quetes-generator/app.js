AOS.init();
const box = document.querySelector(".box");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
let quotes;
let quoteData;
let randNum;

const url = "https://type.fit/api/quotes";

const loadQuetes = async () => {
  try {
    let data = await fetch(url);
    quotes = await data.json();
    randNum = getRandomNumber();
    quoteData = quotes[randNum];
    quote.textContent = quoteData.text;
    let authorName = quoteData.author;
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
  let url = `https://twitter.com/intent/tweet?text=${quoteData.text}`;
  window.open(url);
};
loadQuetes();
