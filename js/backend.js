'use strict';

(function () {
  /*
    var onError = function (message) {
      console.error(message);
    };

    var onLoad = function (data) {
      return data;
    };
  */
  var load = function (onLoad, onError) {
    var URL = 'https://javascript.pages.academy/code-and-magick/data';
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    // data = FormData;

    xhr.open('GET', URL);

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.send();
  };

  var save = function (data, onLoad, onError) {
    var URL = 'https://javascript.pages.academy/code-and-magick';
    var xhr = new XMLHttpRequest();
    xhr.open('POST', URL);

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
        window.setup.userDialog.classList.add('hidden');
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.send();
  };

  window.backend = {
    load: load,
    save: save
  };
})();
