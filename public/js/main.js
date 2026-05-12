/**
 * public/js/main.js
 * Client-side JavaScript for FixNow
 * Handles: navbar scroll effect, scroll animations, active service pre-selection
 */

// ─── Navbar: add shadow on scroll ───────────────────────────────────────────
const navbar = document.getElementById('mainNavbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// ─── Scroll-reveal animation ─────────────────────────────────────────────────
const animatedEls = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // animate once
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

animatedEls.forEach(el => observer.observe(el));

// ─── Pre-select service from URL param ───────────────────────────────────────
// e.g. /register?service=AC+Repair+%26+Service
const urlParams  = new URLSearchParams(window.location.search);
const svcParam   = urlParams.get('service');
const svcSelect  = document.getElementById('serviceType');

if (svcSelect && svcParam) {
  const opts = svcSelect.options;
  for (let i = 0; i < opts.length; i++) {
    if (opts[i].value === svcParam) {
      svcSelect.selectedIndex = i;
      break;
    }
  }
}

// ─── Smooth internal anchor scrolling ────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
