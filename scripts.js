// ---- Matrix-style code rain ----

const canvas = document.getElementById("rain-canvas");

if (canvas) {
  const ctx = canvas.getContext("2d");

  const chars = "01アイウエオカキクケコサシスセソ{}[]<>/*+-=;";
  const fontSize = 14;

  let width;
  let height;
  let columns;
  let drops;

  function setup() {
    width = window.innerWidth;
    height = window.innerHeight;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    columns = Math.ceil(width / fontSize);

    drops = Array.from(
      { length: columns },
      () => Math.random() * -100
    );

    ctx.clearRect(0, 0, width, height);
  }

  function draw() {
    ctx.fillStyle = "rgba(10, 11, 13, 0.08)";
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "rgba(74, 222, 128, 0.55)";
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < columns; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];

      const x = i * fontSize;
      const y = drops[i] * fontSize;

      ctx.fillText(char, x, y);

      if (y > height && Math.random() > 0.975) {
        drops[i] = Math.random() * -20;
      }

      drops[i]++;
    }
  }

  setup();
  window.addEventListener("resize", setup);

  setInterval(draw, 45);
}