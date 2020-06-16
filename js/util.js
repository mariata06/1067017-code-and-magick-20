'use strict';

// это все было наверху setup.js
(function () {
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

  // функция находит случайный элемент
  var getRandomElement = function (elements) {
    return elements[Math.floor(elements.length * Math.random())];
  };

  window.util = {
    WIZARDS_NAMES: WIZARDS_NAMES,
    WIZARDS_SURNAMES: WIZARDS_SURNAMES,
    COAT_COLOR: COAT_COLOR,
    EYES_COLOR: EYES_COLOR,
    NUMBER_WIZARDS: NUMBER_WIZARDS,
    FIREBALL_COLOR: FIREBALL_COLOR,
    getRandomElement: getRandomElement
  }
})();
