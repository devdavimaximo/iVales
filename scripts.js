const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".ul-nav");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("open");
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

navLinks.addEventListener("click", (e) => {
  if (e.target === navLinks) {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("open");
    document.body.style.overflow = "";
  }
});
