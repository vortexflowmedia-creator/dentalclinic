/* ==========================================================================
   SmileCare Dental — Form Handling (Contact, Newsletter)
   ========================================================================== */

(function () {
  'use strict';

  /* --- Contact Form --- */
  var contactForm = document.getElementById('contactForm');
  var formSuccess = document.getElementById('formSuccess');

  if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Validate required fields
      var required = contactForm.querySelectorAll('[required]');
      var valid = true;
      required.forEach(function (field) {
        if (!field.value.trim()) {
          field.style.borderColor = '#ef4444';
          valid = false;
        } else {
          field.style.borderColor = '';
        }
      });

      // Email validation
      var email = contactForm.querySelector('input[type="email"]');
      if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.style.borderColor = '#ef4444';
        valid = false;
      }

      if (!valid) return;

      // Show success
      contactForm.style.display = 'none';
      formSuccess.classList.add('show');

      setTimeout(function () {
        formSuccess.classList.remove('show');
        contactForm.style.display = 'flex';
        contactForm.reset();
        required.forEach(function (f) { f.style.borderColor = ''; });
      }, 4000);
    });

    // Reset error styling on input
    contactForm.querySelectorAll('input, textarea, select').forEach(function (field) {
      field.addEventListener('input', function () {
        this.style.borderColor = '';
      });
    });
  }

  /* --- Newsletter Form --- */
  var newsletterForm = document.querySelector('.newsletter-form');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = this.querySelector('input');
      if (!input) return;

      if (!input.value.trim()) return;

      var original = input.value;
      input.value = 'Thanks for subscribing!';
      input.style.color = '#14b8a6';

      var self = this;
      setTimeout(function () {
        input.value = '';
        input.style.color = '';
        self.querySelector('button').blur();
      }, 2500);
    });
  }
})();
