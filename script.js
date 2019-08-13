(function(win, doc) {
  'use strict';

  let $html = doc.querySelector('[data-js="html"]');
  let $opacity = 0;
  let increase = true;

  function decreaseOpacity() {
    $opacity = $opacity - 0.1;
    setTimeout(() => {
      $html.style.opacity = $opacity;
      if ($opacity >= 0 && !increase) {
        decreaseOpacity();
      }
    }, 150);
  }

  function increaseOpacity() {
    setTimeout(() => {
      $html.style.opacity = $opacity;
      if ($opacity < 1 && increase) {
        increaseOpacity();
      }
      if ($opacity >= 1) {
        increase = false;
        decreaseOpacity();
      }
    }, 150);

    $opacity = $opacity + 0.1;
  }

  increaseOpacity();
})(window, document);
