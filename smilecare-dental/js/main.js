/* ==========================================================================
   SmileCare Dental — Main Entry Point
   ========================================================================== */

(function () {
  'use strict';

  /* --- Page Loader --- */
  var loader = document.getElementById('loader');
  if (loader) {
    window.addEventListener('load', function () {
      loader.classList.add('hidden');
    });

    // Fallback: hide loader after 3s even if load event doesn't fire
    setTimeout(function () {
      if (loader && !loader.classList.contains('hidden')) {
        loader.classList.add('hidden');
      }
    }, 3000);
  }

  /* --- Current year for footer copyright --- */
  var yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* --- IntersectionObserver polyfill detection --- */
  if (!('IntersectionObserver' in window)) {
    // Fallback: show all reveal elements immediately
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-fade, .reveal-scale')
      .forEach(function (el) {
        el.classList.add('visible');
      });
  }

  console.log('%c SmileCare Dental 🦷 ', 'background:#0ea5e9;color:#fff;font-size:1.2rem;padding:8px 16px;border-radius:4px;font-weight:600;');
  console.log('%c Your Perfect Smile Starts Here ', 'color:#14b8a6;font-size:0.9rem;');
})();
