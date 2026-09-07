/* =========================================
   CURSOR GLOW
========================================= */

const glow = document.querySelector(".cursor-glow");

if (glow) {

  window.addEventListener("mousemove", (event) => {

    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;

  });

}


/* =========================================
   SCROLL REVEALS
========================================= */

const revealElements =
  document.querySelectorAll(".reveal");


const observer =
  new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    },

    {
      threshold: 0.12,

      rootMargin: "0px 0px -40px 0px"
    }

  );


revealElements.forEach((element) => {

  observer.observe(element);

});


/* =========================================
   MAGNETIC PROJECT EFFECT
========================================= */

const projects =
  document.querySelectorAll(".project");


projects.forEach((project) => {

  project.addEventListener("mousemove", (event) => {

    /*
      Don't use the magnetic effect on
      touch/mobile devices.
    */

    if (window.innerWidth <= 800) {
      return;
    }


    const rect =
      project.getBoundingClientRect();


    const x =
      (event.clientX -
        rect.left -
        rect.width / 2) * 0.012;


    const y =
      (event.clientY -
        rect.top -
        rect.height / 2) * 0.012;


    project.style.transform =
      `translate(${x}px, ${y}px)`;

  });


  project.addEventListener("mouseleave", () => {

    project.style.transform =
      "translate(0, 0)";

  });

});


/* =========================================
   NAVBAR ON SCROLL
========================================= */

const navbar =
  document.querySelector(".navbar");


function updateNavbar() {

  if (!navbar) {
    return;
  }


  if (window.scrollY > 40) {

    navbar.classList.add("scrolled");

  } else {

    navbar.classList.remove("scrolled");

  }

}


window.addEventListener(
  "scroll",
  updateNavbar,
  { passive: true }
);


updateNavbar();


/* =========================================
   CURRENT YEAR
========================================= */

const year =
  document.getElementById("year");


if (year) {

  year.textContent =
    new Date().getFullYear();

}


/* =========================================
   SMOOTH NAVIGATION
========================================= */

document
  .querySelectorAll('a[href^="#"]')
  .forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId =
        link.getAttribute("href");


      if (
        !targetId ||
        targetId === "#"
      ) {
        return;
      }


      const target =
        document.querySelector(targetId);


      if (!target) {
        return;
      }


      event.preventDefault();


      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


/* =========================================
   PROJECT HOVER — RANDOM GLITCH OFFSET
========================================= */

projects.forEach((project) => {

  project.addEventListener("mouseenter", () => {

    project.classList.add("hovered");

  });


  project.addEventListener("mouseleave", () => {

    project.classList.remove("hovered");

  });

});