// Kiiltokruunu — minimal interactions

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const mobileNav = document.querySelector('.mobile-nav');

if (toggle && mobileNav) {
  toggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  // Close after selecting a link
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Current year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Back to top
const backToTop = document.querySelector('.footer-bottom a[href="#top"]');
if (backToTop) {
  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
