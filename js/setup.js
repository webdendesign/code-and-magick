"use strict";

var setup = document.querySelector(".setup");

var setupSimilar = setup
  .querySelector(".setup-similar")
  .classList.remove("hidden");

var setupSimilarList = setup.querySelector(".setup-similar-list");

var namePerson = [
  "Иван",
  "Хуан Себастьян",
  "Мария",
  "Кристоф",
  "Виктор",
  "Юлия",
  "Люпита",
  "Вашингтон"
];

var familyPerson = [
  "да Марья",
  "Верон",
  "Мирабелла",
  "Вальц",
  "Онопко",
  "Топольницкая",
  "Нионго",
  "Ирвинг"
];

var coatColor = [
  "rgb(101, 137, 164)",
  "rgb(241, 43, 107)",
  "rgb(146, 100, 161)",
  "rgb(56, 159, 117)",
  "rgb(215, 210, 55)",
  "rgb(0, 0, 0)"
];

var eyesColor = ["black", "red", "blue", "yellow", "green"];

var fireball = ["#ee4830", "#30a8ee", "#5ce6c0", "#e848d5", "#e6e848"];

var randomName = function(name) {
  return namePerson[Math.floor(Math.random() * namePerson.length)];
};

var randomFamily = function(family) {
  return familyPerson[Math.floor(Math.random() * familyPerson.length)];
};

var randomCoatColor = function(coat) {
  return coatColor[Math.floor(Math.random() * coatColor.length)];
};

var randomEyesColor = function(eyes) {
  return eyesColor[Math.floor(Math.random() * eyesColor.length)];
};

var randomFireball = function(fireball) {
  return fireball[Math.floor(Math.random() * fireball.length)];
};

// var men = [
//   {
//     name: randomName(namePerson) + " " + randomFamily(familyPerson),
//     coatColor: randomCoatColor(coatColor),
//     eyesColor: randomEyesColor(eyesColor)
//   },
//   {
//     name: randomName(namePerson) + " " + randomFamily(familyPerson),
//     coatColor: randomCoatColor(coatColor),
//     eyesColor: randomEyesColor(eyesColor)
//   },
//   {
//     name: randomName(namePerson) + " " + randomFamily(familyPerson),
//     coatColor: randomCoatColor(coatColor),

//     eyesColor: randomEyesColor(eyesColor)
//   },
//   {
//     name: randomName(namePerson) + " " + randomFamily(familyPerson),
//     coatColor: randomCoatColor(coatColor),

//     eyesColor: randomEyesColor(eyesColor)
//   }
// ];

var template = document
  .querySelector("#similar-wizard-template")
  .content.querySelector(".setup-similar-item");

var renderWizard = function(wizard) {
  var wizardElement = template.cloneNode(true);

  wizardElement.querySelector(".setup-similar-label").textContent =
    window.wizards[i].name;
  wizardElement.querySelector(".wizard-coat").style.fill =
    window.wizards[i].coatColor;
  wizardElement.querySelector(".wizard-eyes").style.fill =
    window.wizards[i].eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < window.wizards.length; i++) {
  fragment.appendChild(renderWizard(window.wizards[i]));
}

setupSimilarList.appendChild(fragment);

//Изменение цвета мантии персонажа по нажатию

var setupWizard = document.querySelector(".setup-wizard");

var setupWizardAppearance = document.querySelector(".setup-wizard-appearance");

var wizardCoat = setupWizard.querySelector(".wizard-coat");
wizardCoat.addEventListener("click", function() {
  setupWizardAppearance.querySelector(
    "input"
  ).value = wizardCoat.style.fill = randomCoatColor(coatColor);
});

//Изменение цвета глаз персонажа по нажатию

var wizardEyes = setupWizard.querySelector(".wizard-eyes");
wizardEyes.addEventListener("click", function() {
  wizardEyes.style.fill = randomEyesColor(eyesColor);
});

//Изменение цвета фаерболов по нажатию

var setupFireballWrap = setup.querySelector(".setup-fireball-wrap");
var setupFireball = setupFireballWrap.querySelector(".setup-fireball");
setupFireball.addEventListener("click", function() {
  setupFireballWrap.querySelector(
    "input"
  ).value = setupFireballWrap.style.background = randomFireball(fireball);
});
