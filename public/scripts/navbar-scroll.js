document.addEventListener("scroll", function() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let currentSectionId = "";

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === currentSectionId) {
      link.classList.add("active");
    }
  });
});
