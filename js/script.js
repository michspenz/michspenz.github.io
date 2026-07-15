// ===== Mobile nav toggle =====
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ===== Footer year =====
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== Hero terminal typewriter =====
// Types out a final command line in the hero terminal, then leaves a blinking cursor.
// Respects prefers-reduced-motion by skipping straight to the final state.
const typedEl = document.getElementById('typed-cmd');
const cursorEl = document.getElementById('cursor');

if (typedEl) {
  const command = 'contact --open-to-work';
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    typedEl.textContent = command;
  } else {
    let i = 0;
    const typeSpeed = 55;

    function typeNext() {
      if (i < command.length) {
        typedEl.textContent += command.charAt(i);
        i++;
        setTimeout(typeNext, typeSpeed);
      }
    }
    // small delay before typing starts so the static lines read first
    setTimeout(typeNext, 500);
  }
}
