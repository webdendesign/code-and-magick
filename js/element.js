"use strict";

(function () {
  var setup = document.querySelector(".setup");

  var setupSimilar = setup.querySelector(".setup-similar");

  setupSimilar.classList.remove("hidden");

  var setupSimilarList = setup.querySelector(".setup-similar-list");

  var template = document
    .querySelector("#similar-wizard-template")
    .content.querySelector(".setup-similar-item");

  var renderWizard = function (wizard) {
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
})();
