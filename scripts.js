// Code rain background — purely decorative, page content no longer depends on this running.
(function () {
  const canvas = document.getElementById('rain-canvas');
  if (!canvas) return;

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
