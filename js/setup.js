'use strict';

(function () {
  var setupOpen = document.querySelector('.setup-open');
  var userDialog = document.querySelector('.overlay');
  var setupClose = userDialog.querySelector('.setup-close');
  var wizardFireBall = document.querySelector('.setup-fireball');
  var userNameInput = document.querySelector('.setup-user-name');
  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');

  window.setup = {
    userDialog: userDialog
  }

  // Валидация поля с именем
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

  // Переключение случайного цвета мантии, фаерболла, глаз волшебника по клику
  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = window.util.getRandomElement(window.util.COAT_COLOR);
  });

  wizardFireBall.addEventListener('click', function () {
    wizardFireBall.style.backgroundColor = window.util.getRandomElement(window.util.FIREBALL_COLOR);
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = window.util.getRandomElement(window.util.EYES_COLOR);
  });

  // Обновление координат при повторном открытии окна
  var openPopup = function () {
    userDialog.classList.remove('hidden');
    userDialog.style.top = window.dialog.START_Y_COORDS;
    userDialog.style.left = window.dialog.START_X_COORDS;
  };

  var closePopup = function () {
    userDialog.classList.add('hidden');
    // console.log(window.dialog.x);
    // console.log(window.dialog.y);
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
    if (evt.key === 'Escape' && userNameInput !== document.activeElement) {
      closePopup();
    }
  });

})();
