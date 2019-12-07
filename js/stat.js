"use strict";

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 40;
var GAP_HEIGHT = 230;
var FONT_GAP = 210;
var STEP = 50;
var COLUMN_WIDTH = 40;
var COLUMN_HEIGHT = -150;

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

  var players = ["Вы", "Иван", "Юлия", "Таня"];

  ctx.fillStyle = "rgba(255, 0, 0, 1)";
  ctx.fillRect(
    CLOUD_X + GAP,
    CLOUD_Y + GAP_HEIGHT,
    COLUMN_WIDTH,
    COLUMN_HEIGHT
  );

  ctx.fillStyle = "blue";
  ctx.fillRect(
    CLOUD_X + GAP + COLUMN_WIDTH + STEP,
    CLOUD_Y + GAP_HEIGHT,
    COLUMN_WIDTH,
    COLUMN_HEIGHT
  );

  ctx.fillStyle = "grey";
  ctx.fillRect(
    CLOUD_X + GAP + (COLUMN_WIDTH + STEP) * 2,
    CLOUD_Y + GAP_HEIGHT,
    COLUMN_WIDTH,
    COLUMN_HEIGHT
  );

  ctx.fillStyle = "pink";
  ctx.fillRect(
    CLOUD_X + GAP + (COLUMN_WIDTH + STEP) * 3,
    CLOUD_Y + GAP_HEIGHT,
    COLUMN_WIDTH,
    COLUMN_HEIGHT
  );

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = "#000000";
    ctx.fillText(
      players[i],
      CLOUD_X + GAP + (COLUMN_WIDTH + STEP) * i,
      CLOUD_Y + GAP + FONT_GAP
    );
    //   var name = names[i];
    //   var time = times[i];

    //   if (name === 'Вы') {
    //     ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    //     ctx.filter = 'none';
    //   } else {
    //     ctx.fillStyle = 'blue';
    //     ctx.filter = 'saturate(' + Math.random() + ')';
    //   }

    //   ctx.fillRect( , , 40, )
    // }
  }
};
