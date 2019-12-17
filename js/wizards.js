"use strict";

(function() {
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

  var men;

  window.wizards = [
    {
      name: randomName(namePerson) + " " + randomFamily(familyPerson),
      coatColor: randomCoatColor(coatColor),
      eyesColor: randomEyesColor(eyesColor)
    },
    {
      name: randomName(namePerson) + " " + randomFamily(familyPerson),
      coatColor: randomCoatColor(coatColor),
      eyesColor: randomEyesColor(eyesColor)
    },
    {
      name: randomName(namePerson) + " " + randomFamily(familyPerson),
      coatColor: randomCoatColor(coatColor),

      eyesColor: randomEyesColor(eyesColor)
    },
    {
      name: randomName(namePerson) + " " + randomFamily(familyPerson),
      coatColor: randomCoatColor(coatColor),

      eyesColor: randomEyesColor(eyesColor)
    }
  ];
})();
