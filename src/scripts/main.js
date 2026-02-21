// Image imports (Vite resolves these to hashed URLs at build time)
import heroBg from '../images/hero-bg.webp';
import galleryStorefront from '../images/gallery-storefront.webp';
import galleryInterior from '../images/gallery-interior.webp';
import galleryRepair from '../images/gallery-repair.webp';
import galleryCounter from '../images/gallery-counter.webp';
import galleryRetail from '../images/gallery-retail.webp';

// Set hero background
document.getElementById('heroBg').style.backgroundImage = `url(${heroBg})`;

// Set gallery images
document.querySelector('#galleryFeatured img').src = galleryStorefront;
document.querySelector('#galleryInterior img').src = galleryInterior;
document.querySelector('#galleryRepair img').src = galleryRepair;
document.querySelector('#galleryCounter img').src = galleryCounter;
document.querySelector('#galleryRetail img').src = galleryRetail;

// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Close mobile nav on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
    navToggle.focus();
  }
});

// Scroll reveal with stagger
const reveals = document.querySelectorAll('.reveal');
let revealCounter = 0;
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const delay = revealCounter * 80;
      revealCounter++;
      setTimeout(() => entry.target.classList.add('visible'), delay);
      observer.unobserve(entry.target);
      // Reset counter after batch completes
      setTimeout(() => { revealCounter = 0; }, 500);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// Reviews: show/hide
const showMoreBtn = document.getElementById('showMoreReviews');
if (showMoreBtn) {
  showMoreBtn.addEventListener('click', () => {
    const hidden = document.querySelectorAll('.review-card.hidden');
    hidden.forEach(card => card.classList.remove('hidden'));
    showMoreBtn.style.display = 'none';
  });
}

