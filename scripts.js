const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".ul-nav");

menuToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  menuToggle.classList.toggle("open");
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

document.addEventListener("click", (e) => {
  const clickedInsideMenu = navLinks.contains(e.target);
  const clickedMenuButton = menuToggle.contains(e.target);

  if (!clickedInsideMenu && !clickedMenuButton) {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("open");
    document.body.style.overflow = "";
  }
});
