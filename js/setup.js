"use strict";

(function () {
  var setup = document.querySelector(".setup");

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

  //Изменение цвета мантии персонажа по нажатию

  var setupWizard = document.querySelector(".setup-wizard");

  var setupWizardAppearance = document.querySelector(
    ".setup-wizard-appearance"
  );

  var input = setupWizardAppearance.querySelectorAll("input");

  var wizardCoat = setupWizard.querySelector(".wizard-coat");
  wizardCoat.addEventListener("click", function () {
    wizardCoat.style.fill = window.random.getRandom(coatColor);
  });

  //Изменение цвета глаз персонажа по нажатию

  var wizardEyes = setupWizard.querySelector(".wizard-eyes");
  wizardEyes.addEventListener("click", function () {
    wizardEyes.style.fill = window.random.getRandom(eyesColor);
  });

  //Изменение цвета фаерболов по нажатию

  var setupFireballWrap = setup.querySelector(".setup-fireball-wrap");
  var setupFireball = setupFireballWrap.querySelector(".setup-fireball");
  setupFireball.addEventListener("click", function () {
    setupFireballWrap.style.background = window.random.getRandom(
      fireball
    );
  });
})();
