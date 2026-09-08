// --- Timed reveal sequence (name types, then sections cascade in) ---
document.addEventListener('DOMContentLoaded', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const nameEl = document.getElementById('typed-name');
  const tagline = document.querySelector('.tagline');
  const sections = document.querySelectorAll('main > section');
  const footer = document.querySelector('footer');

  if (reduceMotion) {
    // Skip straight to final state, no animation
    nameEl.style.width = 'auto';
    nameEl.style.borderRight = 'none';
    tagline.classList.add('visible');
    tagline.style.opacity = '1';
    sections.forEach(s => { s.classList.add('visible'); s.style.opacity = '1'; });
    footer.classList.add('visible');
    footer.style.opacity = '1';
    return;
  }

  // Type the name
  nameEl.classList.add('typing');

  // After typing finishes (~1.7s from page load), start blinking cursor
  setTimeout(() => {
    nameEl.classList.remove('typing');
    nameEl.classList.add('done-typing');
    nameEl.style.width = '15ch';
  }, 1700);

  // Cascade reveal: tagline, then each section, then footer
  setTimeout(() => tagline.classList.add('visible'), 1900);
  sections.forEach((section, i) => {
    setTimeout(() => section.classList.add('visible'), 2100 + i * 200);
  });
  setTimeout(() => footer.classList.add('visible'), 2100 + sections.length * 200 + 200);
});

// --- Code rain background ---
(function () {
  const canvas = document.getElementById('rain-canvas');
  const ctx = canvas.getContext('2d');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion) {
    canvas.style.display = 'none';
    return;
  }

  let w, h, columns, drops;
  const chars = '01アイウエオカキクケコサシスセソ{}[]<>/*+-=;';
  const fontSize = 14;

  function setup() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    columns = Math.floor(w / fontSize);
    drops = Array(columns).fill(0).map(() => Math.random() * -100);
  }

  function draw() {
    ctx.fillStyle = 'rgba(10, 11, 13, 0.08)';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#4ADE80';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(char, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > h && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setup();
  window.addEventListener('resize', setup);
  setInterval(draw, 45);
})();
