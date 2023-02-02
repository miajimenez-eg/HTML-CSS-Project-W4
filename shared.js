const toggleNav = document.getElementById("toggle-nav");
const navbar = document.getElementById("nav");

toggleNav.addEventListener("click", function () {
  if (navbar.style.display === "none") {
    navbar.style.display = "block";
  } else {
    navbar.style.display = "none";
  }
});