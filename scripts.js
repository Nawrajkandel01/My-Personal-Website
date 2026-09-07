/* --------------------------------
   CURSOR GLOW
-------------------------------- */

const glow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (e) => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});


/* --------------------------------
   SCROLL REVEALS
-------------------------------- */

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }

    });

  },
  {
    threshold: 0.12
  }
);

document
  .querySelectorAll(".reveal")
  .forEach((element) => observer.observe(element));


/* --------------------------------
   PROJECT MAGNETIC EFFECT
-------------------------------- */

document
  .querySelectorAll(".project")
  .forEach((project) => {

    project.addEventListener("mousemove", (e) => {

      const rect = project.getBoundingClientRect();

      const x =
        (e.clientX - rect.left - rect.width / 2) * 0.015;

      const y =
        (e.clientY - rect.top - rect.height / 2) * 0.015;

      project.style.transform =
        `translate(${x}px, ${y}px)`;

    });

    project.addEventListener("mouseleave", () => {

      project.style.transform =
        "translate(0, 0)";

    });

  });


/* --------------------------------
   CURRENT YEAR
-------------------------------- */

document
  .querySelectorAll("footer")
  .forEach((footer) => {

    footer.innerHTML =
      footer.innerHTML.replace(
        "2026",
        new Date().getFullYear()
      );

  });