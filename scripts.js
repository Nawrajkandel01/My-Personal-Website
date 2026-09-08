// ---- Typed hero line ----

const typeTarget = document.getElementById('typeLine');

const fullText = "whoami\n> Nawraj — 18, Kathmandu. building toward independence, one quiet decision at a time.";

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function typeText(el, text, speed = 28) {
  let i = 0;
  el.textContent = '';
  function step() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(step, speed);
    }
  }
  step();
}

if (reduceMotion) {
  typeTarget.textContent = fullText;
} else {
  typeText(typeTarget, fullText);
}

// ---- Subtle animated scanline background ----

const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');

let w, h;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

let scanY = 0;

function drawGrid() {
  ctx.clearRect(0, 0, w, h);

  // faint static grid
  ctx.strokeStyle = 'rgba(78, 232, 181, 0.035)';
  ctx.lineWidth = 1;
  const gap = 48;

  for (let x = 0; x < w; x += gap) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
  for (let y = 0; y < h; y += gap) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }

  // moving scanline band
  const gradient = ctx.createLinearGradient(0, scanY - 60, 0, scanY + 60);
  gradient.addColorStop(0, 'rgba(78, 232, 181, 0)');
  gradient.addColorStop(0.5, 'rgba(78, 232, 181, 0.05)');
  gradient.addColorStop(1, 'rgba(78, 232, 181, 0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, scanY - 60, w, 120);

  scanY += 0.6;
  if (scanY > h + 60) scanY = -60;
}

function animate() {
  drawGrid();
  requestAnimationFrame(animate);
}

if (!reduceMotion) {
  animate();
} else {
  drawGrid();
}

// ---- Discord handle wiring ----
// Fill this in once you give me the actual handle/link.
const discordHandle = null; // e.g. "nawraj#0001" or a discord.gg invite link

const discordLink = document.getElementById('discordLink');
const discordValue = document.getElementById('discordValue');

if (discordHandle) {
  discordValue.textContent = discordHandle;
  discordLink.href = discordHandle.startsWith('http')
    ? discordHandle
    : '#';
}
