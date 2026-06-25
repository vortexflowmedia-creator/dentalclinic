/* ==========================================================================
   SmileCare Dental — Scroll Reveal & Animated Counters
   ========================================================================== */

(function () {
  'use strict';

  /* --- Scroll Reveal using IntersectionObserver --- */
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var el = entry.target;
        var delay = el.getAttribute('data-delay');
        if (delay) {
          el.style.transitionDelay = delay + 'ms';
        }
        el.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-fade, .reveal-scale, .stagger-children')
    .forEach(function (el) {
      revealObserver.observe(el);
    });

  /* --- Animated Counters --- */
  var countersFired = false;

  var counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !countersFired) {
        countersFired = true;
        animateCounters();
      }
    });
  }, { threshold: 0.3 });

  var statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length) {
    counterObserver.observe(statNumbers[0].parentElement.parentElement);
  }

  function animateCounters() {
    statNumbers.forEach(function (el) {
      var target = parseInt(el.getAttribute('data-count'), 10);
      if (isNaN(target)) return;

      var suffix = el.getAttribute('data-suffix') || '';
      if (!suffix) {
        suffix = target >= 1000 ? '+' : (target === 98 ? '%' : '+');
      }

      var duration = 2000;
      var startTime = performance.now();

      function update(now) {
        var elapsed = now - startTime;
        var progress = Math.min(elapsed / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var current = Math.round(eased * target);
        el.textContent = current.toLocaleString() + suffix;
        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }

      requestAnimationFrame(update);
    });
  }
})();
