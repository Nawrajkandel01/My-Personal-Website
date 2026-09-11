// ==========================================
// MATRIX CODE RAIN BACKGROUND
// ==========================================

const canvas = document.getElementById("rain-canvas");
const ctx = canvas.getContext("2d");

// Matrix characters
const chars =
  "アァカサタナハマヤャラワガザダバパ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz<>/{}[]()#$%&@*+=-";

// Settings
const fontSize = 14;
const speed = 1.2;
const opacity = 0.35;

let columns;
let drops = [];

// Resize canvas
function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;

  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;

  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerHeight + "px";

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  columns = Math.floor(window.innerWidth / fontSize);

  drops = [];

  for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -100;
  }
}

// Draw Matrix rain
function drawRain() {
  // Slight fade creates the trailing effect
  ctx.fillStyle = "rgba(10, 11, 13, 0.08)";
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

  ctx.font = `${fontSize}px monospace`;
  ctx.textAlign = "center";

  for (let i = 0; i < columns; i++) {
    const char = chars[Math.floor(Math.random() * chars.length)];

    const x = i * fontSize;
    const y = drops[i] * fontSize;

    // Subtle green Matrix color
    ctx.fillStyle = `rgba(74, 222, 128, ${opacity})`;

    ctx.fillText(char, x, y);

    // Reset column after it reaches the bottom
    if (
      y > window.innerHeight &&
      Math.random() > 0.975
    ) {
      drops[i] = 0;
    }

    drops[i] += speed;
  }

  requestAnimationFrame(drawRain);
}

// Start
resizeCanvas();
drawRain();

// Recalculate when browser is resized
window.addEventListener("resize", resizeCanvas);