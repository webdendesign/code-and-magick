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

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, 110, 20, "rgba(0, 0, 0, 0.7)");
  renderCloud(ctx, 100, 10, "#fff");

  //text
  ctx.fillStyle = "#000000";
  ctx.font = "16px PT Mono";
  ctx.fillText("Ура вы победили!", CLOUD_X + 20, CLOUD_Y + 30);
  ctx.fillText("Список результатов:", CLOUD_X + 20, CLOUD_Y + 50);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var name = players[i];
    var time = Math.floor(times[i]);

    ctx.fillStyle = "#000000";
    ctx.fillText(
      players[i],
      CLOUD_X + GAP + (COLUMN_WIDTH + STEP) * i,
      CLOUD_Y + GAP + FONT_GAP
    );

    if (name === "Вы") {
      ctx.fillStyle = "rgba(255, 0, 0, 1)";
      ctx.filter = "none";
    } else {
      ctx.fillStyle = "blue";
      ctx.filter = "saturate(" + Math.random() + ")";
    }

    ctx.fillRect(
      CLOUD_X + GAP + (COLUMN_WIDTH + STEP) * i,
      CLOUD_Y + GAP_HEIGHT,
      COLUMN_WIDTH,
      (COLUMN_HEIGHT * times[i]) / maxTime
    );

    ctx.fillStyle = "#000000";
    ctx.fillText(
      time,
      CLOUD_X + GAP + (COLUMN_WIDTH + STEP) * i,
      CLOUD_Y + GAP_HEIGHT + ((COLUMN_HEIGHT * times[i]) / maxTime - 10)
    );
  }
};
