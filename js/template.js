'use strict';

(function () {
  var listElement = window.setup.userDialog.querySelector('.setup-similar-list');
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

/*  
  var renderData = function () {
    var wizards = [];

    for (var i = 0; i < window.util.NUMBER_WIZARDS; i++) {
      var wizardObject = {
        name: window.util.getRandomElement(window.util.WIZARDS_NAMES) + ' ' + window.util.getRandomElement(window.util.WIZARDS_SURNAMES),
        coatColor: window.util.getRandomElement(window.util.COAT_COLOR),
        eyesColor: window.util.getRandomElement(window.util.EYES_COLOR)
      };
      wizards.push(wizardObject);
    }

    return wizards;
  };

  var renderedWizards = renderData(window.util.NUMBER_WIZARDS);
*/
  var renderWizard = function (wizard) {
    var wizardElement = wizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  /*
  var getWizardsFragment = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var j = 0; j < wizards.length; j++) {

      fragment.appendChild(renderWizard(wizards[j]));

    }
    return fragment;
  };

  listElement.appendChild(getWizardsFragment(renderedWizards));

  window.setup.userDialog.querySelector('.setup-similar').classList.remove('hidden');
  */

  window.backend.load(function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(window.util.getRandomElement(wizards)));
    }
    listElement.appendChild(fragment);

    window.setup.userDialog.querySelector('.setup-similar').classList.remove('hidden');
  }, function () {});
})();
