'use strict';

var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var NUMBER_WIZARDS = 4;
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var setupOpen = document.querySelector('.setup-open');
var userDialog = document.querySelector('.overlay');
var setupClose = userDialog.querySelector('.setup-close');
var wizardFireBall = document.querySelector('.setup-fireball');
var userNameInput = document.querySelector('.setup-user-name');
var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getRandomElement(COAT_COLOR);
});

wizardFireBall.addEventListener('click', function () {
  wizardFireBall.style.backgroundColor = getRandomElement(FIREBALL_COLOR);
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getRandomElement(EYES_COLOR);
});

var openPopup = function () {
  userDialog.classList.remove('hidden');
};

var closePopup = function () {
  userDialog.classList.add('hidden');
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    closePopup();
  }
});

var listElement = userDialog.querySelector('.setup-similar-list');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomElement = function (elements) {
  return elements[Math.floor(elements.length * Math.random())];
};

var renderData = function () {
  var wizards = [];

  for (var i = 0; i < NUMBER_WIZARDS; i++) {
    var wizardObject = {
      name: getRandomElement(WIZARDS_NAMES) + ' ' + getRandomElement(WIZARDS_SURNAMES),
      coatColor: getRandomElement(COAT_COLOR),
      eyesColor: getRandomElement(EYES_COLOR)
    };
    wizards.push(wizardObject);
  }

  return wizards;
};

var renderedWizards = renderData(NUMBER_WIZARDS);

var renderWizard = function (wizard) {
  var wizardElement = wizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var getWizardsFragment = function (wizards) {
  var fragment = document.createDocumentFragment();

  for (var j = 0; j < wizards.length; j++) {

    fragment.appendChild(renderWizard(wizards[j]));

  }
  return fragment;
};

listElement.appendChild(getWizardsFragment(renderedWizards));

userDialog.querySelector('.setup-similar').classList.remove('hidden');
