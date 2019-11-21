window.renderStatistics = function (ctx, names, times) {

  var positionStartX = 100;
  var positionStartY = 10;

  //shadow
  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect(positionStartX + 10, positionStartY + 10, 420, 270);

  //cluod
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(positionStartX, positionStartY, 420, 270);

  //text
  ctx.fillStyle = "#000000";
  ctx.font = "16px PT Mono";
  ctx.fillText("Ура вы победили!", positionStartX + 20, positionStartY + 30);
  ctx.fillText("Список результатов:", positionStartX + 20, positionStartY + 50);

  var gistogramHeight = 150;
  var colomnWidth = 40;
  var step = colomnWidth + 50;

  for (var i = 0; i < times.lenght; i++) {
    var name = names[i];
    var time = times[i];



    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.filter = 'none';
    } else {
      ctx.fillStyle = 'blue';
      ctx.filter = 'saturate(' + Math.random() + ')';
    }

    ctx.fillRect( , , 40, )
  }
}
