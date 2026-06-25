/* ==========================================================================
   SmileCare Dental — FAQ Accordion
   ========================================================================== */

(function () {
  'use strict';

  var questions = document.querySelectorAll('.faq-question');

  questions.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = this.closest('.faq-item');
      if (!item) return;

      var isActive = item.classList.contains('active');

      /* Close all open FAQ items */
      document.querySelectorAll('.faq-item.active').forEach(function (openItem) {
        if (openItem !== item) {
          openItem.classList.remove('active');
        }
      });

      /* Toggle clicked item */
      if (isActive) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  });
})();
