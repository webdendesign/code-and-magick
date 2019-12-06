"use strict";

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function(ctx) {
  var positionStartX = 100;
  var positionStartY = 10;

  renderCloud(ctx, 110, 20, "rgba(0, 0, 0, 0.7)");
  renderCloud(ctx, 100, 10, "#fff");

  //text
  ctx.fillStyle = "#000000";
  ctx.font = "16px PT Mono";
  ctx.fillText("Ура вы победили!", positionStartX + 20, positionStartY + 30);
  ctx.fillText("Список результатов:", positionStartX + 20, positionStartY + 50);

  var gistogramHeight = 150;
  var colomnWidth = 40;
  var step = colomnWidth + 50;

  ctx.fillStyle = "rgba(255, 0, 0, 1)";
  ctx.fillText("Вы", 140, 280);
  ctx.fillRect(140, 240, 40, -50);

  ctx.fillStyle = "blue";
  ctx.fillText("Иван", 230, 260);
  ctx.fillRect(230, 90, 430, 20);

  ctx.fillStyle = "grey";
  ctx.fillText("Юлия", 320, 260);
  ctx.fillRect(320, 120, 430, 20);

  //   for (var i = 0; i < times.lenght; i++) {
  //     var name = names[i];
  //     var time = times[i];

  //     if (name === 'Вы') {
  //       ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  //       ctx.filter = 'none';
  //     } else {
  //       ctx.fillStyle = 'blue';
  //       ctx.filter = 'saturate(' + Math.random() + ')';
  //     }

  //     ctx.fillRect( , , 40, )
  //   }
};
