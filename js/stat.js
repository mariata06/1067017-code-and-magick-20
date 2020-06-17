'use strict';

(function () {

  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 50;
  var BAR_WIDTH = 40;
  var MAX_BAR_HEIGHT = 150;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  var renderTitle = function (ctx, string1, string2) {
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText(string1, CLOUD_X + GAP / 2, GAP);
    ctx.fillText(string2, CLOUD_X + GAP / 2, GAP * 1.5);
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP / 4, CLOUD_Y + GAP / 4, 'rgba(0, 0, 0, 0.3)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
    renderTitle(ctx, 'Ура вы победили!', 'Список результатов:');

    var maxTime = getMaxElement(times);

    for (var i = 0; i < players.length; i++) {
      ctx.font = '16px PT Mono';
      ctx.fillText(Math.round(times[i]), CLOUD_X + GAP / 4 + BAR_WIDTH + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT + GAP / 2 - (GAP + (MAX_BAR_HEIGHT * times[i]) / maxTime));

      if (players[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'hsl(230,' + Math.random() * 100 + '%, 25%)';
      }

      ctx.fillRect(CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP / 3, BAR_WIDTH, -((MAX_BAR_HEIGHT * times[i]) / maxTime));

      ctx.fillStyle = '#000';
      ctx.fillText(players[i], CLOUD_X + GAP / 4 + BAR_WIDTH + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT);
    }
  };
})();
