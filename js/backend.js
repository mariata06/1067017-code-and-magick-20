'use strict';

(function () {
  var URL = 'https://javascript.pages.academy/code-and-magick/data';
  var onError = function (message) {
    console.error(message);
  };

  var onLoad = function (data) {
    return data;
  };

  var load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    //data = FormData;

    xhr.open('GET', URL);

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
  }

  var save = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', URL);

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.send(data);
  }

  window.backend = {
    load : load,
    save: save,
    onLoad: onLoad,
    onError : onError
  }
})();
