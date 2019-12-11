var setup = document.querySelector(".setup");

var setupSimilar = document
  .querySelector(".setup-similar")
  .classList.remove("hidden");

var setupSimilarList = document.querySelector(".setup-similar-list");

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

var randomName = function(person) {
  return namePerson[Math.floor(Math.random() * namePerson.length)];
};

var men = [
  {
    name:
      randomName(namePerson) +
      " " +
      familyPerson[Math.floor(Math.random() * familyPerson.length)],
    coatColor:
      coatColorPerson[Math.floor(Math.random() * coatColorPerson.length)],
    eyesColor:
      eyesColorPerson[Math.floor(Math.random() * eyesColorPerson.length)]
  },
  {
    name:
      randomName(namePerson) +
      " " +
      familyPerson[Math.floor(Math.random() * familyPerson.length)],
    coatColor:
      coatColorPerson[Math.floor(Math.random() * coatColorPerson.length)],
    eyesColor:
      eyesColorPerson[Math.floor(Math.random() * eyesColorPerson.length)]
  },
  {
    name:
      randomName(namePerson) +
      " " +
      familyPerson[Math.floor(Math.random() * familyPerson.length)],
    coatColor:
      coatColorPerson[Math.floor(Math.random() * coatColorPerson.length)],
    eyesColor:
      eyesColorPerson[Math.floor(Math.random() * eyesColorPerson.length)]
  },
  {
    name:
      randomName(namePerson) +
      " " +
      familyPerson[Math.floor(Math.random() * familyPerson.length)],
    coatColor:
      coatColorPerson[Math.floor(Math.random() * coatColorPerson.length)],
    eyesColor:
      eyesColorPerson[Math.floor(Math.random() * eyesColorPerson.length)]
  }
];

var template = document
  .querySelector("#similar-wizard-template")
  .content.querySelector(".setup-similar-item");

var renderWizard = function(wizard) {
  var wizardElement = template.cloneNode(true);

  wizardElement.querySelector(".setup-similar-label").textContent = men[i].name;
  wizardElement.querySelector(".wizard-coat").style.fill = men[i].coatColor;
  wizardElement.querySelector(".wizard-eyes").style.fill = men[i].eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < men.length; i++) {
  fragment.appendChild(renderWizard(men[i]));
}

setupSimilarList.appendChild(fragment);

var setupOpen = document.querySelector(".setup-open");
var setupClose = setup.querySelector(".setup-close");

var onPopupEscPress = function(evt) {
  if (evt.keyCode === 27) {
    closePopup();
  }
};

var openPopup = function() {
  setup.classList.remove("hidden");

  document.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      closePopup();
    }
  });
  document.addEventListener("keydown", onPopupEscPress);
};

var closePopup = function() {
  setup.classList.add("hidden");
  document.removeEventListener("keydown", onPopupEscPress);
};

var buttonClickHandler = function(evt) {
  openPopup();
};

setupOpen.addEventListener("click", buttonClickHandler);

setupOpen.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 13) {
    openPopup();
  }
});

var spanClickHandler = function() {
  closePopup();
};

setupClose.addEventListener("click", spanClickHandler);

setupClose.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 13) {
    closePopup();
  }
});

var userNameInput = setup.querySelector(".setup-user-name");

userNameInput.addEventListener("invalid", function(evt) {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity(
      "Имя должно состоять минимум из 2-х символов"
    );
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity("Имя не должно превышать 25-ти символов");
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity("Обязательное поле");
  } else {
    userNameInput.setCustomValidity("");
  }
});

userNameInput.addEventListener("input", function(evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity("Имя должно состоять минимум из 2-х символов");
  } else {
    target.setCustomValidity("");
  }
});
