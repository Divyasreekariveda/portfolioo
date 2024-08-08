document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const options = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "slideInRight 1s ease-out forwards";
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
});


