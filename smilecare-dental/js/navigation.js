/* ==========================================================================
   SmileCare Dental — Navigation (navbar, hamburger, scroll, active link)
   ========================================================================== */

(function () {
  'use strict';

  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const scrollBtn = document.getElementById('scrollTop');

  /* --- Scroll effects --- */
  function onScroll() {
    const y = window.scrollY;
    navbar && navbar.classList.toggle('scrolled', y > 60);
    scrollBtn && scrollBtn.classList.toggle('show', y > 500);
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  /* --- Hamburger toggle --- */
  hamburger && hamburger.addEventListener('click', function () {
    this.classList.toggle('active');
    navLinks && navLinks.classList.toggle('open');
  });

  /* --- Close mobile menu on link click --- */
  navLinks && navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger && hamburger.classList.remove('active');
      navLinks && navLinks.classList.remove('open');
    });
  });

  /* --- Active link highlighting --- */
  (function highlightActive() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    navLinks && navLinks.querySelectorAll('a').forEach(function (a) {
      const href = a.getAttribute('href');
      if (href === path || (path === '' && href === 'index.html')) {
        a.classList.add('active');
      }
    });
  })();

  /* --- Scroll-to-top --- */
  scrollBtn && scrollBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* --- Smooth anchor scroll for same-page links --- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();
