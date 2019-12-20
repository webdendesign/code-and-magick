'use strict';

(function () {
  window.random = {
    getRandom: function (value) {
      return value[Math.floor(Math.random() * value.length)];
    }
  };
})();
