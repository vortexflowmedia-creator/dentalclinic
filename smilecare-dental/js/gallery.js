/* ==========================================================================
   SmileCare Dental — Gallery Lightbox
   ========================================================================== */

(function () {
  'use strict';

  var items = document.querySelectorAll('.gallery-item');
  if (!items.length) return;

  var lightbox = document.getElementById('lightbox');
  var lightboxImage = document.getElementById('lightboxImage');
  var lightboxTitle = document.getElementById('lightboxTitle');
  var lightboxDesc = document.getElementById('lightboxDesc');
  var lightboxClose = document.getElementById('lightboxClose');
  var lightboxPrev = document.getElementById('lightboxPrev');
  var lightboxNext = document.getElementById('lightboxNext');

  var currentIndex = 0;

  /* --- Gallery data from data attributes --- */
  function getItemData(index) {
    var el = items[index];
    return {
      title: el.getAttribute('data-title') || 'Smile Transformation',
      desc: el.getAttribute('data-desc') || '',
      color: el.getAttribute('data-color') || 'linear-gradient(135deg, #0ea5e9, #14b8a6)',
      number: String(index + 1).padStart(2, '0')
    };
  }

  function openLightbox(index) {
    if (!lightbox) return;
    currentIndex = index;
    var data = getItemData(index);

    if (lightboxImage) {
      lightboxImage.style.background = data.color;
      lightboxImage.innerHTML = '<span style="font-size:4rem;font-weight:800;color:rgba(255,255,255,0.15);font-family:Playfair Display,serif;">' + data.number + '</span>';
    }

    if (lightboxTitle) lightboxTitle.textContent = data.title;
    if (lightboxDesc) lightboxDesc.textContent = data.desc;

    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    openLightbox(currentIndex);
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % items.length;
    openLightbox(currentIndex);
  }

  /* --- Bind click on gallery items --- */
  items.forEach(function (item, index) {
    item.addEventListener('click', function () {
      openLightbox(index);
    });
  });

  /* --- Lightbox controls --- */
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevImage);
  if (lightboxNext) lightboxNext.addEventListener('click', nextImage);

  /* --- Close on backdrop click --- */
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }

  /* --- Keyboard navigation --- */
  document.addEventListener('keydown', function (e) {
    if (!lightbox || !lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
  });
})();
