// ============ LOADER ============
window.addEventListener('load', () => {
  document.getElementById('loader').classList.add('hidden');
});

// ============ NAVBAR SCROLL ============
const navbar = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  navbar.classList.toggle('scrolled', scrollY > 50);
  scrollTopBtn.classList.toggle('show', scrollY > 400);
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============ HAMBURGER ============
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// ============ SCROLL REVEAL ============
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = entry.target.getAttribute('data-delay');
      if (delay) {
        entry.target.style.transitionDelay = delay + 'ms';
      }
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ============ STAT COUNTER ============
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-count'));
      const suffix = target === 98 ? '%' : target === 15 ? '+' : target === 50 ? '+' : target === 10000 ? '+' : '+';
      const duration = 2000;
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);
        el.textContent = current.toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(el => counterObserver.observe(el));

// ============ TESTIMONIALS CAROUSEL ============
const track = document.getElementById('testimonialTrack');
const dots = document.getElementById('testimonialDots');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const cards = track.querySelectorAll('.testimonial-card');
let currentSlide = 0;
let autoplay;

function createDots() {
  cards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'testimonial-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToSlide(i));
    dots.appendChild(dot);
  });
}

function goToSlide(index) {
  currentSlide = index;
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.querySelectorAll('.testimonial-dot').forEach((d, i) => {
    d.classList.toggle('active', i === index);
  });
  resetAutoplay();
}

function nextSlide() {
  goToSlide((currentSlide + 1) % cards.length);
}

function prevSlideFn() {
  goToSlide((currentSlide - 1 + cards.length) % cards.length);
}

function resetAutoplay() {
  clearInterval(autoplay);
  autoplay = setInterval(nextSlide, 5000);
}

if (cards.length) {
  createDots();
  prevBtn.addEventListener('click', prevSlideFn);
  nextBtn.addEventListener('click', nextSlide);
  resetAutoplay();
}

// ============ FAQ ACCORDION ============
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const isActive = item.classList.contains('active');

    document.querySelectorAll('.faq-item.active').forEach(el => {
      el.classList.remove('active');
    });

    if (!isActive) item.classList.add('active');
  });
});

// ============ CONTACT FORM ============
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  contactForm.style.display = 'none';
  formSuccess.classList.add('show');
  setTimeout(() => {
    formSuccess.classList.remove('show');
    contactForm.style.display = 'flex';
    contactForm.reset();
  }, 4000);
});

// ============ NEWSLETTER FORM ============
document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = e.target.querySelector('input');
  const original = input.value;
  input.value = 'Thanks!';
  setTimeout(() => { input.value = ''; }, 2000);
});

// ============ SMOOTH ANCHOR LINKS (for older browsers) ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
