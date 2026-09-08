// ---- Matrix-style code rain, low opacity, behind vignette ----

const canvas = document.getElementById('rain-canvas');
const ctx = canvas.getContext('2d');
let w, h, columns, drops;
const chars = '01アイウエオカキクケコサシスセソ{}[]<>/*+-=;';
const fontSize = 14;

function setup() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  columns = Math.floor(w / fontSize);
  drops = Array(columns).fill(0).map(() => Math.random() * -100);
}
setup();
window.addEventListener('resize', setup);

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

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion) {
  setInterval(draw, 45);
} else {
  canvas.style.display = 'none';
}

// ---- Discord handle wiring ----
// Fill this in with your actual handle or invite link, then reload.
const discordHandle = null; // e.g. "nawraj111" or "https://discord.gg/yourinvite"

const discordLink = document.getElementById('discordLink');
const discordHandleEl = document.getElementById('discordHandle');

if (discordHandle) {
  discordHandleEl.textContent = discordHandle;
  discordLink.href = discordHandle.startsWith('http')
    ? discordHandle
    : '#';
}
