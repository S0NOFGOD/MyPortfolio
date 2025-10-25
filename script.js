// 🌟 Smooth Scroll Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// 🌟 Fade-in Animation when scrolling
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", revealSections);

function revealSections() {
  const triggerPoint = window.innerHeight / 1.2;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerPoint) {
      section.classList.add("show");
    }
  });
}