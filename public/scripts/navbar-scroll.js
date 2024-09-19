document.addEventListener("scroll", function() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let currentSectionId = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === currentSectionId) {
      link.classList.add("active");
    }
  });
});
