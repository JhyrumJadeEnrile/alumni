/* ============================================
   TUP MTI ALUMNI ASSOCIATION — main.js
   ============================================ */

// ---- MOBILE NAV TOGGLE ----
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  links.classList.toggle('open');
}

// ---- DROPDOWN: click/tap toggle for mobile, hover handles desktop via CSS ----
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.dropdown > a').forEach(function(trigger) {
    trigger.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        const dropdown = trigger.parentElement;
        const isOpen = dropdown.classList.contains('open');
        document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
        if (!isOpen) {
          e.preventDefault();
          dropdown.classList.add('open');
        }
      }
    });
  });
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
    }
  });
});

// ---- HERO SLIDESHOW ----
(function initHeroSlideshow() {
  const slides = document.querySelectorAll('.hero-slide');
  if (!slides.length) return;

  const dotsContainer = document.getElementById('heroDots');
  let current = 0;
  let timer;

  // Create dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    dot.addEventListener('click', () => goTo(i));
    dotsContainer && dotsContainer.appendChild(dot);
  });

  function goTo(index) {
    slides[current].classList.remove('active');
    const dots = dotsContainer ? dotsContainer.querySelectorAll('.dot') : [];
    if (dots[current]) dots[current].classList.remove('active');

    current = (index + slides.length) % slides.length;

    slides[current].classList.add('active');
    if (dots[current]) dots[current].classList.add('active');

    resetTimer();
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 5000);
  }

  resetTimer();
})();

// ---- INNER PAGE SLIDESHOWS ----
// Usage: <div class="slideshow-wrap" data-slideshow="mySlides">
//   <div class="slides-track"> ... </div>
//   <button class="slide-prev">‹</button>
//   <button class="slide-next">›</button>
//   <div class="slide-dots"></div>
// </div>

document.querySelectorAll('.slideshow-wrap').forEach(function(wrap) {
  const track = wrap.querySelector('.slides-track');
  const items  = wrap.querySelectorAll('.slide-item');
  const prevBtn = wrap.querySelector('.slide-prev');
  const nextBtn = wrap.querySelector('.slide-next');
  const dotsEl  = wrap.querySelector('.slide-dots');

  if (!items.length) return;

  let current = 0;
  let timer;

  // Build dots
  items.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goTo(i));
    dotsEl && dotsEl.appendChild(dot);
  });

  function updateDots() {
    const dots = dotsEl ? dotsEl.querySelectorAll('.dot') : [];
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function goTo(index) {
    current = (index + items.length) % items.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    updateDots();

    // Update thumbs if linked
    const id = wrap.dataset.slideshow;
    if (id) {
      document.querySelectorAll(`.thumb-item[data-for="${id}"]`).forEach((t, i) => {
        t.classList.toggle('active', i === current);
      });
    }

    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 5000);
  }

  prevBtn && prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn && nextBtn.addEventListener('click', () => goTo(current + 1));

  // Thumb click → slide
  const id = wrap.dataset.slideshow;
  if (id) {
    document.querySelectorAll(`.thumb-item[data-for="${id}"]`).forEach((t, i) => {
      t.addEventListener('click', () => goTo(i));
    });
  }

  timer = setInterval(() => goTo(current + 1), 5000);
});

// ---- ACTIVE NAV LINK ----
(function markActiveLink() {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') && path.endsWith(a.getAttribute('href').replace(/^.*\//, ''))) {
      a.classList.add('active');
    }
  });
})();
