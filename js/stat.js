'use strict';

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

  window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP / 4, CLOUD_Y + GAP / 4, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var color = ['hsl(230, 5%, 25%)', 'hsl(230, 60%, 25%)', 'hsl(230, 100%, 25%)', 'hsl(230, 32%, 25%)'];

  var maxTime = getMaxElement(times);

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP / 2, GAP);
  ctx.fillStyle = '#000';
  ctx.fillText('Список результатов:', CLOUD_X + GAP / 2, GAP * 1.5);


  for (var i = 0; i < players.length; i++) {
    ctx.font = '16px PT Mono';
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP / 4 + BAR_WIDTH + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT + GAP / 2 - (GAP + (MAX_BAR_HEIGHT * times[i]) / maxTime));

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = color[i];
    }

    ctx.fillRect(CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP / 3, BAR_WIDTH, -((MAX_BAR_HEIGHT * times[i]) / maxTime));

    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP / 4 + BAR_WIDTH + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT);
  }
};
