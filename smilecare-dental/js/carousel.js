/* ==========================================================================
   SmileCare Dental — Testimonials Carousel
   ========================================================================== */

(function () {
  'use strict';

  var track    = document.getElementById('testimonialTrack');
  var dots     = document.getElementById('testimonialDots');
  var prevBtn  = document.getElementById('prevBtn');
  var nextBtn  = document.getElementById('nextBtn');

  if (!track) return;

  var slides = track.querySelectorAll('.testimonial-slide');
  if (!slides.length) return;

  var current = 0;
  var autoplayTimer = null;
  var AUTOPLAY_DELAY = 5000;

  function goTo(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    current = index;
    track.style.transform = 'translateX(-' + (index * 100) + '%)';

    if (dots) {
      var dotEls = dots.querySelectorAll('.carousel-dot');
      dotEls.forEach(function (d, i) {
        d.classList.toggle('active', i === index);
      });
    }

    resetAutoplay();
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function resetAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
    autoplayTimer = setInterval(next, AUTOPLAY_DELAY);
  }

  /* --- Create dots --- */
  if (dots) {
    for (var i = 0; i < slides.length; i++) {
      (function (idx) {
        var dot = document.createElement('button');
        dot.className = 'carousel-dot' + (idx === 0 ? ' active' : '');
        dot.setAttribute('aria-label', 'Go to slide ' + (idx + 1));
        dot.addEventListener('click', function () { goTo(idx); });
        dots.appendChild(dot);
      })(i);
    }
  }

  /* --- Event listeners --- */
  if (prevBtn) prevBtn.addEventListener('click', prev);
  if (nextBtn) nextBtn.addEventListener('click', next);

  /* --- Touch / swipe support --- */
  (function () {
    var startX = 0;
    var isDragging = false;

    track.addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX;
      isDragging = true;
    }, { passive: true });

    track.addEventListener('touchend', function (e) {
      if (!isDragging) return;
      isDragging = false;
      var diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) next();
        else prev();
      }
    }, { passive: true });

    track.addEventListener('mousedown', function (e) {
      startX = e.clientX;
      isDragging = true;
    });

    track.addEventListener('mouseup', function (e) {
      if (!isDragging) return;
      isDragging = false;
      var diff = startX - e.clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) next();
        else prev();
      }
    });

    track.addEventListener('mouseleave', function () {
      isDragging = false;
    });
  })();

  /* --- Start autoplay --- */
  resetAutoplay();
})();
