/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let tlds = [".com", ".net", ".us", ".io"];

const getRandomElement = array => {
  if (!Array.isArray(array) || array.length === 0) return "";
  return array[Math.floor(Math.random() * array.length)];
};

const domainGenerator = () => {
  return `${getRandomElement(pronoun)}${getRandomElement(
    adj
  )}${getRandomElement(noun)}<strong>${getRandomElement(tlds)}</strong>`;
};

const domainText = () => {
  const domainElement = document.getElementById("domain-generator__text");
  if (domainElement) {
    domainElement.innerHTML = domainGenerator();
  }
};

const initDomainGenerator = () => {
  domainText();
  setInterval(domainText, 2500);
};

initDomainGenerator();
