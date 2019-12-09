var setup = document.querySelector(".setup");
setup.classList.remove("hidden");

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

var coatColorPerson = [
  "rgb(101, 137, 164)",
  "rgb(241, 43, 107)",
  "rgb(146, 100, 161)",
  "rgb(56, 159, 117)",
  "rgb(215, 210, 55)",
  "rgb(0, 0, 0)"
];

var eyesColorPerson = ["black", "red", "blue", "yellow", "green"];

var men = [
  {
    name:
      namePerson[Math.floor(Math.random() * namePerson.length)] +
      " " +
      familyPerson[Math.floor(Math.random() * familyPerson.length)],
    coatColor:
      coatColorPerson[Math.floor(Math.random() * coatColorPerson.length)],
    eyesColor:
      eyesColorPerson[Math.floor(Math.random() * eyesColorPerson.length)]
  },
  {
    name:
      namePerson[Math.floor(Math.random() * namePerson.length)] +
      " " +
      familyPerson[Math.floor(Math.random() * familyPerson.length)],
    coatColor:
      coatColorPerson[Math.floor(Math.random() * coatColorPerson.length)],
    eyesColor:
      eyesColorPerson[Math.floor(Math.random() * eyesColorPerson.length)]
  },
  {
    name:
      namePerson[Math.floor(Math.random() * namePerson.length)] +
      " " +
      familyPerson[Math.floor(Math.random() * familyPerson.length)],
    coatColor:
      coatColorPerson[Math.floor(Math.random() * coatColorPerson.length)],
    eyesColor:
      eyesColorPerson[Math.floor(Math.random() * eyesColorPerson.length)]
  },
  {
    name:
      namePerson[Math.floor(Math.random() * namePerson.length)] +
      " " +
      familyPerson[Math.floor(Math.random() * familyPerson.length)],
    coatColor:
      coatColorPerson[Math.floor(Math.random() * coatColorPerson.length)],
    eyesColor:
      eyesColorPerson[Math.floor(Math.random() * eyesColorPerson.length)]
  }
];
console.log(men);

var template = document.querySelector("#similar-wizard-template");
var nameTemplate = template.querySelector(".setup-similar-label");
