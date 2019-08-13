(function(win, doc) {
  'use strict';

  let $html = doc.querySelector('[data-js="html"]');
  let $opacity = 0;
  let increase = true;

  function decreaseOpacity() {
    setTimeout(() => {
      $html.style.opacity = $opacity;
      if ($opacity <= 1 && increase) {
        decreaseOpacity();
      }
    }, 250);

    $opacity = $opacity + 0.1;
  }

  decreaseOpacity();
})(window, document);
