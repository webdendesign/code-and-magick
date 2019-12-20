'use strict';

(function () {
  var setup = document.querySelector('.setup');

  var setupSimilar = setup.querySelector('.setup-similar');

  setupSimilar.classList.remove('hidden');

  var setupSimilarList = setup.querySelector('.setup-similar-list');

  var template = document
    .querySelector('#similar-wizard-template')
    .content.querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = template.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent =
      wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill =
      wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill =
      wizard.colorEyes;

    return wizardElement;
  };

  var successHandler = function (wizards) {

    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }

    setupSimilarList.appendChild(fragment);

    setupSimilar.classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.load(successHandler, errorHandler);

})();
