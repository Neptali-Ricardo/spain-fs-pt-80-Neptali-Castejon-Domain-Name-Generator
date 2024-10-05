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
let tlds = [".com", ".net", ".es", ".info", ".org"];
let alertClasses = [
  "alert-warning",
  "alert-success",
  "alert-danger",
  "alert-info"
];
let iconsClasses = [
  "fa-face-smile",
  "fa-face-surprise",
  "fa-face-flushed",
  "fa-face-dizzy",
  "fa-face-grin-hearts",
  "fa-face-frown",
  "fa-face-smile-wink",
  "fa-face-grin-tongue-squint"
];

const getRandomElement = array => {
  if (!Array.isArray(array) || array.length === 0) return "";
  return array[Math.floor(Math.random() * array.length)];
};

const domainGenerator = () => {
  return `www.<strong>${getRandomElement(pronoun)}${getRandomElement(
    adj
  )}${getRandomElement(noun)}</strong>${getRandomElement(tlds)}`;
};

const updateDomainText = () => {
  const domainElement = document.getElementById("domain-generator__text");
  if (domainElement) {
    domainElement.innerHTML = domainGenerator();
  }
};

const updateAlertClass = () => {
  const containerElement = document.getElementById("domain-generator");
  if (containerElement) {
    // Remueve las clases de alerta anteriores y agrega una nueva aleatoria
    containerElement.classList.remove(...alertClasses);
    containerElement.classList.add("alert", getRandomElement(alertClasses));
  }
};

const updateDomainIcon = () => {
  const iconElement = document.getElementById("domain-generator__icon");
  if (iconElement) {
    // Remueve las clases de íconos anteriores y agrega una nueva aleatoria
    iconElement.classList.remove(...iconsClasses);
    iconElement.classList.add("fa-regular", getRandomElement(iconsClasses));
  }
};

const initDomainGenerator = () => {
  const updateAll = () => {
    updateDomainText();
    updateAlertClass();
    updateDomainIcon();
  };

  updateAll(); // Llama a la función de actualización inicial
  setInterval(updateAll, 2500); // Actualiza cada 2.5 segundos
};

initDomainGenerator();
